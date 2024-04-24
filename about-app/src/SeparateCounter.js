//Counter update separately
import {React, useState} from 'react'

function SeparateCounter() {
  return (
    <div>
        <h1>Counters that update separately</h1>
        <CounterButton />
        <CounterButton />
    </div>
  );
}

function CounterButton() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <button onClick={handleClick}>
            Clicked {count} times
        </button>
    )
}


export default SeparateCounter
