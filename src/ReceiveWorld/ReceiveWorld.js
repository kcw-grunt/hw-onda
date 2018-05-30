import React from 'react';
import './ReceiveWorld.css';
 
const receiveWorld = (props) => {
    return (
        <div className="receiveWorld">
            <p onClick={props.click}> I'm {props.name}! And I am {props.age} years old! </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
};
 
export default receiveWorld;