$(document).ready(function(){
    $('.sidebarBtn').click(function(){
        $('.sidebar').toggleClass('active');
        $('.sidebarBtn').toggleClass('toggle');
    });
    //image slider
    $('.banner-slider').slick({
        arrows: false,
        autoplay: true,
        speed:700,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    

    // product filter
    var mixer =  mixitup('.product-main');


    //product category active
    $('.product-category ul li').on('click', function(){
        $(this).addClass('active').siblings().removeClass('active');
        });

    
    // product pop-up
    $('.venobox').venobox({
        arrowsColor:'#709dca',
        closeBackground:'#ffc155',
        closeColor: 'firebrick',
        spinner: 'three-bounce',
    }); 

    // popup show
    $(window).load(function(){
        $(this).addClass('sale-popup');
    });
    
});