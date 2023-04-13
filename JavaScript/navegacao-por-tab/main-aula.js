const animais = document.getElementById('animais');
console.log(animais);

const gridSection = document.getElementsByClassName('grid-section');
console.log(gridSection);

const pimeiraLi = document.querySelector('li');
console.log(pimeiraLi);

const pimeiraUl = document.querySelector('ul');
console.log(pimeiraUl);

const linkInterno = document.querySelector('[href^="#"]');
console.log(linkInterno);

const animaisImg = document.querySelectorAll('.animais img');
console.log(animaisImg);

const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

pimeiraUl.classList.add('grid-section');

// console.log(gridSectionHTML);
// console.log(gridSectionNode);

gridSectionNode.forEach(function(item, index){
    console.log(item)
});

const arrayGrid = Array.from(gridSectionHTML);

arrayGrid.forEach(function(item){
    console.log(item);
});