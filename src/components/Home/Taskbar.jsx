import Trades from '../../img/profit.svg'
import { useState, useEffect } from 'react';
export default function Taskbar(activePage, setActiveTab){
    const [activeTabTwo, setActiveTabTwo] = useState(
            localStorage.getItem("activeTabTwo") || "Witchlist"
        );
    
        useEffect(()=>{
            localStorage.setItem("activeTabTwo",activeTabTwo)
        },[activeTabTwo]);

        const baseline = `text-decoration-none text-reset`;
    return(
        <section className="dashboard-footer">
            <footer className="aap-footer">
                <ul className="footer-menu-list">
                    <li className="nav-item list-unstyled pb-1 <?= $footclassName; ?>">
                        <button className={`${baseline} ${activeTabTwo === "Witchlist" ? "text-white" : ""}`} onClick={() => setActiveTabTwo("Witchlist")}>
                            <span className={`${activeTabTwo === "Witchlist" ? "absolute top-2 left -translate-x-1/2 w-10 h-[2px] bg-white rounded-full" : ""}`}></span>
                            <div className="text-center"><i className="fa-solid fa-list text-md"></i></div>
                            <span className="inter text-sm">Watchlist</span>
                        </button>
                    </li>
                    <li className="nav-item list-unstyled pb-1 <?= $footclassNameTwo; ?>">
                        <button className="text-decoration-none text-reset" onClick={() => setActiveTabTwo("Trades")}>
                            <span className={`${activeTabTwo === "Trades" ? "absolute top-2 left -translate-x-1/2 w-10 h-[2px] bg-white rounded-full" : ""}`}></span>
                            <div className="text-center text-md">
                                <svg width="20" height="24" className='!mx-auto' viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                                    <polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 014-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 01-4 4H3"></path>
                                </svg>
                            </div>
                            <span className="inter text-sm">Trades</span>
                        </button>
                    </li>
                    <li className="nav-item list-unstyled pb-1 <?= $footclassNameThree; ?>">
                        <button className="text-decoration-none text-reset" onClick={() => setActiveTabTwo("Portfolio")}>
                            <span className={`${activeTabTwo === "Portfolio" ? "absolute top-2 left -translate-x-1/2 w-10 h-[2px] bg-white rounded-full" : ""}`}></span>
                            <div className="text-center"><i className="fa-solid fa-chart-simple text-lg"></i></div>
                            <span className="inter text-sm">Portfolio</span>
                        </button>
                    </li>
                    <li className="nav-item list-unstyled pb-1 <?= $footclassNameFour; ?>">
                        <button className="text-decoration-none text-reset" onClick={() => setActiveTabTwo("Account")}>
                            <span className={`${activeTabTwo === "Account" ? "absolute top-2 left -translate-x-1/2 w-10 h-[2px] bg-white rounded-full" : ""}`}></span>
                            <div className="text-center"><i className="fa-solid fa-user text-lg"></i></div>
                            <span className="inter text-sm">Account</span>
                        </button>
                    </li>
                </ul>
            </footer>
        </section>
    )
}