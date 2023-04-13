const menu = document.querySelector('.menu');

menu.classList.add('ativo');
menu.classList.toggle('azul');
menu.classList.remove('azul');
menu.classList.toggle('azul');

if(menu.classList.contains('azul')){
  menu.classList.add('possui-azul');
}

console.log(menu.classList);


const animais = document.querySelector('.animais');

console.log(animais.attributes['data-text']);

const img = document.querySelector('img');
const srcImg = img.getAttribute('alt');

img.setAttribute('alt', 'É uma raposa');

const possuiAlt = img.hasAttribute('alt');
console.log(possuiAlt);

console.log(srcImg);