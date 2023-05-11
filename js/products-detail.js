// perks handler
(function () {
    const perk_descript = document.querySelector('.perk_descript');
    const perk_atr = document.querySelector('.perk_atr');
    const perk_pos = document.querySelector('.perk_pos');
    const perk_detail_descript = document.querySelector('.perk_detail_descript');
    const perk_detail_atr = document.querySelector('.perk_detail_atr');
    const perk_detail_pos = document.querySelector('.perk_detail_pos');

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
            slidesPerView: 5,
        },
        770: {
            slidesPerView: 2.6,
            spaceBetween: 0,
        }
    },
});
