import React from 'react';
import Counter from './Counter';

import './headerstyles.css';


const Header = () => {
    return (
        <div>
            <h1>
                Heidi's To Do Agenda
            </h1>
            <Counter />
        </div>
    );
};

export default Header;