$(document).ready(function() {

   //Start ScrollTop sub-nav
   $(window).scroll(function () {
    var subNav = $(this).scrollTop();
    if (subNav >= 50) {
      $("#sub-nav").fadeIn(5000);
    } else {
      $("#sub-nav").fadeOut();
    }
  });
  // End ScrollTop for sub-nav

  // Start for Global Mobile
    // for taps
    $(".navbar-toggler").click(function () {
      $(this).css({
        backgroundColor: "none",
        border: "none !important",
        outline: "none",
      })
      $(".nav-tap").toggleClass("change");
    });

    // End for Global Mobile


    // When click on Links Go to Section
    $('.navbar a').on('click', function (e) {
      if (this.hash !== '') {
        e.preventDefault();
    
        const hash = this.hash;
    
        $('html, body')
          .animate({
            scrollTop: $(hash).offset().top
          },800);
      }
    });

// for stop autoplay in carousel belong to bootstrap
  // pop
  $("#popup").magnificPopup({
    type: "iframe"
  });

  /*accordion*/
  $("button").click(function() {
    $(".plus").toggle();
    $(".minus").toggle();
  });

  $(".may-desc").on("click", function() {
    $(this).toggleClass("my-active");
  });

  /* Start owl carousel*/

  $(".mycarousel-1").owlCarousel({
    items: 1,
    margin: 10,
    nav: false,
    dots: false,
    loop: true,
    autoplay: false,
    autoplayHoverPause: true,
   center: true,
   autoplayTimeout: 5000,
  });



 

  

  $(".mycarousel-2").owlCarousel({
    dotsSpeed: true,
    items: 4,
    nav: false,
    dots: false,
    margin: 10,
    loop: true,
    autoplay: false,
    autoplayHoverPause: true,
   center: false,
   autoplayTimeout: 5000,
   responsive:{
    0:{
        items:1,
        nav:false
    },
    600:{
        items:3,
        nav:false
    },
    1000:{
        items:4,
        nav:false,
        loop:false
    }}
  });

 

  //Start ScrollTop
  $(window).scroll(function () {
    var sc = $(this).scrollTop();
    if (sc >= 500) {
      $("#myscrolltop").fadeIn(5000);
    } else {
      $("#myscrolltop").fadeOut();
    }
  });

   //Scroll To Top
   $("#myscrolltop").click(function() {
    $("body, html").animate(
      {
        scrollTop: 0
      },
      1000
    );
    
  });
  // slick-carousel

  $('.slider-slike').slick({
    dots: true,
    arrows: false,
    autoplay: false,
    speed: 500
  });

  //loading
  $(".loading").fadeOut(10000);


  // test
  $('.collapse').on('shown.bs.collapse', function(){
    $(this).parent().find(".glyphicon-plus").removeClass("glyphicon-plus").addClass("glyphicon-minus");
    }).on('hidden.bs.collapse', function(){
    $(this).parent().find(".glyphicon-minus").removeClass("glyphicon-minus").addClass("glyphicon-plus");
    });

    $('.popup-gallery').magnificPopup({
      delegate: 'a',
      type: 'image',
      // tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1] // Will preload 0 - before current, and 1 after the current image
      },
      image: {
        // tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        titleSrc: function(item) {
          return item.el.attr('title') + '<small>Ashraf Othman</small>';
        }
      }
    });
});
