/* Slider */
new Swiper('.image-slider', {

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },


});

new Swiper('.parallax-slider', {
    parallax: true,
    speed: 2000,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    pagination: {
        el: '.swiper-pagination',
        clickbate: true,
        dynamicBullets: true,
    },

    simulateTouch:true,
    touchRadio: 1,
    touchAngle: 45,
    grabCursor: true,
    slideToClickedSlide: true,

    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },

    mousewheel: {
        sensitivity: 1,
    },

    autoHeight: true,
    slidesPerView: 1,
    spaceBetween: 30,
    sliderPerGroup: 1,
    centeredSlides: true,
    loop: true,

    autoplay: {
        delay: 2000,
        stopOnLastSlide: true,
        disableOnInteraction: false,
    },

    speed: 2000,
});

/* Smooth slide navigation */
const menuLinks = document.querySelectorAll('a[data-goto]');
if(menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });
    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
            window.scrollTo({
                top:gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}