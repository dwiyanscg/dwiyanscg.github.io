(function($) {
  
  "use strict";  

  $(window).on('load', function() {
    

    //  /* Page Loader active
    // ========================================================*/
    // $('#preloader').fadeOut();

     /* ==========================================================================
    countdown timer
    ========================================================================== */
    
  
   

// gallery
$('.popup-gallery').magnificPopup({
  delegate: 'a',
  type: 'image',
  tLoading: 'Loading image #%curr%...',
  mainClass: 'mfp-img-mobile',
  gallery: {
    enabled: true,
    navigateByImgClick: true,
    preload: [0,1] // Will preload 0 - before current, and 1 after the current image
  },
  image: {
    tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
    titleSrc: function(item) {
      return item.el.attr('title') + '<small>by @kemarinsore</small>';
    }
  }
});
  // Sticky Nav
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 200) {
            $('.scrolling-navbar').addClass('top-nav-collapse');
        } else {
            $('.scrolling-navbar').removeClass('top-nav-collapse');
        }
    });

    /* slicknav mobile menu active  */
    $('.mobile-menu').slicknav({
      prependTo: '.navbar-header',
      parentTag: 'liner',
      allowParentLinks: true,
      duplicate: true,
      label: '',
      closedSymbol: '<i class="icon-arrow-right"></i>',
      openedSymbol: '<i class="icon-arrow-down"></i>',
    });

   

    /* WOW Scroll Spy
    ========================================================*/
     var wow = new WOW({
      //disabled for mobile
        mobile: false
    });
    wow.init();

    // one page navigation 
    $('.onepage-nev').onePageNav({
            currentClass: 'active'
    }); 

    /* Back Top Link active
    ========================================================*/
      var offset = 200;
      var duration = 500;
      $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
          $('.back-to-top').fadeIn(400);
        } else {
          $('.back-to-top').fadeOut(400);
        }
      });

      $('.back-to-top').on('click',function(event) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: 0
        }, 600);
        return false;
      });

  });      

}(jQuery));