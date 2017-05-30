/*Slider*/
$(function () {
    $('.fadein img:gt(0)').hide();
    setInterval(function () {
        $('.fadein img:first-child').fadeOut(3000).next('img').fadeIn(3000).end().appendTo('.fadein');
<<<<<<< HEAD
    }, 5000);
=======
    }, 4000);
>>>>>>> 40f630bd9c1f12e9b3c6a19e0ba2844893585cec
});