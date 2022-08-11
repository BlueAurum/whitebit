var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    breakpoints: {
        1440: {
            slidesPerView: 4
        },
        1300: {
            slidesPerView: 4
        },
        1200: {
            slidesPerView: 4
        },
        1120: {
            slidesPerView: 3
        }
        , 1000: {
            slidesPerView: 3
        },
        900: {
            slidesPerView: 3
        },
        800: {
            slidesPerView: 3
        },
        756: {
            slidesPerView: 2
        },
        700: {
            slidesPerView: 2
        },
        600: {
            slidesPerView: 2
        },
        500: {
            slidesPerView: 2
        },
        400: {
            slidesPerView: 1
        },
        300: {
            slidesPerView: 1
        }
    },
    spaceBetween: 30,
    freeMode: true,
    loop: true
});

