function initTabNav() {
    let tabMenu = document.querySelectorAll('.js-tabmenu li');
    let tabContent = document.querySelectorAll('.js-tabcontent section');

    if (tabContent.length && tabContent.length) {
        tabContent[0].classList.add('ativo');

        function activeTab(index) {
            tabContent.forEach((e) => {
                e.classList.remove('ativo');
            });
            tabContent[index].classList.add('ativo')
        }

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', function () {
                activeTab(index);
            });
        });
    }
}

initTabNav();

function initAccordion() {
    const accordionListe = document.querySelectorAll('.js-accordion dt');

    if (accordionListe.length) {
        accordionListe[0].classList.add('ativo');
        accordionListe[0].nextElementSibling.classList.add('ativo');

        function activeAccordion() {
            this.classList.toggle('ativo')
            this.nextElementSibling.classList.toggle('ativo');
        }

        accordionListe.forEach((item) => {
            item.addEventListener('click', activeAccordion);
        });
    }

}

initAccordion();