const ReactDOM = require('react-dom');

let _Component = null;
let _root = null;
let _hooksArr = null;

export const render = (hooksArr) => (Component = _Component, root = _root) => {

  // check if value of state are changed. else render
  if (JSON.stringify(hooksArr) === _hooksArr) {
    return ;
  } else {
    _hooksArr = JSON.stringify(hooksArr);
  }

  _Component = Component;
  _root = root;

  return ReactDOM.render(Component, root);
};
