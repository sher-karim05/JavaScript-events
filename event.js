const func_v = (val) => {
  alert("Input value got changed for transformation to manipulate " + val);
};

const mouseMoveFn = () => {
  document.querySelector(".circle").style.background = "#2274A5";
};

const mouseOutFn = () => {
  document.querySelector(".circle").style.background = "green";
};

const mouseDownFn = () => {
  document.querySelector(".circle").style.border = "10px solid white";
};

const mouseLeaveFn = () => {
  document.querySelector(".circle").style.background = "indigo";
};

const mouseEnterFn = () => {
  document.querySelector(".circle").style.background = "white";
};

const mouseUpFn = () => {
  document.querySelector(".circle").style.border = "2px solid blue";
};
// let  mouseMoveFn=(()=>{

// });
