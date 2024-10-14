import AfterLogin from './component/AfterLogin';
import DiscordLogin from './component/DiscordLogin';

function App() {
    return (
        <>

            <div className='title'>
                Welcome to Crepvéant's Novel Translation Site! 
            </div>
            <div style={{fontSize: "x-large"}}>
                Hello, {localStorage.getItem("islogin") == "true" ? "User" : "Visitor"}
            </div>
            {localStorage.getItem("islogin") == "true" ? <AfterLogin /> : <DiscordLogin />}
        </>
    )
}

export default App;
