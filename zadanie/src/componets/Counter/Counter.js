import React, { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        // counter = counter +1;
        setCounter(counter +1);
    }

    const decrement = () => {
        // counter = counter -1;
        setCounter(counter-1);
    }
    return (
        <div><button onClick={decrement}>-1</button> {counter} <button onClick={increment}>+1</button> </div>
    )
}

export default Counter