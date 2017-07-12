$( window ).scroll(function() {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if(scrolled>=100){
        $('#scrolled_navbar').css( "background","white" );
        $('.navbar-brand').css( "color","black" );
        $('.nav a').removeClass('a');
        $('.nav a').addClass('b');
    }
    else if(scrolled<100){
        $('#scrolled_navbar').css( "background","transparent" );
        $('.navbar-brand').css( "color","white" );
        $('.nav a').addClass('a');
        $('.nav a').removeClass('b');
    }
});
