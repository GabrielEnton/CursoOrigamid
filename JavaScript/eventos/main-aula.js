let img = document.querySelector('img');

function callback(e) {
  console.log(e);
}

//img.addEventListener('click', callback);

let animaisLista = document.querySelector('.animais-lista');

function callbackLista(e) {
  console.log(e.currentTarget);
  console.log(e.target);
}

animaisLista.addEventListener('click', callbackLista);

let linkExterno = document.querySelector('a[href^="https"]');

function handleLinkExterno(e) {
  e.preventDefault();

  console.log(this.getAttribute('href'));
  console.log(e.currentTarget);
}

linkExterno.addEventListener('click', handleLinkExterno);

let imgs = document.querySelectorAll('img');

function handleImg(e) {
  console.log(e.target);
}

imgs.forEach((img) => {
  img.addEventListener('click', handleImg);
});