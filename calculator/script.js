const inputs = document.querySelectorAll("input");

inputs.forEach(input => {
  input.addEventListener("click", function() {
    input.style.backgroundColor = "red";
  });
});