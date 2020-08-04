window.onload = function(){
    $(".main_slider .container").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots:true,
        prevArrow: '',
        nextArrow: '',

    })
    $(".main_tabs_section .catalog, .product_slider_section .catalog").slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        dots:true,
        prevArrow: '<div class="prev_arrow">',
        nextArrow: '<div class="next_arrow">',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                dots: true,
                arrows: false,
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                arrows: false,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: false,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
              }
            }
          ]
    })
    $(".mailing_slider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        dots:false,
        prevArrow: '',
        nextArrow: '',
    })
    $(".partner_wrapper").slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 6,
        prevArrow: '<div class="prev_arrow">',
        nextArrow: '<div class="next_arrow">',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                dots: true,
                arrows: false,
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                arrows: false,
                dots: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: false,
                dots: true,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
              }
            }
          ]
    })
    $(".you_watched_wrapper").slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 6,
        prevArrow: '<div class="prev_arrow">',
        nextArrow: '<div class="next_arrow">',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                dots: true,
                arrows: false,
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                arrows: false,
                dots: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: false,
                dots: true,
              }
            }
          ]
    })
    $(".main_product_slider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<div class="prev_arrow">',
        nextArrow: '<div class="next_arrow">',
        asNavFor: '.additional_product_slider'
    })
    $(".additional_product_slider").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        focusOnSelect: true,
        prevArrow: '<div class="prev_arrow">',
        nextArrow: '<div class="next_arrow">',
        asNavFor: '.main_product_slider'
    })
    /* перевод картинки svg в код */
    $('.advantages_element img').each(function(){
        var $img = $(this);
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');
        $.get(imgURL, function(data) {
          var $svg = $(data).find('svg');
          if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' replaced-svg');
          }
          $svg = $svg.removeAttr('xmlns:a');
          if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
            $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
          }
          $img.replaceWith($svg);
        }, 'xml');
      });
    /* end перевод картинки svg в код */


    $(".pagination_box .pagination.active").click(function(EO){
        EO.preventDefault()
    }) 
    $(".menu_element.parent").click(function(EO){
        EO.preventDefault()
    }) 

    /* Вывод форм, кнопке формы нужно указывать атрибут "data-to" с название класса высшего блока формы и класс "form_button" */
    $(".form_button").click(function(EO){
        let target = '.'+$(this).data("to")
        $("body").addClass("hidden")
        $(".modal_bg").css("display","flex");
        $(target).css("display","block")
        $("body").click(function(EO){
            if(EO.target == $(".modal_bg")[0]){
                $(".modal_bg").fadeOut()
                $("body").removeClass("hidden")
                $(target).css("display","none")
            }
        })
        $(".close_button").click(function(){
            $(this).closest(".modal_bg").fadeOut()
            $("body").removeClass("hidden")
            $(target).css("display","none")
        });
        if($(this).data("to") == "buy-in-one"){
            let product_name = $(".right_details_section h1").text()
            let product_img = $(".main_product_slider .slick-current img").attr("src")
            let product_rating = $("right_details_section .rating_wrapper").html()
            let product_price= $(".right_details_section .price_box .price").text()
            let product_old_price= $(".right_details_section .price_box .old_price").text()
            $(".buy-in-one .img_box img").attr("src", product_img)
            $(".buy-in-one .detail_box .name").text(product_name)
            $(".buy-in-one .detail_box .rating_wrapper").html(product_rating)
            $(".buy-in-one .detail_box .price_box .price").text(product_price)
            $(".buy-in-one .detail_box .price_box .old_price").text(product_old_price)
        }
    })
    /* End вывод форм */
/* функционал меню каталога */
$(".catalog_menu_element_major.open .catalog_menu_element_minor").css("display","block")
 $(".catalog_menu_element_major .title").click(function(){
    if($(this).closest(".catalog_menu_element_major").hasClass("open")){
        $(this).closest(".catalog_menu_element_major").find(".catalog_menu_element_minor").slideUp();
        $(this).closest(".catalog_menu_element_major").removeClass("open");
    }else{
        $(".catalog_menu_element_major.open .catalog_menu_element_minor").slideUp();
        $(".catalog_menu_element_major.open").removeClass("open");
        $(this).closest(".catalog_menu_element_major").addClass("open")
        $(this).closest(".catalog_menu_element_major").find(".catalog_menu_element_minor").slideDown()
    }
 })
/* end функционал меню каталога */
}


$(".ham").click(function(){
    $("body").addClass("hidden")
    $(".modal_bg").fadeIn("fast");
    $(".menu_wrapper").addClass("open")
    $(".menu_wrapper.open .close .ham").click(function(){
        $(this).closest(".open").removeClass("open");
        $(".modal_bg").fadeOut("fast");
        $("body").removeClass("hidden")
    })
    $("body").click(function(EO){
        if(EO.target == $(".modal_bg")[0]){
            $(".modal_bg").fadeOut()
            $("body").removeClass("hidden")
            $(this).find(".open").removeClass("open");
        }
    })
    $(".menu_element.parent > a").click(function(){
        console.log($(this))
        $(this).siblings(".dropdown_menu").slideToggle();
    })
})


/* Добавление меток к карточке товара */
/* $(".catalog .card").map(function(index,element){
    if($(element).hasClass("popular")){
       $(element).find(".tags").append('<img src="/img/icon/popular_sign.svg">')
    }
    if($(element).hasClass("new")){
       $(element).find(".tags").append('<img src="/img/icon/new_sign.svg">')
    }
    if($(element).hasClass("discount")){
       $(element).find(".tags").append('<img src="/img/icon/discount_sign.svg">')
    }
}) */
/* end Добавление меток к карточке товара */
let cardLength = $(".catalog_section .card").length
if( cardLength >= 4){
    for(let i=0; i<4; i++){
        $($(".catalog_section .card")[i]).addClass("first")
    }
}else if( cardLength < 4){
    for(let i=0; i<cardLength; i++){
        $($(".catalog_section .card")[i]).addClass("first")
    }
}

$(".tofavorite_button").click(function(){
    $(this).addClass("active");
})
$(".delivery_type_wrapper .delivery_type, .payment_wrapper .payment_type").click(function(){
    if($(this).hasClass("disabled")){}
    else{
        $(this).siblings(".active").removeClass("active");
        $(this).addClass("active");
    }

})

$(".delivery_type.courier").click(function(){
    $(".delivery_adress_tab_content.pickup").fadeOut(100);
    $(".delivery_adress_tab_content.courier input").removeAttr("disabled");
    $(".delivery_adress_tab_content.courier").removeClass("disabel");
    $(".payment_wrapper .halva, .payment_wrapper .karta_pokupok").removeClass("disabled");
    $(".payment_wrapper .halva input, .payment_wrapper .karta_pokupok input").removeAttr("disabled")
    $(".payment_wrapper .payment_type").removeClass("active");
})
$(".delivery_type.pickup").click(function(){
    $(".delivery_adress_tab_content.pickup").fadeIn(100);
    $(".delivery_adress_tab_content.courier input").attr("disabled", "");
    $(".delivery_adress_tab_content.courier").addClass("disabel");
    $(".payment_wrapper .halva, .payment_wrapper .karta_pokupok").addClass("disabled");
    $(".payment_wrapper .halva input, .payment_wrapper .karta_pokupok input").removeAttr("disabled")
    $(".payment_wrapper .payment_type").removeClass("active");
})
$(".product_count_box .minus").click(function(){
   let count = parseInt($(this).siblings(".product_count").text()) 
   if(count>1){
    $(this).siblings(".product_count").text(count - 1)
   }
   
})
$(".product_count_box .plus").click(function(){
   let count = parseInt($(this).siblings(".product_count").text()) 
   $(this).siblings(".product_count").text(count + 1)
})

$(".tab_section > div").click(function(){
   let tab_name = $(this).data("tab")
   $(this).addClass("active")
   $(this).siblings(".active").removeClass("active")
   $(this).closest(".tab_section").siblings(".tab_content").find(".active").removeClass("active")
   $('.'+ tab_name).addClass("active")
})
$(".tabs_panel > div").click(function(){
   let tab_name = $(this).data("tab")
   $(this).addClass("active")
   $(this).siblings(".active").removeClass("active")
   $(this).closest(".tabs_panel").siblings(".tabs_content").find(".active").removeClass("active")
   $('.'+ tab_name).addClass("active")
})
