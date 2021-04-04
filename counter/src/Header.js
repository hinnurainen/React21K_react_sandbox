import React, { useState, useEffect } from 'react';

const Header = () => {
    let [date, setDate] = useState(new Date());

    useEffect(() => {
        let timer = setInterval(() => setDate(new Date()), 1000)
        return function cleanup() {
            clearInterval(timer)
        }

    });

    return (
        <div>
            <header>
                <h1>Counter App</h1>
                <p> Time : {date.toLocaleTimeString()}</p>
                <p> Date : {date.toLocaleDateString()}</p>
            </header>
        </div>
    )
}

export default Header;


/**const Header = () => {
    return (
        let d = new Date();
    <nav>
        <header>
            <h1>Counter app</h1>
            <p id="date"></p>
            document.getElementById("date").innerHTML = d;
        </header>
    </nav>
    );
};**/

/**
 * import  React, { useState , useEffect } from 'react'

export const DateTime = () => {

    var [date,setDate] = useState(new Date());

    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }

    });

    return(
        <div>
            <p> Time : {date.toLocaleTimeString()}</p>
            <p> Date : {date.toLocaleDateString()}</p>

        </div>
    )
}

export default DateTime
 */

/*
class Header extends Component {
    state = {
        render() {
            let d = new Date();
            return (
                <div>
                    <header>
                        <h1>Counter app</h1>
                        <p id="date"></p>
                        <script>
                            document.getElementById("date").innerHTML = d;
            </script>
                    </header>
                </div>
            );
        }
    }
}
*/