console.log("Script is running");

var swiper = new Swiper(".swiper-catalog", {
   navigation: {
      nextEl: ".swiper-catalog-next",
      prevEl: ".swiper-catalog-prev",
   },
   speed: 400,
   loop: true,
   slidesPerView: 4,
   spaceBetween: 100,

   breakpoints: {
      // when window width is >= 320px
      100: {
         slidesPerView: 1,
      },
      350: {
         slidesPerView: 1,
         spaceBetween: 20,
      },
      450: {
         slidesPerView: 2,
      },
      // when window width is >= 480px
      700: {
         slidesPerView: 3,
         spaceBetween: 30,
      },
      // when window width is >= 640px
      1000: {
         slidesPerView: 4,
         spaceBetween: 40,
      },
   },
});
