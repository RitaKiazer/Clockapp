import './App.css';
import { useState, useEffect, useRef } from "react"

function App() {
  const [now, setTime] = useState(new Date());
  useEffect(()=>{
    const id = setInterval(()=>{
      setTime(new Date())
    }, 1000);
    return () => clearInterval(id);
  }, [])

  const second = now.getSeconds() / 60
  const min = (second + now.getMinutes())/60
  const hour = (min + now.getHours()) /12
 
  return (
    <div className="clock">
      <div className="hand-second" style={{transform: `translateX(-50%) rotate(calc(${second * 360}* 1deg))`}}> </div>
      <div className="hand-minute" style={{transform: `translateX(-50%) rotate(calc(${min * 360}* 1deg))`}}> </div>
      <div className="hand-hour" style={{transform: `translateX(-50%) rotate(calc(${hour * 360}* 1deg))`}}> 2</div>
      <div className="number number1">1</div>
      <div className="number number2">2</div>
      <div className="number number3">3</div>
      <div className="number number4">4</div>
      <div className="number number5">5</div>
      <div className="number number6">6</div>
      <div className="number number7">7</div>
      <div className="number number8">8</div>
      <div className="number number9">9</div>
      <div className="number number10">10</div>
      <div className="number number11">11</div>
      <div className="number number12">12</div>
    </div>
  );
}

export default App;
