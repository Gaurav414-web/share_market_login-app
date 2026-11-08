import Logo from "../../img/logo2.png"

export default function Header(){
    return(
        <>
            <header className="!pt-4 !pb-2 header-moba border-b border-amber-50">
                <div className="flex flex-wrap items-center">
                        <div className="w-2/12 p-0 logo-moba text-center">
                            <img src={Logo} id="" alt="" className="logo-img rounded w-100" role="button"/>
                        </div>
                        {/* <div className="col-25 p-0">
                            <i className="fa-solid fa-angle-left text-white p-3 fs-24" role="button" onclick="history.back()"></i>
                        </div> */}
                    <strong className="w-8/12 text-start ps-2 uppercase inter fs-4">
                        <div className="brand">PERK.com</div>
                        <div className="text-xl">Witchlist</div>
                    </strong>
                    <div className="w-2/12 text-center">
                        <a href="" className="text-decoration-none rounded-lg !p-1 !pt-2.5 bg-white/5 text-reset"><i className="fa-regular fa-bell fs-24 text-white" role="button"></i></a>
                    </div>
                </div>
            </header>

            {/* <div id="sideMenu" className="side-menu">
                <span className="close-btn" id="closeMenu">&times;</span>

                <div className="text-color-new-gray inter">
                    <a href="index.php?activity=<?=PORTFOLIOACTIVE;?>" className="text-decoration-none text-reset"><i className="fa-solid fa-briefcase fs-5 me-4"></i>Portfolio</a>
                    <hr className="m-0 p-0"/>
                    <a href="index.php?activity=<?=TRADESPENDING;?>" className="text-decoration-none text-reset"><i className="fa-solid fa-chart-column fs-5 me-4"></i>Trades</a>
                    <hr className="m-0 p-0"/>
                    <a href="#" className="text-decoration-none text-reset"><i className="fa-solid fa-cart-shopping fs-5 me-4"></i>Order</a>
                    <hr className="m-0 p-0"/>
                    <a href="#" className="text-decoration-none text-reset"><i className="fa-solid fa-trash fs-5 me-4"></i>Clear MCX Wishlist</a>
                    <hr className="m-0 p-0"/>
                    <a href="#" className="text-decoration-none text-reset"><i className="fa-solid fa-trash fs-5 me-4"></i>Clear NFO Wishlist</a>
                    <hr className="m-0 p-0"/>
                    <a href="index.php?activity=<?=PRIVACYPOLICY;?>" className="text-decoration-none text-reset"><i className="fa-solid fa-shield-halved fs-5 me-4"></i>Rules</a>
                    <hr className="m-0 p-0"/>
                    <a href="index.php?activity=<?=LOGOUT;?>" className="text-decoration-none text-reset"><i className="fa-solid fa-right-from-bracket fs-5 me-4 text-red"></i>Logout</a>
                </div>
            </div> */}
        </>
    )
}