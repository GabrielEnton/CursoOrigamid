// let h1 = document.querySelector('h1');
// console.log(h1.innerHTML);

let animaisLista = document.querySelector('.animais-lista');
console.log(animaisLista.innerHTML);

let lista = document.querySelector('.animais-lista');

console.log(lista.nextElementSibling);

let animais = document.querySelector('.animais')
let contato = document.querySelector('.contato');
let titulo = contato.querySelector('.titulo');
let mapa = document.querySelector('.mapa')

//contato.insertBefore(animais, mapa);

let novoh1 = document.createElement('h1');
novoh1.innerText = 'Novo Título';
novoh1.classList.add('titulo');

mapa.appendChild(novoh1)

let h1 = document.querySelector('h1');
let faq = document.querySelector('.faq');

let cloneh1 = h1.cloneNode(true);

cloneh1.classList.add('azul')

faq.appendChild(cloneh1);