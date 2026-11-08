import { useState,useEffect ,useRef } from 'react'
import './Login.css'

export default function Login({goForgot}){
    const Password = useRef(null)
    const [Show , setShow] = useState(false)

    const togglePassword = () =>{
        setShow(!Show);
    };

    return(
        <>
            <div className="all-input login-input pt-3">
                <div className="d-flex input-wrap !rounded-full">
                    <i className="fa-solid fa-user !text-lg"></i><input type="text" className="inter !border-none text-color-new-gray fs-14" id="user-name" placeholder='' style={{width: "90%"}} required />
                    <label className="fs-14 label inter ms-35 !mb-1">Username</label>
                </div>
            </div>
            <div className="all-input login-input">
                <div className="d-flex input-wrap !rounded-full">
                    <i className="fa-solid fa-lock !text-lg"></i><input type={Show ? "text" : "password"} className="inter !border-none text-color-new-gray fs-14" ref={Password} placeholder='' style={{width: "80%"}} required /><span><button type="button" className="shadow-none border-none bg-transparent !py-0" onClick={togglePassword}>{Show ? <i className="fa-solid fa-eye-slash text-color-new-gray last-eye"></i> : <i className="fa-solid text-color-new-gray fa-eye first-eye"></i>}</button></span>
                    <label className="fs-14 label inter ms-35">Password</label>
                </div>
            </div>

            <div className="text-end me-45 inter text-decoration-underline text-shadow-white fs-12" role="button">
                <p onClick={goForgot} style={{ cursor: "pointer" }}>Forgot Password?</p>
            </div>
        </>
    )
}