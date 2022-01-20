import React, { useState } from "react";
import "./currTime.css";
export default function FetchCurrTime() {
  let currentTime = new Date().toLocaleTimeString();
  const [cTime, setCTime] = useState(currentTime);
  const FetchTime = () =>{
    currentTime = new Date().toLocaleTimeString();
    setCTime(currentTime);
  }
  
  return (
    <div>
      <div className="style">
        <h1> {cTime} </h1>
        <button onClick={FetchTime}>Get Time</button>
      </div>
    </div>
  );
}
