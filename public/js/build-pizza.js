$(document).ready(function () {
  console.log("on load");

  $.ajax({
    url: "http://129.213.143.54:30000/api/database/ingredients",
  }).done(function (result) {
    console.log(result);

  });

});
