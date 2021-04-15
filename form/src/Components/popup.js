import React from 'react';
import './Popup.css';

const closeHandler = () => {
    window.location.reload();
};

const Popup = (props) => {
    return (
        <div>
            <p placeholder="First name">First name: {props.firstname}</p>
            <p placeholder="Last name">Last name: {props.lasttname}</p>
            <p placeholder="Phone number">Phone number: {props.number}:</p>
            <p placeholder="Role">Role: {props.role}</p>
            <p placeholder="Message">Message: {props.message}</p>
            <button onClick={closeHandler}>Are you sure?</button>
            <button onClick={closeHandler}>I don't want to submit.</button>
        </div>
    );
};

export default Popup;