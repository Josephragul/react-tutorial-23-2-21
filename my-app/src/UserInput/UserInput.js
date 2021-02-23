import React  from "react";
import './UserInput.css'
const UserInput = props =>{
    return (
      <div>
        <input type="text" className={'userInput'} onChange={props.changed} placeholder="Enter your Name" />
      </div>
    );
}

export default UserInput;