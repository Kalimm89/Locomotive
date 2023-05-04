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

// prod_nav-prod_list handler
(function () {
    const prod_nav = document.querySelector('.prod_nav');
    const prod_nav_hide = document.querySelector('.prod_nav_hide');
    const prod_list = document.querySelector('.prod_list');
    const prod_list_hide = document.querySelector('.prod_list_hide');
    const products_wrap = document.querySelector('.products_wrap');
    const pagination_wrap = document.querySelector('.pagination_wrap');
    const footer = document.querySelector('.footer');

    prod_nav.addEventListener('click', () => {
        if(prod_list_hide.classList.contains('prod_list_hide_active')) {
            prod_list_hide.classList.remove('prod_list_hide_active');
            prod_list.classList.remove('prod_list_active');

            prod_nav_hide.classList.toggle('prod_nav_hide_active');
            prod_nav.classList.toggle('prod_nav_active');
        } else {
            prod_nav_hide.classList.toggle('prod_nav_hide_active');
            prod_nav.classList.toggle('prod_nav_active');
            products_wrap.classList.toggle('products_wrap_active');
            pagination_wrap.classList.toggle('pagination_wrap_active');
            footer.classList.toggle('footer_active');}
    });
    prod_list.addEventListener('click', () => {
        if(prod_nav_hide.classList.contains('prod_nav_hide_active')) {
            prod_nav_hide.classList.remove('prod_nav_hide_active');
            prod_nav.classList.remove('prod_nav_active');

            prod_list_hide.classList.toggle('prod_list_hide_active');
            prod_list.classList.toggle('prod_list_active');
        } else {
            prod_list_hide.classList.toggle('prod_list_hide_active');
            prod_list.classList.toggle('prod_list_active');
            products_wrap.classList.toggle('products_wrap_active');
            pagination_wrap.classList.toggle('pagination_wrap_active');
            footer.classList.toggle('footer_active');}
    });
}());

// Prod_list_menu_desctop handler
(function () {
    const a_main_but = document.querySelector('.a_main_but');
    const li_main_list = document.querySelector('.li_main_list');
    const a_main = document.querySelector('.a_main_first');
    a_main_but.addEventListener('click', () => {
        li_main_list.classList.toggle('li_main_list_close');
        if(li_main_list.classList.contains('li_main_list_close')) {
            a_main.classList.remove('a_main_active');
        } else {
            a_main.classList.add('a_main_active');
        };
    });
}());

// Prod_list_menu_mobile handler
(function () {
    const li_main_but = document.querySelector('.li_main_but');
    const li_main_list = document.querySelector('.li_main_lists');
    const a_main = document.querySelector('.a_mains');
    li_main_but.addEventListener('click', () => {
        li_main_list.classList.toggle('li_main_list_close');
        if(li_main_list.classList.contains('li_main_list_close')) {
            a_main.classList.remove('a_main_active');
        } else {
            a_main.classList.add('a_main_active');
        };
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
