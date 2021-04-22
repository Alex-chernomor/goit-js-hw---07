
const range = document.querySelector('#font-size-control')
const output = document.querySelector('#text')

range.addEventListener('input',(e) =>{
 output.style.fontSize = `${range.value}px`;
})