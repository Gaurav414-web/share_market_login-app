export default function Forgot({goLogin}){
    return(
        <>
            <div className="all-input login-input pt-3">
                <div className="d-flex input-wrap !rounded-full">
                    <i className="fa-solid fa-user text-lg"></i><input type="text" className="inter !border-none text-color-new-gray fs-14" id="user-name" placeholder='' style={{width: "90%"}} required />
                    <label className="fs-14 label inter ms-35 !mb-1">Username</label>
                </div>
            </div>
            <div className="text-end me-45 inter text-decoration-underline text-light fs-12" role="button">
                <p onClick={goLogin} className='cursor-pointer'>Login</p>
            </div>
        </>
    )
}