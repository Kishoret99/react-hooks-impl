const { render } = require("./render");

export const MyReact = (function(){

  // hooks
  const hooksArr = [];
  let hookIndex = 0;

  function useState(initialValue) {
    // to maintain closure for setstate
    const _hookIndex = hookIndex;

    const state = hooksArr[hookIndex]?.value || initialValue;

    const setState = (newState) => {
      hooksArr[_hookIndex] = newState;
      console.log(hooksArr);
    }

    return [state, setState]
  }

  function runner() {
    hookIndex = 0;
    render(hooksArr)();
    setTimeout(runner, 300);
  }
  setTimeout(runner, 300);


  return {
    useState,
    render: render(hooksArr)
  }

})();