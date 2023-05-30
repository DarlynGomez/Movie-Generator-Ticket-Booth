let playButton = document.querySelector(".btn");

function buttonFadein(){
  setTimeout(function(){document.getElementById("btn").style.cssText ="display:block;transition:1.5s;"}, 3000)
}

playButton.onclick function(){
  document.getElementById("img2").style.cssText = "display:none;transition:1.5s;"
}

let button = document.getElementById("buttonTest");
let leftRing = document.getElementById("leftRing");
let rightRing = document.getElementById("rightRing");
let bell = document.getElementById("bell");

function bellChangeOne(){
  setTimeout(function() { document.getElementById("bell").style.cssText = "display:none;" }, 2500);
  setTimeout(function() { document.getElementById("leftRing").style.cssText = "display:block;" }, 4000);
  setTimeout(function() { document.getElementById("rightRing").style.cssText = "display:block;" }, 6000);
}