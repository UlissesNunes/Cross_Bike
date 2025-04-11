
 new Swiper('.depoimentos-D', {
    loop: true,
    spaceBetween: 30,
    autoplay: { delay: 4000 },
    
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
        slidesPerView: 4,
      },

    }
  });


  const swiperOutro = new Swiper('.produtos-CB', { 
    loop: true,
    spaceBetween: 30,
    autoplay: { delay: 4000 },
    
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
        slidesPerView: 4,
      },

    }
  });
