$('.btn_for_visible_form').on('click', function(){
	$('.for_visible_form').toggleClass('active');
	//$(this).css('display','none')
});
function updateFavorite(id, type)
{
    $.ajax({
        url: '/user/favorite',
        type: "GET",
        data: {id: id, type:type},

        success: function (data) {
        }
    });
}
function my_couner(){
var product_inner_minus = document.getElementById('product_inner_minus');
var product_inner_plus = document.getElementById('product_inner_plus');
var product_inner_result = document.getElementById('product_inner_result');
var product_inner_start = 0;

$('#product_inner_plus').on('click',function(){
    product_inner_start ++;
    product_inner_result.innerHTML = product_inner_start;
    console.log(1);
});
$('#product_inner_minus').on('click',function(){
    if(product_inner_start == 0){
        console.log(2);
        return
    }else{
        product_inner_start --;
        product_inner_result.innerHTML = product_inner_start;
        console.log(3);
    }
});
$('.omnipod_like').on('click', function(e){
    e.preventDefault();
    if($(this).hasClass('active')){
        var type = 2;
    }else{
        type = 1;
    }
    updateFavorite($(this).data('id'), type);
    $(this).toggleClass('active');

});

$('.product_quick_like').on('click', function(){
    if($(this).hasClass('active')){
        var type = 2;
    }else{
        type = 1;
    }
    updateFavorite($(this).data('id'), type);
    $(this).toggleClass('active');
});
};
function middle(){

    var omnipodSlide = $('.omnipod_slider .slide').height();

    $('.omnipod_slider .item').each(function(i,element){
        var omnipodItemHeight = $(element).height(); //height all elements

        var omnipodResult = omnipodSlide-omnipodItemHeight; //result all alements
        var omnipodResult = omnipodResult/2; //result all alements
        $(element).css('top',omnipodResult + 'px');
    });
};
$(document).ready(function () {
    //console.log(1);

/*products inner*/



my_couner();
/*end products inner*/    
/*products*/

 $('.product_block_menu h3').on('click', function () {
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $(this).siblings('div').removeClass('active');
        console.log(1);
    } else {
        console.log(2);
        $(this).addClass('active');
        $(this).siblings('div').addClass('active');
    }
});



$('.for_product_quick').on('mouseenter', function() {
    $(this).addClass('active');
});
$('.for_product_quick').on('mouseleave', function() {
    $(this).removeClass('active');
});

$('a.cart').on('click',function(){
    $('.cart_list_products_block').toggleClass('active');
});
$('.cart_list_products_del').on('click',function(){
    
    var cart_list_products_del = $(this);
    cart_list_products_del.parents('tr').css('opacity','0');
	cart_list_products_del.parents('.cart-item').css('opacity','0');
    setTimeout(function(){
        cart_list_products_del.parents('tr').css('display','none');
		cart_list_products_del.parents('.cart-item').css('display','none');
    },1000);
});

/*end products*/
/*pa*/
$('.product_close').on('click',function(){
    var product_close = $(this);
    product_close.parents('.pa_3_nth').css('opacity','0');
    setTimeout(function(){
        product_close.parents('.pa_3_nth').css('display','none');
    },1000);
});



$('.pa2_number').on('click', function(){
    $(this).parents('.pa2_number_block').toggleClass('active');
})

$('.pa_submit').on('click', function(){
    $('.pa_form2').addClass('active');
})




$('.input-form').on('click', function(){
    $(this).addClass('active')
    $(this).children().removeClass('pa_done')
    
});
$('.input-form .form-group input').blur('click', function(){
    $(this).parents('.input-form').removeClass('active');
});

/*end pa*/
/*testimonials*/

var testi_text_block_btn = true;
$('.testi_text_block button').on('click', function(){
    $(this).siblings('.testi_text_block_white').children('p').toggleClass('active');
    $(this).toggleClass('active');
    if(testi_text_block_btn){
        testi_text_block_btn = false;
        $(this).html(' פחות ');
    }else{
        $(this).html('  רתוי  ');
        testi_text_block_btn = true;
    }
});


var testi_video_desc_block = true;
$('.testi_video_desc_block button').on('click', function(){
    $(this).siblings('.testi_video_desc_block_div').toggleClass('active');
    
    $(this).toggleClass('active');
    
    if(testi_video_desc_block){
        testi_video_desc_block = false;
        $(this).html(' פחות ');
    }else{
        $(this).html('  רתוי  ');
        testi_video_desc_block = true;
    }
    
});
/*end testimonials*/
/*omnipod*/

$('.articles_share').on('click', function(){
    $(this).toggleClass('active');
});


$('#accordion_omni h3').on('click', function () {
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $(this).siblings('div').removeClass('active');
    } else {
        $(this).addClass('active');
        $(this).siblings('div').addClass('active');
    }
});

$('.faq_my_account h3').on('click', function () {
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $(this).siblings('div').removeClass('active');
    } else {
        $(this).addClass('active');
        $(this).siblings('div').addClass('active');
    }
});
    
//middle();
setTimeout(middle, 2500);
$('.carouselOmni').carousel({
    interval:false
});


$('video').on("play", function(){
    console.log("Playing");
    $(".carouselOmni").carousel('pause');
});
$('video').on("pause", function(){
    console.log("Stopped");
    $(".carouselOmni").carousel('cycle');
});

/**/

$('.carousel_omni').carousel({
    interval:4000
});
/*end omnipod*/

    /*video player*/
if($(document).innerWidth()>1024){
    $('.video__poster').on('mouseenter', function(){
        $(this).addClass('active');
    });

    Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
        get: function(){
            return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
        }
    });

    $(document).find('.video__poster').on('mouseleave', function(){
        var videoElem = $(this).find('video')[0];
        if(!videoElem.playing){
            $(this).removeClass('active');
            console.log($(this).find('video').attr('source'));
        }
    });
    }else{
     $(document).find('.video__poster').on('click', function(){
        $(this).addClass('active');
        $(this).find('video').trigger('play');
    });

    Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
        get: function(){
            return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
        }
    });

  $(document).find('.video__poster').on('mouseleave', function(){
        var videoElem = $(this).find('video')[0];
        if(!videoElem.playing){
            $(this).removeClass('active');
        }
    });
    }
/* end video player*/
/*--*/

if(localStorage.getItem('font_size_b')){
    $('body').addClass('font_size_b');
}
if(localStorage.getItem('font_size_m')){
    $('body').addClass('font_size_m');
}
if(localStorage.getItem('font_size_s')){
    $('body').addClass('font_size_s');
}

$('.tml_font_size_s').on('click',function() {
    $('body').removeClass('font_size_m font_size_b');
    localStorage.removeItem('font_size_b');
    localStorage.removeItem('font_size_m');
    $('body').addClass('font_size_s');
    localStorage.setItem('font_size_s', 'font_size_s');
});
$('.tml_font_size_m').on('click',function() {
    $('body').removeClass('font_size_b font_size_s');
    localStorage.removeItem('font_size_b');
    localStorage.removeItem('font_size_s');
    $('body').addClass('font_size_m');
    localStorage.setItem('font_size_m', 'font_size_m');
});
$('.tml_font_size_b').on('click',function() {
    $('body').removeClass('font_size_m font_size_s');
    localStorage.removeItem('font_size_m');
    localStorage.removeItem('font_size_s');
    $('body').addClass('font_size_b');
    localStorage.setItem('font_size_b', 'font_size_b');
});
$('.tml_font_size_refresh').on('click',function() {
    $('body').removeClass('font_size_b font_size_m font_size_s');
    localStorage.removeItem('font_size_b');
    localStorage.removeItem('font_size_m');
    localStorage.removeItem('font_size_s');
});

/*--*/

if(localStorage.getItem('color_gray')){
    $('body').addClass('color_gray');
}
if(localStorage.getItem('color_blue')){
    $('body').addClass('color_blue');
}
if(localStorage.getItem('color_black')){
    $('body').addClass('color_black');
}

$('.tml_color_gray').on('click',function() {
    $('body').removeClass('color_black color_blue');
    localStorage.removeItem('color_black');
    localStorage.removeItem('color_blue');
    $('body').addClass('color_gray');
    localStorage.setItem('color_gray', 'color_gray');
});
$('.tml_color_black').on('click',function() {
    $('body').removeClass('color_gray color_blue');
    localStorage.removeItem('color_gray');
    localStorage.removeItem('color_blue');
    $('body').addClass('color_black');
    localStorage.setItem('color_black', 'color_black');
});
$('.tml_color_blue').on('click',function() {
    $('body').removeClass('color_gray color_black');
    localStorage.removeItem('color_gray');
    localStorage.removeItem('color_black');
    $('body').addClass('color_blue');
    localStorage.setItem('color_blue', 'color_blue');
});
$('.tml_color_refresh').on('click',function() {
    $('body').removeClass('color_gray color_blue color_black');
    localStorage.removeItem('color_gray');
    localStorage.removeItem('color_black');
    localStorage.removeItem('color_blue');
});

/*--*/

if(localStorage.getItem('zoom')){
    $('body').addClass('zoom');
}
if(localStorage.getItem('links')){
    $('body').addClass('links');
}
if(localStorage.getItem('headers')){
    $('body').addClass('headers');
}

var tml_zoom = true;
$('.tml_zoom').on('click',function() {
    if(tml_zoom){
        $('body').addClass('zoom');
        localStorage.setItem('zoom', 'zoom');
        tml_zoom = false;
    }else{
        $('body').removeClass('zoom');
        localStorage.removeItem('zoom');
        tml_zoom = true;
    }
});

var tml_links = true;
$('.tml_links').on('click',function() {
    if(tml_links){
        $('body').addClass('links');
        localStorage.setItem('links', 'links');
        tml_links = false;
    }else{
       $('body').removeClass('links');
        localStorage.removeItem('links');
        tml_links = true; 
    }
});

var tml_headers = true;
$('.tml_headers').on('click',function() {
    if(tml_headers){
        $('body').addClass('headers');
        localStorage.setItem('headers', 'headers');
        tml_headers = false;
    }else{
       $('body').removeClass('headers');
        localStorage.removeItem('headers');
        tml_headers = true; 
    }
});
/*--*/
$('.all_refresh').on('click',function() {
    $('body').removeClass();
    localStorage.removeItem('font_size_b');
    localStorage.removeItem('font_size_m');
    localStorage.removeItem('font_size_s');

    localStorage.removeItem('color_gray');
    localStorage.removeItem('color_black');
    localStorage.removeItem('color_blue');

    localStorage.removeItem('links');
    localStorage.removeItem('headers');
    localStorage.removeItem('zoom');
});



$('.tml_nav_open').on('click', function(){
    $('.topMenu_left').addClass('active');
});
$('.tml_nav_close').on('click', function(){
    $('.topMenu_left').removeClass('active');
});


$('#carousel1').owlCarousel({
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    smartSpeed:1000,
    rtl:false,
    loop:true,
    margin:0,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        992:{
            items:2
        }
    }
});
setTimeout(function(){
$('#carousel2').owlCarousel({
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    smartSpeed:1000,
    rtl:false,
    loop:true,
    margin:0,
    nav:true,
    delay:3000,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:4
        }
    }
});
},1000);

$('.topMenu_left_bottom').on('click',function(){
    $('.block_search').addClass('active');
});

$('.topMenu_left_bottom_btn').on('click',function(){
    $('.block_search').removeClass('active');

});


$('.navbar-nav__left_link').on('click', function(){    
    if($(document).innerWidth()<769){
         $('.extra_menu').toggleClass('open_product');
         $('.navbar-nav__right>li').css('visibility', 'hidden');
         $('.navbar-nav__right .dropdown_product').css('visibility', 'visible');
         $('.navbar-nav__left_link').css('display', 'none');
    }
});

$('.sub_menu').on('click', function(){
    $('.extra_menu').removeClass('open_product');
    $('.navbar-nav__right>li').css('visibility', 'visible');
    $('.navbar-nav__left_link').css('display', 'block');
});

var countReverses = true;
 function myReverse(){
    var list = $('.navbar-nav__right');
    var listItems = list.children('li');
    list.append(listItems.get().reverse());
}


var for_clone = $('.block_width');
if($(document).innerWidth()<769){

    if(countReverses){
         myReverse();
        countReverses = false; 
    }

    $('.for_clone_menu').append(for_clone);
    
    $('.btn-link').attr('aria-expanded', 'false');
    $('.card .collapse').removeClass('show');

    $('.btn-link').on('click',function(e){
        e.stopPropagation();
        var qwe = $(this).attr('aria-expanded');
        if(qwe == 'false'){
            $(this).attr('aria-expanded', 'true');
            $(this).addClass('active');
             $('.card .collapse').addClass('in');
        }
        $('.card').css('display', 'none');
        $(this).parents('.card').css('display', 'block');
    });

    $('.hidden_btn').on('click', function(){
       $('.card').css('display', 'block');
       $('.card .collapse').removeClass('show');
       $('.btn-link').attr('aria-expanded', 'false');
       $('.card .collapse').attr('aria-expanded', 'false');
       $('.card .collapse').removeClass('in');
       $('.btn-link').removeClass('active');       
    });
}else{
        
       $('#navbar .navbar-nav__left').after(for_clone);
       $('.card .collapse').addClass('show');
       $('.btn-link').attr('aria-expanded', 'false');
       $('.card .collapse').attr('aria-expanded', 'false');
       $('.card .collapse').addClass('in');

       $('.navbar-nav__right>li').css('visibility', 'visible');
}

 if($(document).innerWidth()>992){
        var r = $('.sub_category_menu').height();
        var l = $('.sub_category_menu_sibling').height();
        var res = r-l;
        res = res/2;
        $('.sub_category_menu_sibling').css('top',res + 'px');
        console.log(1);
    }else{
        $('.sub_category_menu_sibling').css('top','0');
        console.log(2);
    }
$( window ).resize(function() {
    /*-----------*/


    if($(document).innerWidth()>992){
        var r = $('.sub_category_menu').height();
        var l = $('.sub_category_menu_sibling').height();
        var res = r-l;
        res = res/2;
        $('.sub_category_menu_sibling').css('top',res + 'px');
    }else{
        $('.sub_category_menu_sibling').css('top','0');
    }

    if($(document).innerWidth()<769){

        if(countReverses){
             myReverse();
            countReverses = false;
        }

        $('.for_clone_menu').append(for_clone);
        
        $('.btn-link').attr('aria-expanded', 'false');
        $('.card .collapse').removeClass('show');
        $('.card .collapse').removeClass('in');
        $('.btn-link').on('click',function(){
            $('.card').css('display', 'none');
            $(this).parents('.card').css('display', 'block');
        });
        $('.hidden_btn').on('click', function(){
           $('.card').css('display', 'block');
           $('.card .collapse').removeClass('show');
           $('.btn-link').attr('aria-expanded', 'false');
           $('.card .collapse').attr('aria-expanded', 'false');
           $('.card .collapse').removeClass('in');
        });
    }else{

        if(!countReverses){
             myReverse();
            countReverses = true;
        }


        $('#navbar .navbar-nav__left').after(for_clone);
           $('.card .collapse').addClass('show');
           $('.btn-link').attr('aria-expanded', 'false');
           $('.card .collapse').attr('aria-expanded', 'false');
           $('.card .collapse').addClass('in');
           $('.card').css('display', 'block');
           $('.open_product .hidden_for_product').css('display', 'block');
           $('.navbar-nav__right>li').css('visibility', 'visible');
           $('.navbar-nav__left_link').css('display', 'block');
    }
});



$('.sub_menu').on('click', function(){
    $('.extra_menu_menu').addClass('active')
});
$('.extra_menu_close').on('click', function(){
    $('.extra_menu_menu').removeClass('active')
});

$('.signIn_user').on('click',function(){
    $('.drop').toggleClass('active');
});
$('.lang_active').on('click',function(){
    $('.lang').toggleClass('active');
});


    var top_show = 150; 
    var delay = 1000; 

    $(window).scroll(function () { 
        
        if ($(this).scrollTop() > top_show) $('#top').fadeIn();
        else $('#top').fadeOut();
    });
    $('#top').click(function () {
        
        $('body, html').animate({
            scrollTop: 0
        }, delay);
    });
/* end btn up*/

new WOW().init();  



 function checkInput() {
    var fieldLogin = $('.field-login');
    fieldLogin.each(function(index, el) {
        var el = $(el);
        (el.val() == "") ? el.parents('.form-group').removeClass("full") : el.parents('.form-group').addClass("full");
    });
};
checkInput();

$('.field-login').blur(function () {
    var $input = $(this)
      console.log(22);
    ($input.val() == "") ? $input.parents('.form-group').removeClass("full") : $input.parents('.form-group').addClass("full");

  });

});