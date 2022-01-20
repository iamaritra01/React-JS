import React, { useState } from 'react'
import './hook.css';
export default function StateChange() {
    const state = useState();
    const [count, setCount] = useState(0);
    const increM = () =>{
        setCount(count+1);
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increM}>Click here</button>
        </div>
    )
}
