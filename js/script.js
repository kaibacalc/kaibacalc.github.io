var lifePoints = "8000";
var c = document.cookie;
console.log(getCookie("lifePoints1"));
console.log(getCookie("lifePoints2"));

function playNew(){
  var audio = document.getElementById("audioNew");
  audio.play();
}

function playChange(){
  var audio = document.getElementById("audioChange");
  audio.play();
}

function getCookie(name) {
  var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  if (match) return match[2];
}

window.onload = function() {
  console.log("Initialized");
  if(getCookie("lifePoints1") != "") {
    document.getElementById("lifePoints1").innerHTML = getCookie("lifePoints1");
  }
  else {
    document.getElementById("lifePoints1").innerHTML = lifePoints;
  }

  if(getCookie("lifePoints2") != "") {
    document.getElementById("lifePoints2").innerHTML = getCookie("lifePoints2");
  }
  else {
    document.getElementById("lifePoints2").innerHTML = lifePoints;
  }
  playNew();
}

function reloadGame() {
  var newLifePoints = prompt('Are you sure you want to start a new game? Please enter the lifepoints.');
  if (newLifePoints != null) {
    document.getElementById("lifePoints1").innerHTML = newLifePoints;
    document.getElementById("lifePoints2").innerHTML = newLifePoints;
    document.cookie = "lifePoints1".concat("=").concat(lifePoints).concat("; expires=Fri, 31 Dec 9999 23:59:59 GMT");
    document.cookie = "lifePoints2".concat("=").concat(lifePoints).concat("; expires=Fri, 31 Dec 9999 23:59:59 GMT");
    playNew();
  } else {
  }
}

function addLifePoints(player) {
  var add = 0;
  if (document.getElementById("changeLifePoints".concat(player)).value.length != 0 && document.getElementById("changeLifePoints".concat(player)).value != 0) {
    var add = document.getElementById("changeLifePoints".concat(player)).value;
    var current = document.getElementById("lifePoints".concat(player)).innerHTML;
    document.getElementById("changeLifePoints".concat(player)).value = "";

    playChange();

    var x = setInterval (function(){
      current = Number(current) + 1;
      add = Number(add) - 1;
      console.log("Add: ".concat(add));
      console.log("Current: ".concat(current));
      document.getElementById("lifePoints".concat(player)).innerHTML = current;

      if (add == 0) {
        clearInterval(x);
        document.cookie = "lifePoints".concat(player).concat("=").concat(current).concat("; expires=Fri, 31 Dec 9999 23:59:59 GMT");
      }
    }, 3);
  }
}

function subLifePoints(player) {
  var sub = 0;
  if (document.getElementById("changeLifePoints".concat(player)).value.length != 0 && document.getElementById("changeLifePoints".concat(player)).value != 0) {
    var sub = document.getElementById("changeLifePoints".concat(player)).value;
    var current = document.getElementById("lifePoints".concat(player)).innerHTML;
    document.getElementById("changeLifePoints".concat(player)).value = "";

    playChange();
    
    var x = setInterval (function(){
      current = Number(current) - 1;
      sub = Number(sub) - 1;
      console.log("Sub: ".concat(sub));
      console.log("Current: ".concat(current));
      document.getElementById("lifePoints".concat(player)).innerHTML = current;

      if (sub == 0) {
        clearInterval(x);
        document.cookie = "lifePoints".concat(player).concat("=").concat(current).concat("; expires=Fri, 31 Dec 9999 23:59:59 GMT");
      }
    }, 3);
  }
}
