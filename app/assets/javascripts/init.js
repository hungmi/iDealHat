$(document).on("ready", function(){
  if ($("i#mobile-detector").css("display") == "none"){
    window.mobile = true;
  }
  $(".slick").slick({
    arrows: false,
    dots: true,
    adaptiveHeight: true
  });
})

$(document).on("ready", function(){
  if (window.mobile){
    $("#iphone").css("height", $(window).height()) 
  } else {
    $("#iphone").css("width", "100%")
    var base = $("#iphone").outerWidth();
    $("#iphone").css("height", base/1081*2281)
    $("#questions").css("height", base/1081*2281)
    $("#transformed_questions").css("left", base/1081*53)
    $("#transformed_questions").css("top", base/1081*267)
    $("#transformed_questions").css("width", base/1081*974)
    $("#transformed_questions").css("height", base/1081*1720)
  }
})