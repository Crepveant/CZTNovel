import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
    const [, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

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

            if (response.data.sessionToken) {
                // 存储会话令牌
                localStorage.setItem('sessionToken', response.data.sessionToken);
                localStorage.setItem('islogin', 'true');
                // 更新应用状态
                // 重定向到仪表板或主页
                navigate('/');
            } else {
                throw new Error('No session token received');
            }
        } catch (err) {
            console.error('Login failed:', err);
            setError('Login failed. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <>{error}</>
    )
}

export default Login;