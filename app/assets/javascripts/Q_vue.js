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
    Vue.filter('only_one_new_line', function (value) {
      if (!!value && value.length > 0) {
        return value.replace(/\n\s*\n/g, '\n');
      } else {
        return value
      }
    })
    Vue.filter('price_on_new_line', function (value) {
      var price_patt = /\$[0-9]+/i;
      var price = value.match(price_patt);
      if (!!price && price.length > 0) { // price 是個 Array, EX: ["$25", index: 9, input: "新鮮現榨↵永和豆漿$25你為什麼不喝"]
        var s = price.index
        return value.slice(0, s) + "\n" + value.slice(s, s + price[0].length) + "\n" + value.slice(s + price[0].length, value.length)
      } else {
        return value
      }
    })
    var page = new Vue({
      el: ".questions.new",
      // data: {
      //   transformed_questions: ""
      // },
      methods: {
        alertMe: function(max){
          swal.setDefaults({
            confirmButtonText: 'Next &rarr;',
            showCancelButton: true,
            animation: false,
            progressSteps: ['1', '2', '3']
          });

          var steps = [
            {
              title: '請選擇數量', // 改成規格文字
              input: 'select',
              inputOptions: function(){
                var num_pairs = {}
                for (i = 1; i <= max; i++) { 
                  num_pairs[i] = i
                }
                return num_pairs
              }(),
              inputPlaceholder: '請選擇數量',
              showCancelButton: true,
              inputValidator: function(value) {
                return new Promise(function(resolve, reject) {
                  if (value === 'UKR') {
                    resolve();
                  } else {
                    // reject('You need to select Ukraine :)');
                  }
                });
              }
            },{
              type: 'success',
              html: 'You selected: ' + result
            },
            'Step 3'
          ];

          swal.queue(steps).then(function() {
            swal.resetDefaults();
            swal({
              title: 'All done!',
              confirmButtonText: 'Lovely!',
              showCancelButton: false
            });
          }, function() {
            swal.resetDefaults();
          })
        }
      },
      props: ["questions"],
      computed: {
        transformed_questions: function(){
          if (!!this.questions && this.questions.length > 0) {
            var qs_arr = this.questions.split("\n\n"); 
          }
          // console.log(qs_arr)
          if (!!qs_arr && qs_arr.length > 0) {
            var arr = [];
            qs_arr.forEach(function(q, index){
              // console.log(q)
              if (!!q) {
                q = q.split(",")
                // q[0].length > 0 此處不判斷，這樣換兩行之後才會出現空白的，提醒使用者可以打字了
                if (q.length > 0) {
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