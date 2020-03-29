import React, { useState } from 'react';
import logo from './logo.svg';
import HelloApp from './HelloApp'
import './App.css';

var Binladen = 'https://www.thairath.co.th/media/RfCkHnd2y7m1FfsSSOoTfYX6oIvHT1S8VjmViunqOfLNEvGvZ57.jpg';

var App = () => {
    var [count, setCount] = useState(0);
    var [name, setName] = useState("");
    
    const Up = () => {
        setCount(++count);
        if(count>=5) setName("Osama Binladen");
    };

    const Reset = () => {
        setCount(0)
        setName("");
    };

    return (
        <div className="App">
            <p>If you want to know his name, please click 5 times</p>
            <p>You clicked {count} times</p>
            <button onClick={Up}>Click</button> <button onClick={Reset}>Reset</button>
            <p>{name}</p>
            
            <hr />
            <HelloApp message="This is message sent from App" />
            <img src={Binladen} className="App-logo" alt="logo"/> 

            <hr /> 
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
        </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
        </a>
            </header>
        </div>
    );
}

export default App;
