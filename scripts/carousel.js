const swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
        delay: 10000, // Czas między przejściami (w milisekundach)
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});