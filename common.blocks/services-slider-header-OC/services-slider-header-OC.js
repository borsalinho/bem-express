
// Скрывает открытое меню сервисов при уменьшении экрана 1200пикселей
$(window).resize(function() {
  if ($(this).width() < 1200) {
    $( ".dropdown-hover-OC__item" ).slideUp( "fast" );
    $('.services-slider-header-OC').slick('unslick');
  } 
});

// при ховере загружается слайдер, и при закрытии "пропадал" слайдер. так ж операции со стрелкой
$(".header-OC__init-slider").hover(function(event){
  $('.services-slider-header-OC').slick({
    lazyLoad: 'ondemand',
      dots: false,
      arrows: true,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  $('.header-OC__arrow').addClass("header-OC__arrow_rotate");
  event.preventDefault();
});

$(document).mouseup(function (e){
  if (
  !$(".header-OC__init-slider").is(e.target) && 
  !$(".services-slider-header-OC").is(e.target) && 
  !$(".dropdown-hover-OC").is(e.target) && 
  $(".services-slider-header-OC").has(e.target).length === 0) { 
      $( ".services-slider-header-OC" ).slick('unslick');
      $('.header-OC__arrow').removeClass("header-OC__arrow_rotate");
  }
});
