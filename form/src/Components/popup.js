import React from 'react';
import './Popup.css';

const closeHandler = () => {
    window.location.reload();
};

const Popup = ({ firstname, lastname, number, role, message, submit }) => {
    return (
        <div className="overlay">
            <div className="popup">
                <h1>Your note:</h1>
                <div>
                    <p> First name: <span>{firstname}</span></p>
                    <p>Last name: <span>{lastname}</span></p>
                    <p>Phone number:<span>{number}</span></p>
                    <p>Role:<span>{role}</span></p>
                    <p>Message:<span>{message}</span></p>
                    <button onClick={submit}>Yes, I'm sure</button>
                    <button className="secondary" onClick={closeHandler}>I don't want to submit</button>
                </div>
            </div>
        </div>
    );
};

export default Popup;