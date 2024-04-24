import React from 'react'

function RespondToEvent() {
    function handleClick(){
        alert('You clicked the button');
    }

  return (
    <div>
        <button onClick={handleClick}>
            Click me
        </button>
    </div>
  );
}


export default RespondToEvent
