// perks handler
(function () {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    const perk_descript = document.querySelector('.perk_descript');
    const perk_atr = document.querySelector('.perk_atr');
    const perk_pos = document.querySelector('.perk_pos');
    const perk_detail_descript = document.querySelector('.perk_detail_descript');
    const perk_detail_atr = document.querySelector('.perk_detail_atr');
    const perk_detail_pos = document.querySelector('.perk_detail_pos');

    const perk_detail_descript_mob = document.querySelector('.perk_detail_descript_mob');
    const perk_detail_atr_mob = document.querySelector('.perk_detail_atr_mob');
    const perk_detail_pos_mob = document.querySelector('.perk_detail_pos_mob');
    if (mediaQuery.matches) {
    perk_descript.addEventListener('click', () => {
        if(perk_detail_atr.classList.contains('act') || perk_detail_pos.classList.contains('act')) {
            perk_detail_atr.classList.remove('act');
            perk_detail_pos.classList.remove('act');
            perk_atr.classList.remove('perk_act');
            perk_pos.classList.remove('perk_act');

            perk_detail_descript.classList.toggle('act');
            perk_descript.classList.toggle('perk_act');
        } else {
            perk_detail_descript.classList.toggle('act');
            perk_descript.classList.toggle('perk_act');};
    });
    perk_atr.addEventListener('click', () => {
        if(perk_detail_descript.classList.contains('act') || perk_detail_pos.classList.contains('act')) {
            perk_detail_descript.classList.remove('act');
            perk_detail_pos.classList.remove('act');
            perk_descript.classList.remove('perk_act');
            perk_pos.classList.remove('perk_act');

            perk_detail_atr.classList.toggle('act');
            perk_atr.classList.toggle('perk_act');
        } else {
            perk_detail_atr.classList.toggle('act');
            perk_atr.classList.toggle('perk_act');};
    });
    perk_pos.addEventListener('click', () => {
        if(perk_detail_atr.classList.contains('act') || perk_detail_descript.classList.contains('act')) {
            perk_detail_atr.classList.remove('act');
            perk_detail_descript.classList.remove('act');
            perk_descript.classList.remove('perk_act');
            perk_atr.classList.remove('perk_act');

            perk_detail_pos.classList.toggle('act');
            perk_pos.classList.toggle('perk_act');
        } else {
            perk_detail_pos.classList.toggle('act');
            perk_pos.classList.toggle('perk_act');};
    });
    } else {
        perk_detail_descript.classList.remove('act');

        perk_descript.addEventListener('click', () => {
            if(perk_detail_atr_mob.classList.contains('act') || perk_detail_pos_mob.classList.contains('act')) {
                perk_detail_atr_mob.classList.remove('act');
                perk_detail_pos_mob.classList.remove('act');
                perk_atr.classList.remove('perk_act');
                perk_pos.classList.remove('perk_act');
    
                perk_detail_descript_mob.classList.toggle('act');
                perk_descript.classList.toggle('perk_act');
            } else {
                perk_detail_descript_mob.classList.toggle('act');
                perk_descript.classList.toggle('perk_act');};
        });
        perk_atr.addEventListener('click', () => {
            if(perk_detail_descript_mob.classList.contains('act') || perk_detail_pos_mob.classList.contains('act')) {
                perk_detail_descript_mob.classList.remove('act');
                perk_detail_pos_mob.classList.remove('act');
                perk_descript.classList.remove('perk_act');
                perk_pos.classList.remove('perk_act');
    
                perk_detail_atr_mob.classList.toggle('act');
                perk_atr.classList.toggle('perk_act');
            } else {
                perk_detail_atr_mob.classList.toggle('act');
                perk_atr.classList.toggle('perk_act');};
        });
        perk_pos.addEventListener('click', () => {
            if(perk_detail_atr_mob.classList.contains('act') || perk_detail_descript_mob.classList.contains('act')) {
                perk_detail_atr_mob.classList.remove('act');
                perk_detail_descript_mob.classList.remove('act');
                perk_descript.classList.remove('perk_act');
                perk_atr.classList.remove('perk_act');
    
                perk_detail_pos_mob.classList.toggle('act');
                perk_pos.classList.toggle('perk_act');
            } else {
                perk_detail_pos_mob.classList.toggle('act');
                perk_pos.classList.toggle('perk_act');};
        });
    };
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
    breakpoints: {
        1700: {
            slidesPerView: 5,
        },
        1460: {
            slidesPerView: 4,
        },
        768: {
            slidesPerView: 3,
        },
        1050: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 1,
        },
    },
});
