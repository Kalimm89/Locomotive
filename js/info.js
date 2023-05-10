const mediaQuery = window.matchMedia('(min-width: 1400px)');
// Prod_list_menu_desctop handler
if (mediaQuery.matches) {
    (function () {
        const ustav_but = document.querySelector('.ustav_but');
        const vakan_but = document.querySelector('.vakan_but');
        const intro_card_doc_ustav = document.querySelector('.intro_card_doc_ustav');
        const intro_card_doc_vakan = document.querySelector('.intro_card_doc_vakan');
        const intro_card_left = document.querySelector('.intro_card_left');
        ustav_but.addEventListener('click', () => {
            if(intro_card_doc_vakan.classList.contains('show')) {
                intro_card_doc_vakan.classList.remove('show');
                intro_card_left.classList.remove('hide');
                vakan_but.classList.remove('catalog_li_a_act');
    
                intro_card_doc_ustav.classList.toggle('show');
                intro_card_left.classList.toggle('hide');
                ustav_but.classList.toggle('catalog_li_a_act');
            } else {
                intro_card_doc_ustav.classList.toggle('show');
                intro_card_left.classList.toggle('hide');
                ustav_but.classList.toggle('catalog_li_a_act');
            };
        });
        vakan_but.addEventListener('click', () => {
            if(intro_card_doc_ustav.classList.contains('show')) {
                intro_card_doc_ustav.classList.remove('show');
                intro_card_left.classList.remove('hide');
                ustav_but.classList.remove('catalog_li_a_act');
    
                intro_card_doc_vakan.classList.toggle('show');
                intro_card_left.classList.toggle('hide');
                vakan_but.classList.toggle('catalog_li_a_act');
            } else {
                intro_card_doc_vakan.classList.toggle('show');
                intro_card_left.classList.toggle('hide');
                vakan_but.classList.toggle('catalog_li_a_act');
            };
        });
    }());
};