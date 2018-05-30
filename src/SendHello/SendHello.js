import React from 'react';
import './SendHello.css';
 
const sendHello = (props) => {
    return (
        <div className="SendHello">
            <p onClick={props.click}> I'm {props.name}! And I am {props.age} years old! </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
};
 
export default sendHello;