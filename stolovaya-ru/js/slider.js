new Swiper('.image-slider', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },

  pagination: {
    el: '.swiper-pagination',

    clickable: true,
  },
  loop: true,

  autoplay: {
    delay: 663000,
    stopOnLastSlide: true,
    disableOnInteraction: false
  },
  speed: 800,

  effect: 'slide',
});