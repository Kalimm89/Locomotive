const mediaQuery = window.matchMedia('(min-width: 1035px)');
const ustav_but = document.querySelector('.ustav_but');
const vakan_but = document.querySelector('.vakan_but');
const intro_card_doc_ustav = document.querySelector('.intro_card_doc_ustav');
const intro_card_doc_vakan = document.querySelector('.intro_card_doc_vakan');
const intro_card_left = document.querySelector('.intro_card_left');

const intro_card_doc_vakan_mob = document.querySelector('.intro_card_doc_vakan_mob');
const intro_card_doc_ustav_mob = document.querySelector('.intro_card_doc_ustav_mob');
const li_ustav = document.querySelector('.li_ustav');
const li_vakan = document.querySelector('.li_vakan');
// Prod_list_menu_desctop handler
if (mediaQuery.matches) {
    (function () {
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
} else {
    ustav_but.addEventListener('click', () => {
        if(intro_card_doc_vakan_mob.classList.contains('show')) {
            intro_card_doc_vakan_mob.classList.remove('show');
            vakan_but.classList.remove('catalog_li_a_act');
            li_vakan.classList.remove('show');

            intro_card_doc_ustav_mob.classList.toggle('show');
            li_ustav.classList.toggle('show');
            ustav_but.classList.toggle('catalog_li_a_act');
        } else {
            li_vakan.classList.remove('show');
            vakan_but.classList.remove('catalog_li_a_act');

            intro_card_doc_ustav_mob.classList.toggle('show');
            li_ustav.classList.toggle('show');
            ustav_but.classList.toggle('catalog_li_a_act');
        };
    });
    vakan_but.addEventListener('click', () => {
        if(intro_card_doc_ustav_mob.classList.contains('show')) {
            intro_card_doc_ustav_mob.classList.remove('show');
            ustav_but.classList.remove('catalog_li_a_act');
            li_ustav.classList.remove('show');

            intro_card_doc_vakan_mob.classList.toggle('show');
            li_vakan.classList.toggle('show');
            vakan_but.classList.toggle('catalog_li_a_act');
        } else {
            li_ustav.classList.remove('show');
            ustav_but.classList.remove('catalog_li_a_act');

            intro_card_doc_vakan_mob.classList.toggle('show');
            li_vakan.classList.toggle('show');
            vakan_but.classList.toggle('catalog_li_a_act');
        };
    });
};