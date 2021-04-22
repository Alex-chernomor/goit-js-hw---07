const list = document.querySelectorAll('li.item')
console.log(`В списке ${list.length} категории!`);

const ul = document.querySelectorAll('#categories>li')
ul.forEach((el) => {
    console.log(`Категория: ${el.firstElementChild.textContent}\nКоличество: ${el.lastElementChild.children.length}`);
  })