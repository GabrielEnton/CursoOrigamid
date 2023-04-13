let tabMenu = document.querySelectorAll('.js-tabmenu li');
let tabContent = document.querySelectorAll('.js-tabcontent section');

if(tabContent.length && tabContent.length){
    tabContent[0].classList.add('ativo');

function activeTab(index) {
    tabContent.forEach((e) => {
        e.classList.remove('ativo');
    });
    tabContent[index].classList.add('ativo')
}

tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener('click', function(){
        activeTab(index);
    });
});
}