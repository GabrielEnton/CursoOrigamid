// Verifique a distância da primeira imagem
// em relação ao topo da página
let imagem = document.querySelector('img');
console.log(imagem.offsetTop);

// Retorne a soma da largura de todas as imagens
function somaImagens() {
  let imagens = document.querySelectorAll('img');
  let soma = 0;

  imagens.forEach((el, index) => {
    soma += el.clientHeight;
  });
  console.log(soma);
}

window.onload = function() {
  somaImagens();
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
let link = document.querySelectorAll('a');

link.forEach((el) => {
  let linkWidth = el.offsetWidth;
  let linkHeight = el.offsetHeight;

  if(linkWidth >= 48 && linkHeight >= 48) {
    console.log(el, 'Possui acessibilidade');
  }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
let mobile = window.matchMedia('(max-width: 720px)'),matches;

if(mobile) {
  document.querySelector('.menu').classList.add('menu-mobile');
}