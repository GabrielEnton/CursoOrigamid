// Duplique o menu e adicione ele em copy
let menu = document.querySelector('.menu');
let cloneMenu = menu.cloneNode(true);
let copy = document.querySelector('.copy');

copy.appendChild(cloneMenu)

// Selecione o primeiro DT da dl de Faq
let dl = document.querySelector('dl');
let primeiroDT = dl.children[0];

console.log(primeiroDT);

// Selecione o DD referente ao primeiro DT
let primeiroDD = primeiroDT.nextElementSibling
console.log(primeiroDD);

// Substitua o conteúdo html de .faq pelo de .animais

let faq = document.querySelector('.faq');
let animais = document.querySelector('.animais');

faq.innerHTML = animais.innerHTML;