
$(document).ready(function () {

    // change header on scroll --------------------------- //
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
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


    // fancybox gallery
    Fancybox.bind('[data-fancybox="gallery"]', { 
        loop: false, // Включаємо зациклення галереї
        thumbs: {
            autoStart: true, // Включаємо автозапуск показу мініатюр
            hideOnClose: false // Не ховати мініатюри після закриття галереї
        },
        // Дозволяємо максимальне збільшення зображення при зумі
       
        
    });

    Fancybox.bind('[data-fancybox]', {
        loop: false,
        toolbar: false,
        contentClick: "iterateZoom",
        Images: {
            Panzoom: {
                maxScale: 2,
            },
        },
    });


    // animate library initialization ------------------- //
    AOS.init({
        duration: 500,
        easing: 'ease-in-sine',
        once: true
    });



});