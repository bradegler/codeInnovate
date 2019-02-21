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
      <div class="dropdown">
  <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="$$ID$$">Amount of Toppings
  <span class="caret"></span></button>
  <ul class="dropdown-menu" id="cb-$$ID$$">
    <li><a href="#">None</a></li>
    <li><a href="#">Light</a></li>
    <li><a href="#">Normal</a></li>
    <li><a href="#">Extra</a></li>
  </ul>
</div> 
  </div >
</div >`;

$(document).ready(function() {
  console.log("on load");
  var ingreds = [];

  $.ajax({
    url: "http://129.213.143.54:30000/api/database/ingredients"
  }).done(function(result) {
    console.log(result);
    var vegRow = $("#veggie-row");
    var meatRow = $("#meat-row");
    var cheeseRow = $("#cheese-row");
    var i = 0;
    result.forEach(element => {
      ingreds.push(element.INGRE_NAME.replace(" ", "_"));
      var temp = i++;
      if (element.INGRE_TYPE_CODE === "MMVG") {
        vegRow.append(
          card
            .replace("$$IMAGE$$", element.INGRE_IMG)
            .replace("$$ID$$", element.INGRE_NAME.replace(" ", "_"))
            .replace("$$ID$$", element.INGRE_NAME.replace(" ", "_"))
            .replace(
              "$$CAL$$",
              "col-xs-12 input-group DELIVERY_INTERVAL" + temp
            )
            .replace("$$NAME$$", element.INGRE_NAME)
        );
      } else if (element.INGRE_TYPE_CODE === "MMM") {
        meatRow.append(
          card
            .replace("$$IMAGE$$", element.INGRE_IMG)
            .replace("$$ID$$", element.INGRE_NAME.replace(" ", "_"))
            .replace("$$ID$$", element.INGRE_NAME.replace(" ", "_"))
            .replace(
              "$$CAL$$",
              "col-xs-12 input-group DELIVERY_INTERVAL" + temp
            )
            .replace("$$NAME$$", element.INGRE_NAME)
        );
      } else if (element.INGRE_TYPE_CODE === "MMCS") {
        cheeseRow.append(
          card
            .replace("$$IMAGE$$", element.INGRE_IMG)
            .replace("$$ID$$", element.INGRE_NAME.replace(" ", "_"))
            .replace("$$ID$$", element.INGRE_NAME.replace(" ", "_"))
            .replace(
              "$$CAL$$",
              "col-xs-12 input-group DELIVERY_INTERVAL" + temp
            )
            .replace("$$NAME$$", element.INGRE_NAME)
        );
      }
    });
  });
  setTimeout(() => {
    $(".dropdown-menu li a").click(function() {
      console.log("I am here");
      $(this)
        .parents(".dropdown")
        .find(".btn")
        .html($(this).text() + ' <span class="caret"></span>');
      $(this)
        .parents(".dropdown")
        .find(".btn")
        .val($(this).text());
    });
  }, 1000);

  var submitAction = $("#submit");
  submitAction.click(() => {
    var pizzaId = "PIZZA-01";
    ingreds.forEach(name => {
      var b = $("#" + name);
      var amount = b.val(); //$("#cb-" + b.attr("id"));
      if (amount !== "") {
        var data = {
          ingre_name: b.attr("id").replace("_", " "),
          total_quantity: amount,
          pizza_id: pizzaId
        };
        console.log(data);

        $.ajax({
          type: "POST",
          url: "http://129.213.143.54:30000/api/database/modelpizza",
          contentType: "application/json",
          data: JSON.stringify(data)
        }).done(result => {});
      }
    });
    window.location = "http://129.213.143.54:30000/api/pizza/" + pizzaId;
  });
});
