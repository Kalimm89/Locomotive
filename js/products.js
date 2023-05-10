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

