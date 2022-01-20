import React, { useState } from "react";
import "./Forms.css";
export default function Forms() {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
  });

  const onSubmits = (event) => {
    event.preventDefault();
  };
  const inputEvent = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);

    const value = event.target.value;
    const name = event.target.name;

    setFullName((preValue) => {
      if (name === "fname") {
        return {
          fname: value,
          lname: preValue.lname,
        };
      } else if ((name === "lname")) {
        return {
          fname: preValue.fname,
          lname: value,
        };
      }
    });
  };

  return (
    <div>
      <form onSubmit={onSubmits}>
        <h1>
          Hello {fullName.fname} {fullName.lname}{" "}
        </h1>
        <input
          type="text"
          placeholder="Enter Your First Name"
          onChange={inputEvent}
          name="fname"
          value={fullName.fname}
        />
        <input
          type="text"
          placeholder="Enter your Last Name"
          onChange={inputEvent}
          name="lname" value={fullName.lname}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
