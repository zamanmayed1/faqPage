// question one
function plus() {
  document.getElementById("ans1").style.display = "block";
  document.getElementById("minus").style.display = "block";
  document.getElementById("plus").style.display = "none";
}
function minus() {
  document.getElementById("ans1").style.display = "none";
  document.getElementById("minus").style.display = "none";
  document.getElementById("plus").style.display = "block";
}

// question tow
function plus2() {
  document.getElementById("ans2").style.display = "block";
  document.getElementById("minus2").style.display = "block";
  document.getElementById("plus2").style.display = "none";
}
function minus2() {
  document.getElementById("ans2").style.display = "none";
  document.getElementById("minus2").style.display = "none";
  document.getElementById("plus2").style.display = "block";
}

function expandAll() {
  document.getElementById("ans1").style.display = "block";
  document.getElementById("ans2").style.display = "block";
  document.getElementById("expandAll").style.display = "none";
  document.getElementById("collapsAll").style.display = "block";
}
function collapsAll() {
  document.getElementById("ans1").style.display = "none";
  document.getElementById("ans2").style.display = "none";
  document.getElementById("expandAll").style.display = "block";
  document.getElementById("collapsAll").style.display = "none";
}
