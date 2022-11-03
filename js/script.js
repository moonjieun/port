$(document).ready(function () {
    $("#fullpage").fullpage({
      afterLoad: function (origin, destination, direction) {
        if (destination.index == 1) {
          $(".section02 .txt-box").addClass("active");
        }
      },
  
      onLeave: function (origin, destination, direction) {
        if (origin.index == 1) {
          $(".section02 .txt-box").removeClass("active");
        }
      }
    });
  
    $("header > div").click(function () {
      var indexNum = $(this).index() + 1;
      fullpage_api.moveTo(indexNum);
    });
  });
  
  var typingBool = false;
  var typingIdx = 0;
  
  var typingTxt = $(".typing-txt").text();
  
  typingTxt = typingTxt.split(""); 
  
  if (typingBool == false) {
  
    typingBool = true;
    var tyInt = setInterval(typing, 100);
  }
  
  function typing() {
    if (typingIdx < typingTxt.length) {
     
      $(".typing").append(typingTxt[typingIdx]);
    
      typingIdx++;
    } else {
   
      clearInterval(tyInt);
    }
  }
  
