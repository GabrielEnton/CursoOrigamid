let listaAnimais = document.querySelector('.animais-lista');

let height = listaAnimais.scrollHeight;
let animaisTop = listaAnimais.offsetTop;

console.log(animaisTop);

let primeirtoh2 = document.querySelector('h2');
let h2left = primeirtoh2.offsetLeft;

let rect = primeirtoh2.getBoundingClientRect()

console.log(rect);

let small = window.matchMedia('(max-width: 600px)');

if(small.matches) {
  console.log('Tela menor que 600px')
} else {
  console.log('Tela maior que 600px')
}