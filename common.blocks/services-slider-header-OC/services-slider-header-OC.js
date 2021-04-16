
// Скрывает открытое меню сервисов при уменьшении экрана 1200пикселей
$(window).resize(function() {
  if ($(this).width() < 1200) {
    $( ".dropdown-hover-OC__item" ).slideUp( "fast" );
    $('.services-slider-header-OC').slick('unslick');
  } 
});

// при ховере загружается слайдер, и при закрытии "пропадал"
$(".init-slider").hover(function(event){
  $('.services-slider-header-OC').slick({
    lazyLoad: 'ondemand',
      dots: false,
      arrow: true,
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
      event.preventDefault();
  });
$(document).mouseup(function (e){
  if (!$(".init-slider").is(e.target) && !$(".services-slider-header-OC").is(e.target)
      && $(".services-slider-header-OC").has(e.target).length === 0) { 
      $( ".services-slider-header-OC" ).slick('unslick'); 
  }
});