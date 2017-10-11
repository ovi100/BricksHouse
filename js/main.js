/*------------------------------------
/*------------------------------------
 *Author:Ennvisio
 *Template:Bricks House
 *Version:1.0
 *-------------------------------------
 */

// (function($) {
//
//   "use strict";

jQuery(document).ready(function() {

  /*
   * ----------------------------------------------
   *-----------------Preloader---------------------
   * ----------------------------------------------
   */


  /*
   *---------------------------------------------
   *-----------OwlCarousel/Partner-----------
   *---------------------------------------------
   */

  var partner = $("#owl-partner");
  partner.owlCarousel({
    autoplay: true,
    autoplayHoverPause: true,
    dots: true,
    items: 4,
    loop: true,
    margin: 30,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 4
      }
    }
  });



  /*--------------------magnificPopup------------------*/
  // if ($(".video").is("#video")) {
  //   var videoPlay = $('.video-play');
  //   videoPlay.magnificPopup({
  //     type: 'iframe',
  //     closeBtnInside: false,
  //     closeOnContentClick: true,
  //     tLoading: '', // remove text from preloader


  //     iframe: {
  //       markup: '<div class="mfp-iframe-scaler">' +
  //         '<div class="mfp-close"></div>' +
  //         '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
  //         '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button

  //       patterns: {
  //         youtube: {
  //           index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

  //           id: 'v=', // String that splits URL in a two parts, second part should be %id%
  //           // Or null - full URL will be returned
  //           // Or a function that should return %id%, for example:
  //           // id: function(url) { return 'parsed id'; }

  //           src: 'https://www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
  //         }



  //         // you may add here more sources

  //       },

  //       srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
  //     }
  //   });
  // }



  /*
   * -------------------------------------------
   *------------contact form ajax---------------
   * -------------------------------------------
   */



  // var contactSubmit = $('#contact-submit');

  // contactSubmit.on('click', function(e) {
  //   e.preventDefault();
  //   var name = $('#name').val();
  //   var email = $('#email').val();

  //   var message = $('#message').val();
  //   var form = new Array({
  //     'name': name,
  //     'email': email,
  //     'message': message
  //   });

  //   $.ajax({
  //     type: 'POST',
  //     url: "contact.php",
  //     data: ({
  //       'action': 'contact',
  //       'form': form
  //     })
  //   }).done(function(data) {

  //     var conResult = $('#contact .result');
  //     conResult.html(data);
  //     $(".contact-form-area")[0].reset();

  //   });

  // });

  /*
   * -----------------------------------------------------------------
   *--------------------Google Map------------------
   * -----------------------------------------------------------------
   */

   

  /*
   * -----------------------------------------------------------------
   *--------------------Back To Top------------------
   * -----------------------------------------------------------------
   */

  // var offset = 220;
  // var duration = 500;
  // jQuery(window).scroll(function() {
  //   if (jQuery(this).scrollTop() > offset) {
  //     jQuery('.back-to-top').fadeIn(duration);
  //   } else {
  //     jQuery('.back-to-top').fadeOut(duration);
  //   }
  // });

  // jQuery('.back-to-top').click(function(event) {
  //   event.preventDefault();
  //   jQuery('html, body').animate({
  //     scrollTop: 0
  //   }, duration);
  //   return false;
  // })


});

// })(jQuery);
