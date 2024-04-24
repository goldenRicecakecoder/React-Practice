import {React, useState} from 'react'

const [count, setCount] = useState(0);

function handleClick() {
    setCount(count + 1);
}

function MyButton() {
  return (
    <div>
        <button onClick={handleClick}>
            Clicked {count} times
        </button>
    </div>
  )
}


export default MyButton
