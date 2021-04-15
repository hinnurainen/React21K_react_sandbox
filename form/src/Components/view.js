import React from 'react';
import './View.css';

const View = (props) => {
    return (
        <div>
            <h2>This is your input:</h2>
            <div className="input-group">
                <p placeholder="First name">{props.firstname}</p></div>
            <div className="input-group">
                <p placeholder="Last name">{props.lasttname}</p></div>
            <div className="input-group">
                <p placeholder="Phone number">{props.number}</p></div>
            <div className="input-group">
                <p placeholder="Role">{props.role}</p></div>
            <div className="input-group">
                <p placeholder="Message">{props.message}</p></div>
        </div>
    );
};

export default View;