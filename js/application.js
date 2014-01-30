$(window).load(function () { // makes sure the whole site is loaded
  $("#status").fadeOut(); // will first fade out the loading animation
  $("#preloader").delay(350).fadeOut("slow"); // will fade out the white DIV that covers the website.
})

// Menu active class
////Fade In/Out up_arrow
$(window).bind("scroll", function () {
  if ($(this).scrollTop() > 750) {
    $("#up_arrow").fadeIn();
  } else {
    $("#up_arrow").stop().fadeOut(1);
  }
});

////Fade In/Out up_arrow
$(window).bind("scroll", function () {
  if ($(this).scrollTop() > 750) {
    $("#down_arrow").css('disQuickstart', 'none');
  } else {
    $("#down_arrow").css('disQuickstart', 'block');
  }
});

////Fade Slide 1 Container
$('.serv, #testimonialsCarousel, #members, #subArea3 .container, .table').css('opacity', '0');

// call waypoint plugin
$('.serv, #testimonialsCarousel, #members, #subArea3the .container, .table').waypoint(function (event, direction) {
  // do your fade in here
  $(this).addClass('animated fadeInUp');
}, {
  offset: '90%'
});

$('a').click(function (e) {
  return true;
});

/// Welcome Message
$(document).ready(function () {
    $('#welcome_message').addClass('animated fadeInUp');
});