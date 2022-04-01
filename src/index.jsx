import React from "jsx-dom"
const { useState, render } = require('./my-react').default;

function Component ()  {
  const [count, setCount] = useState(2)
  return (
    <div>
      <button onClick = {() => setCount (count-1)}> - </button>
      <div>Counter: {count } </div>
      <button onClick = {() => setCount (count+1)}> + </button>
    </div>
  );
}

render(Component, document.getElementById('app'));