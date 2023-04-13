// Retorne no console todas as imagens do site
let imagens = document.querySelectorAll('img');
console.log(imagens);

// Retorne no console apenas as imagens que começaram com a palavra imagem
let imagensMapa = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imagensMapa);

// Selecione todos os links internos (onde o href começa com #)
let linkInterno = document.querySelectorAll('[href^="#"]');
console.log(linkInterno);

// Selecione o primeiro h2 dentro de .animais-descricao
let primeiroH2 = document.querySelector('.animais-descricao h2');
console.log(primeiroH2);

// Selecione o último p do site
let todosOsP = document.querySelectorAll('p');
console.log(todosOsP[todosOsP.length-1]);

