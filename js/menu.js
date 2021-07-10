(() => {
    const refs = {
        openMenuBtn: document.querySelector('.mob-menu__button-icon'),
        closeMenuBtn: document.querySelector('.mob-menu__button-icon--close'),
        menu: document.querySelector('.mob-menu__nav'),
        buttom: document.querySelector('.mob-menu__button--close'),
    };

    refs.openMenuBtn.addEventListener('click', toggleMenu);
    refs.closeMenuBtn.addEventListener('click', toggleMenu);

    function toggleMenu() {
        refs.menu.classList.toggle('backdrop--is-hidden');
        refs.buttom.classList.toggle('backdrop--is-hidden');
    }
})();