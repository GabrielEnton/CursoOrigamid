// Adicione a classe ativo a todos os itens do menu
let menuItens = document.querySelectorAll('.menu a');

menuItens.forEach( (el, index) => {
  el.classList.add('ativo');
});
// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menuItens.forEach( (el, index) => {
  el.classList.remove('ativo');
});

menuItens[0].classList.add('ativo');
// Verifique se as imagens possuem o atributo alt
let imagens = document.querySelectorAll('img');

imagens.forEach((el, index) => {
  if(el.hasAttribute('alt')){
    console.log('Possui alt');
  } else {
    console.log(' Não possui alt');
  }
});

// Modifique o href do link externo no menu
menuItens[menuItens.length - 1].setAttribute('href', 'https://www.youtube.com/');
