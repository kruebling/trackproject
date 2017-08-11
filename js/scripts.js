var ruby = 0;
var php = 0;
var java = 0;
var css = 0;
var csharp = 0;

$(document).ready(function() {
  $("#formOne").submit(function(event) {

    var nameInput = $("input#name").val();
    event.preventDefault();

    $(".name").text(nameInput);

    var one = $("input:radio[name=optradio1]:checked").val();
    var two = $("input:radio[name=optradio2]:checked").val();
    var three = $("input:radio[name=optradio3]:checked").val();
    var four = $("input:radio[name=optradio4]:checked").val();
    var five = $("input:radio[name=optradio5]:checked").val();

    if(nameInput.match(/^\d+$/)) {
      alert("Please enter only letters");
      return;

   }  if (one==undefined || two==undefined || three==undefined || four==undefined || five==undefined) {
      alert("Please select a response for each question");
      return;

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
    } if (two == 'ruby') {
      ruby += 1;
    } else if (two == 'php') {
      php += 1;
    } else if (two == 'java') {
      java += 1;
    } else if (two == 'css') {
      css += 1;
    } else if (two == 'csharp') {
      csharp += 1;
    } if (three == 'ruby') {
      ruby += 1;
    } else if (three == 'php') {
      php += 1;
    } else if (three == 'java') {
      java += 1;
    } else if (three == 'css') {
      css += 1;
    } else if (three == 'csharp') {
      csharp += 1;
    } if (four == 'ruby') {
      ruby += 1;
    } else if (four == 'php') {
      php += 1;
    } else if (four == 'java') {
      java += 1;
    } else if (four == 'css') {
      css += 1;
    } else if (four == 'csharp') {
      csharp += 1;
    } if (five == 'ruby') {
      ruby += 1;
    } else if (five == 'php') {
      php += 1;
    } else if (five == 'java') {
      java += 1;
    } else if (five == 'css') {
      css += 1;
    } else if (five == 'csharp') {
      csharp += 1;
    }
  });
});

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    $("#formOne").hide(800);
    $("#formTwo").show(800);
    $("h2").hide();
    event.preventDefault();
    $("#formTwo").submit(function(event) {
      $("#formTwo").hide(800);
      $("#formThree").show(800);
      $("h2").hide();
      event.preventDefault();
      $("#formThree").submit(function(event) {
        $("#formOne").hide(800);
        $("#formTwo").hide(800);
        $("#formThree").hide(800);
        $("#formFour").show(800);
        $("h2").hide();
        event.preventDefault();
        $("#formFour").submit(function(event) {
          $("#formOne").hide(800);
          $("#formTwo").hide(800);
          $("#formThree").hide(800);
          $("#formFour").hide(800);
          $("#formFive").show(800);
          $("h2").hide();
          event.preventDefault();
          $("#formFive").submit(function(event) {
            $("#formOne").hide(800);
            $("#formTwo").hide(800);
            $("#formThree").hide(800);
            $("#formFour").hide(800);
            $("#formFive").hide(800);
            $("h2").hide();
            event.preventDefault();
          });
        });
      });
    });
  });
});
