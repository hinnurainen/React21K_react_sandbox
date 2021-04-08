import React from 'react';

const BoxCard = (props) => {
    return (
        <div className="boxes">
            <h2>{props.name}</h2>
            <h3>{props.title}</h3>
            <p>{props.age}</p>
            <button onClick={clickMe}>Contact</button>
        </div >
    );
};

const clickMe = () => {
    console.log("wow");
};

export default BoxCard;