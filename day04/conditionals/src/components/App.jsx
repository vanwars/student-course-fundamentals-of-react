import React, {useState} from "react";
import Login from "./Login";
import Timer from "./Timer";
import ReactForm from "./ReactForm";


function App() {

    const [count, setCount] = useState(123);
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    // Note: don't use arrow functions as class properties:
    function increase () {
        setCount(count + 1);
    };
    function decrease () {
        setCount(count - 1);
    };
    function changeLogin () {
        setIsLoggedIn(!isLoggedIn);
    };

    return <div className="container">
        { isLoggedIn ? <h1>Hello</h1> : <Login /> }
        
        <Timer counts={count} />
        <ReactForm />
        <button className="timer-button" onClick={increase}>+</button>
        <button className="timer-button" onClick={decrease}>-</button>
        <br />
        <button className="timer-button" onClick={changeLogin}>Change Login</button>
    </div>;
}

export default App;
