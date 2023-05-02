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
//popper
tippy('.tool-tip', {
    animation: 'scale',
    theme: 'tomato',
    allowHTML: true,
});
//Catalog
(function () {
    const li1 = document.getElementById('catalogli-1');
    const li2 = document.getElementById('catalogli-2');
    const li3 = document.getElementById('catalogli-3');
    const li4 = document.getElementById('catalogli-4');
    const li5 = document.getElementById('catalogli-5');
    const li6 = document.getElementById('catalogli-6');
    const catalogimg = document.getElementById('catalogimg');
    li1.addEventListener('mouseover', () => {
        catalogimg.style.backgroundImage = "url('/img/catalog-img-1.png')";
    });
    li2.addEventListener('mouseover', () => {
        catalogimg.style.backgroundImage = "url('/img/catalog-img-2.png')";
    });
    li3.addEventListener('mouseover', () => {
        catalogimg.style.backgroundImage = "url('/img/catalog-img-3.png')";
    });
    li4.addEventListener('mouseover', () => {
        catalogimg.style.backgroundImage = "url('/img/catalog-img-4.png')";
    });
    li5.addEventListener('mouseover', () => {
        catalogimg.style.backgroundImage = "url('/img/catalog-img-5.png')";
    });
    li6.addEventListener('mouseover', () => {
        catalogimg.style.backgroundImage = "url('/img/catalog-img-6.png')";
    });
}());
//Swiper
new Swiper('.swiper', {
    loop: false,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 5,
    breakpoints: {
        1330: {
            slidesPerView: 4,
        },
        770: {
            slidesPerView: 2.6,
            spaceBetween: 0,
        }
    },
});
