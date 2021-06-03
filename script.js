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
        delay: 1000,
        stopOnLastSlide: true,
        disableOnInteraction: false,
    },

    speed: 1800,
});
/*
    let sliderBlock = document.querySelector('.image-slider');

    sliderBlock.addEventListener("mouseleave", function (e) {
        myImageSlider.params.autoplay.disableOnInteraction = false;
        myImageSlider.params.autoplay.delay = 500;
        myImageSlider.autoplay.start();
    }),

    sliderBlock.addEventListener("mouseenter", function (e) {
        myImageSlider.autoplay.stop();
    })

    let pageSlider = new Swiper('.page' ,{
        
    })
*/

/* Smooth slide navigation */
const menuLinks = document.querySelectorAll('.nav_link[data-goto]');
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

/* Popup */

const popupLinks = document.querySelectorAll('.button_action');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;
const timeout = 800;

if(popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];
        popupLink.addEventListener("click",function(e) {
            const popupName = popupLink.getAttribute('href').replace('#','');
            const curentPopup = document.getElementById(popupName);
            popupOpen(curentPopup);
            e.preventDefault();
        });
    }
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
        const el = popupCloseIcon[index];
        el.addEventListener('click', function(e){
            popupCloseIcon(el.closest('.popup'));
            e.preventDefault();
        });
    }
}








