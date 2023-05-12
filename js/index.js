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
    breakpoints: {
        1650: {
            slidesPerView: 4,
        },
        1250: {
            slidesPerView: 3,
        },
        800: {
            slidesPerView: 2,
        },
        770: {
            slidesPerView: 1,
        }
    },
});