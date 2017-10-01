$(document).ready(function() {

  var active1 = false;
  var active2 = false;
  var active3 = false;
  var active4 = false;
  var active5 = false;

    $('.mask2').on('mousedown touchstart', function() {
    // Magic code
    // Check current menu state, then changes CSS.
    if (!active1) {
      $('.main-nav').find('.test1').css({'background-color': 'gray', 'transform': 'translate(100px,0px)'});
      // Make link text appear
      $('.main-nav').find('.nav-link').css({'opacity': '0.5'});
    }
    else {
      $('.main-nav').find('.test1').css({'background-color': 'silver', 'transform': 'none'});
      $('.main-nav').find('.nav-link').css({'opacity': '0'});
    }
    // Education
     if (!active2) $('.main-nav').find('.test2').css({'background-color': 'gray', 'transform': 'translate(200px,0px)'});
    else $('.main-nav').find('.test2').css({'background-color': 'silver', 'transform': 'none'});
    // Code
      if (!active3) $('.main-nav').find('.test3').css({'background-color': 'gray', 'transform': 'translate(300px,0px)'});
    else $('.main-nav').find('.test3').css({'background-color': 'silver', 'transform': 'none'});
    // Message
      if (!active4) $('.main-nav').find('.test4').css({'background-color': 'gray', 'transform': 'translate(400px,0px)'});
    else $('.main-nav').find('.test4').css({'background-color': 'silver', 'transform': 'none'});
    // Gear
    if (!active5) {
      $('.main-nav').find('.test5').css({'background-color': 'gray', 'transform': 'translate(500px,0px)'});
    }
    else {
      $('.main-nav').find('.test5').css({'background-color': 'silver', 'transform': 'none'});
    }
    // Toggle
    active1 = !active1;
    active2 = !active2;
    active3 = !active3;
    active4 = !active4;
    active5 = !active5;
    });

});