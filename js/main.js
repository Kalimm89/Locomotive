//Header search form
(function () {
    const searchBtn = document.getElementById('search_but_on');
    const adress = document.getElementById('p-adress');
    const searchForm = document.getElementById('search_form_mob');
    searchBtn.addEventListener('click', () => {
        searchBtn.style.display = 'none';
        adress.style.display = 'none';
        searchForm.style.display = 'block';
    });
}());

// Burger handler
(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.menu_nav');
    const menuCloseItem = document.querySelector('.menu_nav-close');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('menu_nav_active');
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('menu_nav_active');
    });
}());
