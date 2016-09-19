$(document).on("input", "#questions", function(){
  // 每次都把所有清空重新 render
  $("#transformed_questions").html("")
  // 把使用者輸入的文字每行分開變成陣列
  var questions = $("#questions").val().split("\n")

  $.each(questions, function(index, q){
    q = q.split(",")
    if (q.length > 0){
      // 將問題包起來
      $("#transformed_questions").append("<div class='question_wrapper'></div>")
      $wrapper = $("#transformed_questions .question_wrapper:last-child")
      // 製造問題跟貼問題
      var $question_content = $("<div/>",{
        "class": "question_content clearfix",
        "html": "<span class='content'>" + q[0].trim() + "</span>",
      })
      window.opt = q
      $wrapper.append($question_content)

      // 將選項包起來
      var $question_options_wrapper = $("<div/>", {
        "class": "question_options_wrapper clearfix",
      })
      $wrapper.append($question_options_wrapper)

      // 取出 q 除了問題內容之外的部分作為選項遞迴
      opts = q.slice(1, 1 + q.length)
      $.each(opts, function(i, opt){
        var $question_option = $("<div/>",{
          "class": "question_option",
        })
        $wrapper.find(".question_options_wrapper:last-child").append($question_option)
        $question_option.html(opt.trim())
        if (opt.trim().match(/\?|？/) !== null){
          $question_option.addClass("note")
          $question_option.wrap("<div class='col-xs-12' style='padding: 0px 5px;'></div>")
        } else {
          // 為了讓按鈕之間有空隙
          $question_option.wrap("<div class='col-xs-6' style='padding: 0px 5px;'></div>")
        }
      })
      $("#transformed_questions").append("<hr/>")
      $("#transformed_questions").scrollTop(function() { return this.scrollHeight; });
    }
  })
})

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