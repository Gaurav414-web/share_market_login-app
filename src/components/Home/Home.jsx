import Header from "./Header"
import Footer from "./Taskbar"
import Watchlist from "./Witchlist/Watchlist"
// import Trades from "./Trades/Trades"
// import Portfolio from "./Portfolio/Portfolio"
// // import Account from "./Account/Account"
import { useState, useEffect } from "react"

export default function Home(){
    const [activePage, setActiveTab] = useState(
        localStorage.getItem("activePage")||"Watchlist"
    );

    useEffect(()=>{
        localStorage.setItem("activePage",activePage);
    },[activePage]);
    return(
        <>
            <Header/>
            {activePage === "Watchlist" && <Watchlist />}
            {/* {activePage === "Trades" && <Trades />}
            {activePage === "Portfolio" && <Portfolio />} */}
            {/* {activePage === "Account" && <Account />} */}
            <Footer
                activePage ={activePage}
                setActiveTab ={setActiveTab}
            />
        </>
    )
}