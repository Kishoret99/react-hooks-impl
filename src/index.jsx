const { MyReact } =  require('./my-react')
const React = require('react');

function  Component ( )  {
  const [count, setCount] = MyReact.useState(1);
  console.log('@@@@', count);

  return (
    <div>
      <button onClick = {() => setCount (count-1)}> - </button>
      <div>Counter: {count } </div>
      <button onClick = {() => setCount (count+1)}> + </button>
    </div>
  );
}

MyReact.render(<Component />, document.getElementById('app'));