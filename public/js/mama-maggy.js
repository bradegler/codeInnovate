var btn = document.getElementById("createYourPizza");

function functionClick() {
  console.log("inside functionClick");
  location.replace("buildYourOwnPizza.html");
}

btn.onclick = functionClick;

var btn2 = document.getElementById("Track");

function functionTrack() {
  console.log("inside functionTrack");
  location.replace("buildYourOwnPizza.html");
}

btn2.onclick = functionClick;