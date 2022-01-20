import React, { useState } from 'react'
import './DigitalClock.css';
export default function DigitalClock() {

    let currentTime = new Date().toLocaleTimeString();

    const [ctime,setCtime] = useState(currentTime);

    const UpdateTime = () =>{
        currentTime = new Date().toLocaleTimeString();
        setCtime(currentTime);
    }

    setInterval(() => {
        UpdateTime()
    }, 1000);
    return (
        <div>
            <h1>{ctime}</h1>
        </div>
    )
}
