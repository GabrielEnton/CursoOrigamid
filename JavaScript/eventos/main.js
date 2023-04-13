
// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

let links = document.querySelectorAll('.menu a');

links.forEach((link) => {
    link.addEventListener('click', function(e){
        e.preventDefault();
        links.forEach((link) => {
            link.classList.remove('ativo');
        });
        e.target.classList.add('ativo');
    });
});


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

let todosElementos = document.querySelectorAll('body *');

todosElementos.forEach((elemento) => {
    elemento.addEventListener('click', function() {
        console.log(this);
    });
});

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
todosElementos.forEach((elemento) => {
    elemento.addEventListener('click', function() {
        //this.remove();
    });
});

// Se o usuário clicar na tecla (t), aumente todo o texto do site.

window.addEventListener('keydown', function(e){
    if(e.key === 't') {
        document.documentElement.classList.toggle('textomaior');
    }
});