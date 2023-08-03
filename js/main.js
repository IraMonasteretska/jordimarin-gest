
$(document).ready(function () {

    // change header on scroll --------------------------- //
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.header').addClass('change-bg');
        } else {
            $('.header').removeClass('change-bg');
        }
    });

    // burger -------------------------------------------- //
    var burger = document.querySelector(".burger2");
    document.querySelector(".header__burger").addEventListener("click", function () {
        return burger.classList.toggle("on");
    });

    $('.header__burger').click(function () {
        $('.header__menu').toggleClass('show');
    });


    // animate library initialization ------------------- //
    AOS.init({
        duration: 500,
        easing: 'ease-in-sine',
        once: true
    });



});