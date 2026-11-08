import { useState , useEffect } from "react"


export default function Watchlist(){
    const [active, setactive] = useState(
        localStorage.getItem("active") || "MCX"
    );

    useEffect(()=>{
        localStorage.setItem("active",active)
    },[active]);

    const baseline = `!w-full !py-2 cursor-pointer`;
    return(
        <>
            <div>
                <div className="flex flex-wrap !m-3 !p-1 !mx-5">
                    <div className="w-1/2">
                        <button className={`${baseline} ${active === 'MCX' ? "text-white" : ""}`} onClick={() => setactive("MCX")}>
                            <span className={`${active === 'MCX' ? "absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-[2px] bg-white rounded-full" : ""}`}></span>
                            MCX
                        </button>
                    </div>
                    <div className="w-1/2">
                        <button className={`${baseline} ${active === 'NFO' ? "border-b-2" : ""}`} onClick={() => setactive("NFO")}>NFO</button>
                    </div>
                </div>
            </div>
        </>
    )
}