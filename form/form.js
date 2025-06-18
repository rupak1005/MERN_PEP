const button = document.querySelector(".buttons");
const inputs = document.querySelectorAll(".inputs");

button.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission
    inputs.forEach(input => {
        input.style.backgroundColor = "red";
    });
});