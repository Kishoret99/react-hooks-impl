import React from "jsx-dom"
const { useState, render } = require('./my-react').default;

function ComponentA ()  {
  const [count, setCount] = useState(0)
  return (
    <div>
      <button onClick = {() => setCount (count-1)}> - </button>
      <div>Counter: {count } </div>
      <button onClick = {() => setCount (count+1)}> + </button>
    </div>
  );
}

function Component ()  {
  const [count, setCount] = useState(2)
  return (
    <div>
      <button onClick = {() => setCount (count-1)}> - </button>
      <div>Counter: {count } </div>
      <button onClick = {() => setCount (count+1)}> + </button>
      <ComponentA></ComponentA>
    </div>
  );
}

render(Component, document.getElementById('app'));