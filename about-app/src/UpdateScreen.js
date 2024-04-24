//Updating the screen - using useState
import {useState, React} from 'react'

function UpdateScreen() {
    const [count, setCount] = useState(0);

    function counterhandle() {
        setCount(count + 1);
    }

  return (
    <div>
        <button onClick = {counterhandle}>
            Clicked {count} times
        </button>
    </div>
  )
}


export default UpdateScreen
