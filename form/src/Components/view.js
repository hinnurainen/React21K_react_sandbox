import React from 'react';
import './View.css';

const View = ({ firstname, lastname, number, role, message }) => {
    return (
        <div className="view">
            <h2>This is your input:</h2>
            <div className="notepad">
                <p> First name: <span>{firstname}</span></p>
                <p>Last name: <span>{lastname}</span></p>
                <p>Phone number:<span>{number}</span></p>
                <p>Role:<span>{role}</span></p>
                <p>Message:<span>{message}</span></p>
            </div>
        </div>
    );
};

export default View;