var example = ["hi","hi","there", "hi","mom", "mom", "hey"]

$(function(){
  $("#input").submit(function(){
    event.preventDefault();
    var inputArray = $("#input1").val().split(" ");
    var outputArray = inputArray.reduce(function(total, item) {
      if (item in total) {
        total[item]++;
      }
      else {
        total[item] = 1;
      }
      return total;
    }, {});

    var keyArr = Object.keys(outputArray)
    var valueArr = Object.values(outputArray)
    var displayArr = [];
    for (var i=0; i <= keyArr.length -1; i++){
      displayArr.push(keyArr[i] + " = " + valueArr[i]);
      $("#output").append("<li>" + displayArr[i] + "</li>");
    };
  });//End of Submit
});//End of jQuery
