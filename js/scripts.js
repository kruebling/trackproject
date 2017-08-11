var ruby = 0;
var php = 0;
var java = 0;
var css = 0;
var csharp = 0;

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var nameInput = $("input#name").val();
    event.preventDefault();

    var one = $("input:radio[name=optradio1]:checked").val();

    if(nameInput.match(/^\d+$/)) {
      alert("Please enter only letters");

   }  if (one==undefined) {
      alert("Please select a response for each question");
    } if (one == 'ruby') {
      ruby += 1;
    } else if (one == 'php') {
      php += 1;
    } else if (one == 'java') {
      java += 1;
    } else if (one == 'css') {
      css += 1;
    } else if (one == 'csharp') {
      csharp += 1;
    }

    $(".name").text(nameInput);

  });
});
