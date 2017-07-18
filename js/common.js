/****************Функция для закрепления меню при скроле*******************/
$( window ).scroll(function() {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if(scrolled>=100){
        $('#scrolled_navbar').css( "background","white" );
        $('header .navbar .logo').css( "color","black" );
        $('.navbar-nav li .nav-items').removeClass('nav-items');
        $('.navbar-nav li a').addClass('nav-items-scrolled');
        $('.icon-bars').css('background','black');
    }
    else if(scrolled<100){
        $('#scrolled_navbar').css( "background","transparent" );
        $('header .navbar .logo').css( "color","white" );
        $('.navbar-nav li .nav-items-scrolled').removeClass('nav-items-scrolled');
        $('.navbar-nav li a').addClass('nav-items');
        $('.icon-bars').css('background','white');

    }
});


$('.icon-button').on('click',function () {
    $('.collapsed-menu').css('display','block');
    $('#scrolled_navbar').css('display','none');
    $(document).css('overflow','hidden');
});
$('.icon-close').on('click',function () {
    $('.collapsed-menu').css('display','none');
    $('#scrolled_navbar').css('display','block');
    $(document).css('overflow','hidden');
});



