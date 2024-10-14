import React, { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';
import { closeLoginWindow } from './App';

const Login: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');

        if (code) {
            handleDiscordCallback(code);
        }
    }, []);

    const handleDiscordCallback = async (code: string) => {
        setIsLoading(true);
        setError(null);
    
        try {
            const response = await axios.post('https://czt.wynnzeng2010.workers.dev/auth/discord/callback', { code });    
            if (response.data.sessionToken && response.data.isInGuild && response.data.hasRequiredRole) {
                localStorage.setItem('sessionToken', response.data.sessionToken);
                localStorage.setItem('islogin', 'true')
                closeLoginWindow()
            } else if (response.data.isInGuild && !response.data.hasRequiredRole) {
                setError("There are four situations in your account:\n1. You have not purchased the original work yet!\n2. You have not submitted for review, please submit the payment screenshot to the review channel owp-authentication!\n3. The review failed, please change your ciweimao account name to the same name as Discord for review!\n4. The review is in progress, please wait patiently!");
            } else if (!response.data.isInGuild) {
                setError('You have not joined our Discord yet, click to join: ');
            } else {
                throw new Error(response.data.message || 'Authentication failed');
            }
        } catch (err) {
            console.error('Login failed:', err);
            const responseData = (err as AxiosError).response?.data;
            const errorMessage = responseData && typeof responseData === 'object' && 'message' in responseData
                ? (responseData as { message: string }).message
                : 'Login failed. Please try again.';
            setError(errorMessage);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div style={{textAlign: "center"}}>
            {isLoading && <div>Loading...</div>}
            {error}
            {(error != null) && <button onClick={() => closeLoginWindow()}>Back to Homepage</button>}
        </div>
    )
}

export default Login;