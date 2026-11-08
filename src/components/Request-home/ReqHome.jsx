import './ReqHome.css'
import { useState } from 'react';
import LOGO from '../../img/logo2.png'
import Login from './Login/Login'
import Forgot from './Forgot/Forgot';

export default function ReqHome(){
    const [page, setPage] = useState("login");
    return(
        <>
            <div className="page-scroll">
                <div>
                    <div className="logo-wrap">
                        <div className="logo-box">
                                <img src={LOGO} alt="<?=SITE_TITLE;?>" width="100%" />
                        </div>
                        <div className="brand">PERK.com</div>
                    </div>
                    <div className="heading">
                        <h1>Transforming Data into Inside</h1>
                    </div>
                    <div>
                        <form action="" method="post" enctype="multipart/form-data" id="">
                            <input type="hidden" name="activity" value=""/>
                                {/* 🔄 Dynamic Form */}
                                {page === "login" ? (
                                    <Login goForgot={() => setPage("forgot")} />
                                ) : (
                                    <Forgot goLogin={() => setPage("login")} />
                                )}
                            <div className="btn-login !pt-3">
                                <a href=""><button type="button" id="loginbtn" className="submit inter !rounded-full !uppercase fs-14 container">
                                    {page === "login" ? (
                                        "Login"
                                    ) : (
                                        "Forgot"
                                    )}
                                    </button></a>
                            </div>
                        </form>
                        <div className="w-80  !mx-auto !pt-4 disclaimer-pera">
                            <h6 className="text-start inter">Disclaimer:</h6>
                            <div className="text-start inter fs-12 disclaimer inter">
                                <div>No real money involved. This is a virtual trading application which has all features to trade.</div>
                                <div>This application is use for exchanging view on market for trading purpose only.</div>
                                <div>The Super Trade is not liable for any real money transaction. We don't deal in any real money.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}