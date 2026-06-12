const depoimentosEl = document.querySelector('.depoimentos-D');
if (depoimentosEl) {
new Swiper('.depoimentos-D', {
    loop: true,
    spaceBetween: 30,
    autoplay: { delay: 3000, pauseOnMouseEnter: true },
    a11y: {
      prevSlideMessage: 'Depoimento anterior',
      nextSlideMessage: 'Próximo depoimento',
    },  
    pagination: {
      el: '.swiper-pagination',
      clickable : true ,
      dynamicBullets: true,
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      } ,
      667 : {
        slidesPerView: 2,       
      },
      1024 : {
        slidesPerView:2,
      },
        1200 : {
        slidesPerView:3,
      },
       1424 : {
        slidesPerView:3,
      },
    }
  });
}