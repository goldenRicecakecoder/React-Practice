//Update together the component using useState
import {React, useState} from 'react'


function UpdateTogether() {
    const [count, setCount] = useState(0);

    function handleClick(){
        setCount(count + 1);
    }
  return (
    <div>
        <h1>UpdateTogether</h1>
        <CountButtonTogether count={count} onClick={handleClick} />
        <CountButtonTogether count={count} onClick={handleClick} />
        </div>
  );
}

function CountButtonTogether({ count, onClick }) {
    return (
        <button onClick={onClick}>
            Clicked {count} times
        </button>
    );
}


export default UpdateTogether
