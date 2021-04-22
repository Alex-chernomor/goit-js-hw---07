
const enterName = document.querySelector('#name-input');
const yourName = document.querySelector('#name-output');

enterName.addEventListener('input', event => {
  (enterName.value === '') ? yourName.textContent = 'незнакомец': yourName.textContent = enterName.value;
})

