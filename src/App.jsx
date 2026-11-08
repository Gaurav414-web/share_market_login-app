import { useState,useEffect } from 'react'
import './App.css'
import './color&fonts.css'
import './Responsive.css'
import ReqHome from './components/Request-home/ReqHome.jsx'
import Home from './components/Home/Home.jsx'

function App() {

  const [time,setTime] = useState("")

  useEffect(()=>{
    const Interval = setInterval(()=>(
      setTime(new Date().toLocaleTimeString())
    ),1000);

    return() => clearInterval(Interval);
  },[])

  return (
    <>
            <div className="bg-layer">
            <div className="grid"></div>
            <div className="bg-glow"></div>
            <svg className="bg-chart" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
            <polyline
              className="wave-line"
              points="0,480 70,445 140,490 210,415 280,455 350,385 420,425 490,360 560,400 630,335 700,380 770,315 840,360 910,295 980,345 1050,275 1120,325 1190,255 1260,305 1330,235 1400,280 1440,220"
              fill="none"
              stroke="#26d98b"
              strokeWidth="1.5"
            />
            <polyline className="wave-line"
                  points="0,620 90,588 180,628 270,560 360,598 450,530 540,572 630,505 720,548 810,478 900,522 990,455 1080,500 1170,432 1260,476 1350,410 1440,455"
                  fill="none" stroke="#ff4d4d" strokeWidth="1.5" style={{animationDelay:"0.8s"}}/>
            
            <g opacity="0.55">
                  <g className="candle-group"><line x1="80"  y1="210" x2="80"  y2="370" stroke="#26d98b" stroke-width="1.5"/><rect x="73"  y="240" width="14" height="90" fill="#26d98b"/></g>
                  <g className="candle-group"><line x1="122" y1="190" x2="122" y2="340" stroke="#26d98b" stroke-width="1.5"/><rect x="115" y="218" width="14" height="78" fill="#26d98b"/></g>
                  <g className="candle-group"><line x1="164" y1="225" x2="164" y2="375" stroke="#ff4d4d" stroke-width="1.5"/><rect x="157" y="258" width="14" height="82" fill="#ff4d4d"/></g>
                  <g className="candle-group"><line x1="206" y1="196" x2="206" y2="352" stroke="#26d98b" stroke-width="1.5"/><rect x="199" y="225" width="14" height="78" fill="#26d98b"/></g>
                  <g className="candle-group"><line x1="248" y1="175" x2="248" y2="320" stroke="#ff4d4d" stroke-width="1.5"/><rect x="241" y="204" width="14" height="72" fill="#ff4d4d"/></g>
            </g>
            <g opacity="0.55">
                  <g className="candle-group"><line x1="1160" y1="395" x2="1160" y2="560" stroke="#26d98b" stroke-width="1.5"/><rect x="1153" y="428" width="14" height="92" fill="#26d98b"/></g>
                  <g className="candle-group"><line x1="1202" y1="375" x2="1202" y2="535" stroke="#ff4d4d" stroke-width="1.5"/><rect x="1195" y="408" width="14" height="82" fill="#ff4d4d"/></g>
                  <g className="candle-group"><line x1="1244" y1="355" x2="1244" y2="515" stroke="#26d98b" stroke-width="1.5"/><rect x="1237" y="386" width="14" height="88" fill="#26d98b"/></g>
                  <g className="candle-group"><line x1="1286" y1="335" x2="1286" y2="492" stroke="#26d98b" stroke-width="1.5"/><rect x="1279" y="365" width="14" height="78" fill="#26d98b"/></g>
                  <g className="candle-group"><line x1="1328" y1="315" x2="1328" y2="475" stroke="#ff4d4d" stroke-width="1.5"/><rect x="1321" y="348" width="14" height="82" fill="#ff4d4d"/></g>
            </g>
            <circle cx="720" cy="450" r="220" fill="none" stroke="rgba(255,215,0,0.025)" stroke-width="90"/>
            </svg>
            </div>
            
            <div className="scene">
            
            <div className="phone-wrap">
            <div className="iphone">
                  <div className="screen">
            
                  <div className="island">
                  <div className="island-dot"></div>
                  <div className="island-cam"></div>
                  </div>

                  <div className="statusbar">
                  <div>{time}</div>
                  <div className="sb-icons">
                     
                        <svg width="16" height="11" viewBox="0 0 16 11" fill="rgba(255,255,255,0.65)">
                        <rect x="0"  y="7" width="3" height="4"  rx="0.5"/>
                        <rect x="4.5" y="4.5" width="3" height="6.5" rx="0.5"/>
                        <rect x="9"  y="2" width="3" height="9"  rx="0.5"/>
                        <rect x="13" y="0" width="3" height="11" rx="0.5" opacity="0.25"/>
                        </svg>
                    
                        <div>5G</div>
                   
                        <svg width="24" height="12" viewBox="0 0 24 12">
                        <rect x="0" y="1" width="20" height="10" rx="2.5" fill="none" stroke="rgba(255,255,255,0.65)" stroke-width="1.2"/>
                        <rect x="2" y="3" width="13" height="6" rx="1" fill="rgba(212,175,55,0.9)"/>
                        <rect x="21" y="4" width="3" height="4" rx="1.2" fill="rgba(255,255,255,0.35)"/>
                        </svg>
                  </div>
                  </div>
                      <ReqHome/>
                  <div className="app">
                  </div>
                  </div>
            </div>
            </div>
            </div>
    </>
  )
}

export default App
