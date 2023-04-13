function initTabNav() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');

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

function initScrollSuave() {
    const linkInternos = document.querySelectorAll('.js-menu a[href^="#"]');

    function scrolltoSection(e) {
        e.preventDefault();
        const href = e.currentTarget.getAttribute('href');
        const section = document.querySelector(href);


        // forma alternativa
        //const topo = section.offsetTop
        // window.scrollTo({
        //     top: topo,
        //     behavior: 'smooth'
        // });

        section.scrollIntoView({
            behevior: 'smooth',
            block: 'start'
        });

    }

    linkInternos.forEach((link) => {
        link.addEventListener('click', scrolltoSection);
    });
}

