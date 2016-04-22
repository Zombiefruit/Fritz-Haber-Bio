// VERY, VERY, VERY INNEFFICIENT CODE - PLACEHOLDER, STILL LEARNING

$(document).ready(function() {
  function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'fast');
}

  $('#pill1').click(function (){
    $(this).addClass('active');
    scrollToAnchor('intro');
    $("#pill2").removeClass('active');
    $("#pill3").removeClass('active');
    $("#pill4").removeClass('active');
  });

  $('#pill2').click(function (){
    $(this).addClass('active');
    scrollToAnchor('early_life');
    $("#pill1").removeClass('active');
    $("#pill3").removeClass('active');
    $("#pill4").removeClass('active');
  });

  $('#pill3').click(function (){
    $(this).addClass('active');
    scrollToAnchor('career');
    $("#pill1").removeClass('active');
    $("#pill2").removeClass('active');
    $("#pill4").removeClass('active');
  });

  $('#pill4').click(function (){
    $(this).addClass('active');
    scrollToAnchor('legacy');
    $("#pill1").removeClass('active');
    $("#pill2").removeClass('active');
    $("#pill3").removeClass('active');
  });
});
