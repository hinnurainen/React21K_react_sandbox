import React from 'react';

const Box = (props) => {
    return (
        <div className="box">
            <h2>Name: {props.name}</h2>
            <p>Age: {props.age}</p>
            <p>Title: {props.title}</p>
        </div>
    );
};

const Main = () => {
    return (
        <nav className="wrapper">
            <main>
                <Box name="Maria" age="25" title="priest" />
                <Box name="Heidi" age="36" title="wonderer" />
                <Box name="Laura" age="30" title="hacker" />
            </main>
        </nav>
    );
};

export default Main;