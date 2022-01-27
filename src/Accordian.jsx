import React, { useState } from 'react';
import './Accordian.css';
import {questions} from './api';
import MyAccordian from './MyAccordian';
function Accordian(props) {
    const [data,setData] = useState(questions);

    return (
        <div>
        <section className='main_div'>

             {
                 data.map((curElem) => {
                     const {id} = curElem;
                     return <MyAccordian  key={id} {...curElem}/>
                 })
             }
             </section>
        </div>
    );
}

export default Accordian;