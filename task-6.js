const text = document.querySelector('#validation-input')


text.addEventListener('blur', (e)=>{
  if (text.value.length == text.dataset.length){
    text.classList.add('valid');
    text.classList.remove('invalid');
  } else {
    text.classList.add('invalid');
    text.classList.remove('valid');}
})



