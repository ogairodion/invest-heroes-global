import $ from 'jquery';
// eslint-disable-next-line no-unused-vars
global.$ = global.jQuery = $;
import fancybox from "@fancyapps/fancybox";
window.fancybox = $.fancybox;

let windowWidth;

const headerMobile = document.querySelector('.header__mobile');
const headerContent = document.querySelector('.header__content');
const headerMenu = document.querySelector('.header__menu');
const headerBtn = document.querySelector('.header__btn');
const headerLogin = document.querySelector('.header__login');
const headerMobileTop = document.querySelector('.header__mobile-top');

windowWidth = window.innerWidth
adaptiveHeader(windowWidth);

window.addEventListener('resize', () => {
    windowWidth = window.innerWidth
    adaptiveHeader(windowWidth);
});

$("a.scroll").on("click", function () {
    let link = $(this);
    
    $("html, body").animate({
        scrollTop: scrollTo = $(link.attr("href")).offset().top + "px"
    }, {
        duration: 800
    });
    return false;
});

function adaptiveHeader(windowWidth) {
    switch(true) {
        case windowWidth < 1199 && !headerMobile.contains(headerMenu):
            headerMobileTop.append(headerBtn);
            headerMobileTop.append(headerLogin);
            headerMobile.append(headerMenu);
            break;
        case windowWidth > 1199 && !headerContent.contains(headerMenu):
            headerContent.append(headerMenu);
            headerContent.append(headerLogin);
            headerContent.append(headerBtn);
            break;
    }
}

$('.header__burger').on('click', function() {
    if (windowWidth < 1199) {
        $(this).toggleClass('open');
        $('.header').toggleClass('open');

        if ($('.header').hasClass('open')) {
            $('body, html').addClass('overflow-y-hidden');
        } else {
            $('body, html').removeClass('overflow-y-hidden');
        }
    }
});


$(window).on('scroll', function() {
    $('body, html').removeClass('overflow-y-hidden');
    let scrollTop = $(window).scrollTop();

    if (scrollTop > 51) {
        $('.header').addClass('fixed');
    } else {
        $('.header').removeClass('fixed');
    }
});
