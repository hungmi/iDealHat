// $(document).on("click", ".selectable:not('.locked')", function(e){
//   e.preventDefault()
//   // 模仿單選
//   // $(this).parents(".selectable-wrapper").find(".question-option:not('.locked')").removeClass("selected")
//   $(this).toggleClass("selected")
// });
$(document).on("change", ".selectable select", function(e){
  e.preventDefault()
  $(this).parents(".selectable").toggleClass("selected", $(this).val() !== "")
});
// $(document).on("click", ".question-options .question-option", function(e){
//   e.preventDefault()
//   $(".close-question-more-options").show()
//   $(".question-more-options").show()
//   $("body").css("overflow", "hidden")
//   $("#mask").show()
// });
// $(document).on("click", ".close-question-more-options, #mask", function(e){
//   e.preventDefault()
//   $(this).hide()
//   $(".question-more-options").hide()
//   $("body").css("overflow", "initial")
//   $("#mask").hide()
// });