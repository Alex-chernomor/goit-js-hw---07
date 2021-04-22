const body = document.querySelector('body');
body.insertAdjacentHTML('beforeend','<button class = "reset button" type = "button">Reset</button>');

const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const value = document.querySelector('#value');
const box = document.querySelector('#counter');
const reset = document.querySelector('.reset');

let counterValue = 0;

document.addEventListener('click',(e)=>{
  e.target === minus ? counterValue = counterValue - 1 : 
  e.target === plus ? counterValue = counterValue + 1:'';
  e.target === reset ? counterValue = 0 : '';
  value.textContent = counterValue
})

