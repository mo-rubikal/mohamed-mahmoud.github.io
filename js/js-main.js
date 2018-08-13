  $( document ).ready(function() {
    //   Navbar change When scroll
    var scrollTop = 0;
    $(window).scroll(function(){
      scrollTop = $(window).scrollTop();      
      if (scrollTop >= 100) {
        $('.navbar-rubikal').addClass('scrolled-nav');
        $('.navbar-rubikal .logo-rubikal img').addClass('scroll-logo');
      } else if (scrollTop < 100) {
        $('.navbar-rubikal').removeClass('scrolled-nav');
        $('.navbar-rubikal .logo-rubikal img').removeClass('scroll-logo');

      } 
      
    }); 
      // Change li menu active
      $('.navbar-rubikal .navbar-nav li a').click(function() {
        $('li').removeClass();
        $(this).parent().addClass('active');
      });

      // jumo to next section
      $("#jump-section").click(function() {
        $('html, body').animate({
            scrollTop: $("#services").offset().top
        }, 2000);
      });
      if ($(window).width() > 1024) {
          $('.head-rubikal .text-action').addClass('scale');
      }

      // pre-loader
      $(window).on('load', function(){
        setTimeout(function(){
          $('.preloader-container').fadeOut('slow', function () {
          });
      },1000);
     });
  });