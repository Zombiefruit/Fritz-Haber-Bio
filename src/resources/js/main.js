// VERY, VERY, VERY INNEFFICIENT CODE - PLACEHOLDER, STILL LEARNING

$(document).ready(function() {

  // Code "borrowed" and modified from here: http://stackoverflow.com/questions/17879846/bootstrap-scrollspy-offset-on-a-fixed-navbar-does-not-work
  var offsetHeight = 110;

  $('body').scrollspy({
      offset: offsetHeight
  });

  console.log("here");

  $('.header li a').click(function (event) {
    console.log("here");
      var scrollPos = $('body > .container').find($(this).attr('href')).offset().top - (offsetHeight - 1);
      $('body,html').animate({
          scrollTop: scrollPos
      }, 500);
      return false;
  });
});
