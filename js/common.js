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



$(".ref-item").mouseover(function(){
    $(this).children(".ref-content").css("z-index", "3");
});

$(".ref-item").mouseout(function(){
    $(this).children(".ref-content").css("z-index", "1");
});



/*Активация owl-carousel*/

$(document).ready(function(){
    $("#quote-carousel").owlCarousel({
        navigation: false,
        slideSpeed : 300,
        dotsSpeed: 300,
        loop: true,
        paginationSpeed : 400,
        items : 1,
        itemsDesktop : false,
        itemsDesktopSmall : false,
        itemsTablet: false,
        itemsMobile : false
    });
    $("#partners-carousel").owlCarousel({
        loop:true,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
    $("#blog-carousel").slick({
        infinite:true,
        arrows:false,
        dots:true,
        slidesToShow: 3,
        slidesToScroll: 1,
        padding: 20,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 543,
                settings: {
                    slidesToShow: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});
/***********************************************************/
$(document).ready(function(){
    $(".menu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
        if($('.collapsed-menu').css('display')==='block'){
            $('.collapsed-menu').css('display','none');
            $('#scrolled_navbar').css('display','block');
            $(document).css('overflow','hidden');
        }
    });
});


/***********************************************************/