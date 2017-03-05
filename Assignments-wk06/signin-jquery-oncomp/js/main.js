// # Signin Screen
//
// ## Complete these steps to create a signin prototype:

// 1. When the user presses the .signin button, fade in the modal window

$(document).on('ready', function() {
  $('button.signin').on('click', function() {
    // $('h1.hello').html('click working');
    $('div.modal').fadeIn(400, function() {


    });

    $('button.close').on('click', function() {
      $('div.modal').fadeOut(400, function() {
      });

    });

    $('button.submit').on('click', function() {
      $('input').addClass('error')
    });

    $('input').hover(function() {
      $('input').removeClass('error');
    });

    $('form.getstarted').on('click', function() {
      $('button.close').on('click', function(event) {
        event.stopPropagation();
      });
      $('input').on('click', function(event) {
        event.stopPropagation();
      });
      $('button.submit').on('click', function(event) {
        event.stopPropagation();
      });
      $('div.modal').fadeOut(400, function() {
      });
    });
  });
});
