import AfterLogin from './component/AfterLogin';
import DiscordLogin from './component/DiscordLogin';

var loginWindow: Window | null = null;

export const openLoginWindow = () => {
    loginWindow = window.open("https://discord.com/oauth2/authorize?client_id=1293967688946814986&response_type=code&redirect_uri=https%3A%2F%2Fcztnovel.pages.dev%2Flogin&scope=identify+guilds", "Discord Login", "popup,location=no,width=800,height=600,toolbar=no,menubar=no")
    console.log(loginWindow)
}

export function closeLoginWindow() {
    (loginWindow as Window).close()
}

function App() {
    return (
        <>

            <div className='title'>
                Welcome to Crepvéant's Novel Translation Site! 
            </div>
            <div style={{fontSize: "x-large"}}>
                Hello, {localStorage.getItem("islogin") == "true" ? "Original Work Payer!" : "Visitor"}
            </div>
            {localStorage.getItem("islogin") == "true" ? <AfterLogin /> : <DiscordLogin />}
            There is no chapters yet...
        </>
    )
}

export default App;
