var cardHead = '<div class="col-md-3 mb-5"><div class="card-body"><h2 class="card-title"></h2><p class="card-text">';
var cardImg = '<img class="img-fluid rounded mb-4 mb-lg-0" src="$$IMAGE$$" alt="" /> </p> </div>';
var cardContent = '<div class="card-title text-center"><p>$$NAME$$</p></div></div>';

$(document).ready(function () {
  console.log("on load");

  $.ajax({
    url: "http://129.213.143.54:30000/api/database/ingredients",
  }).done(function (result) {
    console.log(result);
    var vegRow = $("#veggie-row");
    result.forEach(element => {
      if (element.INGRE_TYPE_CODE === "MMVG") {
        vegRow.append(cardHead + cardImg.replace("$$IMAGE$$", element.INGRE_IMG) + cardContent.replace("$$NAME$$", element.INGRE_NAME));
      }
    });
  });

});
