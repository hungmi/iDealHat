$(document).on("ready", function(){
  if (document.getElementsByClassName("questions new").length > 0) {
    Vue.component('Qcontent', {
      template: "#Qcontent",
      props: ["content"]
    })
    Vue.component('Qoption', {
      template: "#Qoption",
      props: ["option"]
    })
    var page = new Vue({
      el: ".questions.new",
      // data: {
      //   transformed_questions: ""
      // },
      props: ["questions"],
      computed: {
        transformed_questions: function(){
          if (this.questions !== undefined && this.questions.length > 0){
            var qs_arr = this.questions.split("\n\n"); 
          }
          // console.log(qs_arr)
          if (qs_arr !== undefined && qs_arr.length > 0) {
            var arr = [];
            qs_arr.forEach(function(q, index){
              // console.log(q)
              if (q !== undefined) {
                q = q.split(",")
                if (q.length > 0) { // && q[0].length > 0 此處不判斷，這樣換兩行之後才會出現空白的，提醒使用者可以打字了
                  arr.push({
                    content: q[0],
                    options: q.slice(1, 1 + q.length)
                  })
                }  
              }
            })
            return arr;
          } else {
            return {}
          }
          // console.log(arr)
          // return [
          //   { content: "請輸入一點東西", options: { jjj: "aaa", kkk: "a12" } },
          //   { content: "第二題", options: { jjj: "bbb", kkk: "acc" } },
          //   { content: "請輸入一點東西", options: { jjj: "aaa", kkk: "a12" } }
          // ]
        }
      }
    });
  }
})