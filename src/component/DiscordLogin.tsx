function openDiscord() {
    window.open("https://discord.com/oauth2/authorize?client_id=1293967688946814986&response_type=code&redirect_uri=https%3A%2F%2Fcztnovel.pages.dev%2Flogin&scope=identify+guilds", "Discord Login", "popup,location=no,width=800,height=600,toolbar=no,menubar=no")
}
function DiscordLogin() {
    return (
        <>
            <div id="loginfirst">Please <button style={{margin: "8px"}} onClick={() => openDiscord()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <g fill="currentColor" fill-opacity="0">
                        <circle cx="9" cy="12" r="1.5" fill-opacity="1" />
                        <circle cx="15" cy="12" r="1.5" fill-opacity="1" />
                    </g>
                    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
                        <path d="M12 6h2l1 -2c0 0 2.5 0.5 4 1.5c3.53 2.35 3 9.5 3 10.5c-1.33 2.17 -5.5 3.5 -5.5 3.5l-1 -2M12 6h-2l-0.97 -2c0 0 -2.5 0.5 -4 1.5c-3.53 2.35 -3 9.5 -3 10.5c1.33 2.17 5.5 3.5 5.5 3.5l1 -2" />
                        <path d="M5.5 16c5 2.5 8 2.5 13 0" />
                    </g>
                </svg>
                Log In
            </button> first or read free chapters in <button style={{margin: "8px"}} onClick={() => window.open("https://www.webnovel.com/profile/4326197942")}>WebNovel</button>.</div>
        </>
    )
}

export default DiscordLogin;