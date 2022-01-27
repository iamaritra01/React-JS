import React, { useState } from "react";

function MyAccordian({ question, answer }) {
    const [show, setShow] = useState(true);
  return (
    <div>
      <div className="main-heading">
        <p onClick={() => setShow(!show)}>{show? "➖":"➕"}</p>
        <h3>{question}</h3>
      </div>
      {
         show &&  <p className="answers">{answer}</p>
      }
      
    </div>
  );
}

export default MyAccordian;
