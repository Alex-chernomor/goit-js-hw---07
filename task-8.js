const number = document.querySelector('#number');
const createButton = document.querySelector('#createButton');
const deleteButton = document.querySelector('#deleteButton');
const boxes = document.querySelector('#boxes');

let a = 30;
let b = 30;
createButton.addEventListener('click', (e)=>{
 for(i=1; i<=number.value; i++){
       let rnd1 = Math.random() * 255;
       let rnd2 = Math.random() * 255;
       let rnd3 = Math.random() * 255;
       const div = document.createElement('div');
       div.style.backgroundColor = `rgb(${rnd1} ${rnd2} ${rnd3})`;
           div.style.width = a + 'px';
           div.style.height = b + 'px';
           div.style.margin = 10 + 'px';
           boxes.append(div);
           a += 10;
           b += 10;
 }
})

deleteButton.addEventListener('click', (e)=>{
  for(i=1; i<=number.value; i++){
    boxes.removeChild(boxes.lastChild)
    a -= 10;
    b -= 10;
   }
})
