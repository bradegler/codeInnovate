var card = `
<div class="card col-md-4 mb-5">
    <div class="card-body">
      <h2 class="card-title"></h2>
      <p class="card-text">
        <img class="img-fluid rounded mb-4 mb-lg-0" src="$$IMAGE$$" alt=""/> 
      </p> 
    </div>
    <div class="card-title text-center">
      <p>$$NAME$$</p>
    </div>
  <div class="card-footer ">
      <div class="row buttonRow">
        <a href="#" class="btn btn1 text-white col-md-2 btn2 active" id ="None">None</a>
        <a href="#" class="btn btn1 text-white col-md-2 btn2 active" id="Light">Light</a>
        <a href="#" class="btn btn1 text-white col-md-3 btn2 active" id="Normal">Normal</a>
        <a href="#" class="btn btn1 text-white col-md-2 btn2 active" id="Extra">Extra</a>
      </div>
      
  </div >
</div >`;

$(document).ready(function() {
  console.log("on load");

  $.ajax({
    url: "http://129.213.143.54:30000/api/database/ingredients"
  }).done(function(result) {
    console.log(result);
    var vegRow = $("#veggie-row");
    var meatRow = $("#meat-row");
    var cheeseRow = $("#cheese-row");
    result.forEach(element => {
      if (element.INGRE_TYPE_CODE === "MMVG") {
        vegRow.append(
          card
            .replace("$$IMAGE$$", element.INGRE_IMG)
            .replace("$$NAME$$", element.INGRE_NAME)
        );
      } else if (element.INGRE_TYPE_CODE === "MMM") {
        meatRow.append(
          card
            .replace("$$IMAGE$$", element.INGRE_IMG)
            .replace("$$NAME$$", element.INGRE_NAME)
        );
      } else if (element.INGRE_TYPE_CODE === "MMCS") {
        cheeseRow.append(
          card
            .replace("$$IMAGE$$", element.INGRE_IMG)
            .replace("$$NAME$$", element.INGRE_NAME)
        );
      }
    });
  });
});
