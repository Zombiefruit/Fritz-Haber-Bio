$(document).ready(function() {
  // Set the attribute "target" equal to "_blank" for every anchor tag. Why?
  // This forces every link to open in a new tab (well, this actually depends on
  // the browser, but it works for most). I hate links that open in the same page. 
  $('a').attr("target", "_blank");

  // Code "borrowed" and modified from here: http://stackoverflow.com/questions/17879846/bootstrap-scrollspy-offset-on-a-fixed-navbar-does-not-work
  var offsetHeight = 110;

  $('body').scrollspy({
      offset: offsetHeight
  });

  $('.header li a').click(function (event) {
    console.log("here");
      var scrollPos = $('body > .container').find($(this).attr('href')).offset().top - (offsetHeight - 1);
      $('body,html').animate({
          scrollTop: scrollPos
      }, 500);
      return false;
  });
});
