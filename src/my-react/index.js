const { render } = require("./render");

export const hooks = (function(){

  // hooks
  const hooksArr = [];
  let hookIndex = 0;

  function useState(initialValue) {
    // to maintain closure for setstate
    const _hookIndex = hookIndex;

    const state = hooksArr[hookIndex] !== undefined ?  hooksArr[hookIndex] : initialValue;

    const setState = (newState) => {
      hooksArr[_hookIndex] = newState;
      console.log(hooksArr);
    }

    return [state, setState]
  }

  function startRender() {
    hookIndex = 0;
    render(hooksArr)();
    window.requestAnimationFrame(startRender);
  }
  setTimeout(startRender, 300);

  return {
    useState,
    render: render(hooksArr),
  }

})();

export default hooks;