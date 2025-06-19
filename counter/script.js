var h1 = document.querySelector("#counter");
var inc = document.querySelector("#increase");
var dec = document.querySelector("#decrease");
var reset = document.querySelector("#reset");

var local = localStorage.getItem("#counter") || "0";
h1.textContent = local;

inc.addEventListener("click", function () {
    h1.textContent = parseInt(h1.textContent) + 1;
    localStorage.setItem("#counter", h1.textContent);
});

reset.addEventListener("click", function () {
    h1.textContent = "0";
    localStorage.setItem("#counter", h1.textContent);
});

dec.addEventListener("click", function () {
    h1.textContent = parseInt(h1.textContent) - 1;
    localStorage.setItem("#counter", h1.textContent);
});