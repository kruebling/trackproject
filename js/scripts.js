$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var nameInput = $("input#name").val();
    var classInput = $("input#class").val();
    var experienceInput= $("input#experience").val();

    $(".name").text(nameInput);
    $(".class").text(classInput);
    $(".experience").text(experienceInput);

    event.preventDefault();
  });
});
