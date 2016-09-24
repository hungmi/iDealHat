// 按下選項會有勾勾表示選了
$(document).on("click", ".question_option:not('.note')", function(){
  $(this).parents(".question_options_wrapper").find(".glyphicon-ok").remove()
  $(this).html($(this).html() + " <i class='glyphicon glyphicon-ok' style='color: green;'/>")
})

// 有 note 這個 class 代表此問題要問文字答案
$(document).on("click", ".question_option.note", function(){
  $(this).html(function() { return $(this).html().replace($(this).data("note"), "") })
  var note = prompt("請輸入答案", $(this).data("note"))
  $(this).data("note", note)
  $(this).html(function() { return $(this).html() + "\n" + $(this).data("note") })
})