var ruby = 0;
var php = 0;
var java = 0;
var css = 0;
var csharp = 0;

$(document).ready(function() {
  $('.close').click(function() {
  $('.alert').hide(100);
  });
});

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var nameInput = $("input#name").val();
    $(".name").text(nameInput);

    var one = $("input:radio[name=optradio1]:checked").val();

    if (nameInput.match(/\d+$/)) {
      $("#alert1").show(100);
      event.preventDefault();
      return;
    }
    if (one == undefined) {
      $("#alert2").show(100);
      event.preventDefault();
      return;
    }
    if (one == 'ruby') {
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
    $("#formOne").hide(800);
    $("#formTwo").show(800);
    $("h2").hide();
    event.preventDefault();
  });


  $("#formTwo").submit(function(event) {

    var two = $("input:radio[name=optradio2]:checked").val();

    if (two == undefined) {
      $("#alert3").show(100);
      event.preventDefault();
      return;
    }
    if (two == 'ruby') {
      ruby += 1;
    } else if (two == 'php') {
      php += 1;
    } else if (two == 'java') {
      java += 1;
    } else if (two == 'css') {
      css += 1;
    } else if (two == 'csharp') {
      csharp += 1;
    }
    $("#formOne").hide(800);
    $("#formTwo").hide(800);
    $("#formThree").show(800);
    $("h2").hide();
    event.preventDefault();
  });

  $("#formThree").submit(function(event) {

    var three = $("input:radio[name=optradio3]:checked").val();

    if (three == undefined) {
      $("#alert4").show(100);
      event.preventDefault();
      return;
    }
    if (three == 'ruby') {
      ruby += 1;
    } else if (three == 'php') {
      php += 1;
    } else if (three == 'java') {
      java += 1;
    } else if (three == 'css') {
      css += 1;
    } else if (three == 'csharp') {
      csharp += 1;
    }
    $("#formOne").hide(800);
    $("#formTwo").hide(800);
    $("#formThree").hide(800);
    $("#formFour").show(800);
    $("h2").hide();
    event.preventDefault();
  });

  $("#formFour").submit(function(event) {

    var four = $("input:radio[name=optradio4]:checked").val();

    if (four == undefined) {
      $("#alert5").show(100);
      event.preventDefault();
      return;
    }
    if (four == 'ruby') {
      ruby += 1;
    } else if (four == 'php') {
      php += 1;
    } else if (four == 'java') {
      java += 1;
    } else if (four == 'css') {
      css += 1;
    } else if (four == 'csharp') {
      csharp += 1;
    }
    $("#formOne").hide(800);
    $("#formTwo").hide(800);
    $("#formThree").hide(800);
    $("#formFour").hide(800);
    $("#formFive").show(800);
    $("h2").hide();
    event.preventDefault();
  });

  $("#formFive").submit(function(event) {

    var five = $("input:radio[name=optradio5]:checked").val();

    if (five == undefined) {
      $("#alert6").show(100);
      event.preventDefault();
      return;
    }
    if (five == 'ruby') {
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

    $("#oneResult").text(ruby);
    $("#twoResult").text(php);
    $("#threeResult").text(java);
    $("#fourResult").text(css);
    $("#fiveResult").text(csharp);

    $("#formOne").hide(800);
    $("#formTwo").hide(800);
    $("#formThree").hide(800);
    $("#formFour").hide(800);
    $("#formFive").hide(800);
    $("h2").hide();
    $(".results").show(800);
    event.preventDefault();

    if (ruby > php && ruby > java && ruby > css && ruby > csharp) {
      $("#alertRuby").show(800);
    } else if (php > ruby && php > java && php > css && php > csharp) {
      $("#alertPhp").show(800);
    } else if (java > php && java > ruby && java > css && java > csharp) {
      $("#alertJava").show(800);
    } else if (css > php && css > java && css > ruby && css > csharp) {
      $("#alertCss").show(800);
    } else if (csharp > php && csharp > java && csharp > css && csharp > ruby) {
      $("#alertCsharp").show(800);
    } else {
    $("#alertTie").show(800);
      event.preventDefault();
    }
  });
});
