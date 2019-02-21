var lifePoints = "8000";

window.onload = function() {
  console.log("Initialized");
  document.getElementById("lifePoints1").innerHTML = lifePoints;
  document.getElementById("lifePoints2").innerHTML = lifePoints;
}

function reloadGame() {
  var newLifePoints = prompt('Are you sure you want to start a new game? Please enter the lifepoints.');
  if (newLifePoints != null) {
    document.getElementById("lifePoints1").innerHTML = newLifePoints;
    document.getElementById("lifePoints2").innerHTML = newLifePoints;
  } else {
  }
}

function addLifePoints(player) {
  var add = document.getElementById("changeLifePoints".concat(player)).value;
  var current = document.getElementById("lifePoints".concat(player)).innerHTML;
  document.getElementById("changeLifePoints".concat(player)).value = "";

  var x = setInterval (function(){
    current = Number(current) + 1;
    add = Number(add) - 1;
    console.log("Add: ".concat(add));
    console.log("Current: ".concat(current));
    document.getElementById("lifePoints".concat(player)).innerHTML = current;

    if (add == 0) {
      clearInterval(x);
    }
  }, 3);
}

function subLifePoints(player) {
  var sub = document.getElementById("changeLifePoints".concat(player)).value;
  var current = document.getElementById("lifePoints".concat(player)).innerHTML;
  document.getElementById("changeLifePoints".concat(player)).value = "";

  var x = setInterval (function(){
    current = Number(current) - 1;
    sub = Number(sub) - 1;
    console.log("Sub: ".concat(sub));
    console.log("Current: ".concat(current));
    document.getElementById("lifePoints".concat(player)).innerHTML = current;

    if (sub == 0) {
      clearInterval(x);
    }
  }, 3);

}
