
var text= document.getElementById("text");
var links =  document.querySelectorAll("a");

links[0].addEventListener("click",function (even) {text.style.display= "block";});
links[1].addEventListener("click",function (even) {text.style.display= "none";});

