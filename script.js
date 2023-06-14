let title = document.getElementById("title");
let arbolI = document.getElementById("arbol-i");
let arbolD = document.getElementById("arbol-d");
let rejaI = document.getElementById("reja-i");
let rejaD = document.getElementById("reja-d");

window.addEventListener("scroll", () => {
  let value = window.scrollY;

  title.style.marginTop = value * 2.5 + "px";
  arbolI.style.left = value * -1.5 + "px";
  arbolD.style.left = value * 1.5 + "px";
  rejaI.style.left = value * 0.5 + "px";
  rejaD.style.left = value * -0.5 + "px";
});
