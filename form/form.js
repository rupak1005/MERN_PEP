const button = document.querySelector(".buttons");
const inputsDiv = document.querySelector(".inputs");
const fontbody = document.body;
const stylesheet = document.getElementById("stylesheet");

button.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission

    // Change background and padding of .inputs
    inputsDiv.style.backgroundColor = "grey";
    inputsDiv.style.padding = "20px";
    inputsDiv.style.fontSize="20px";

    // Change heading styles
    const heading = document.getElementById("heading");
    //cant add same element in before
    heading.before("hello");
    heading.textContent = "New Payment Form";
    heading.style.fontSize = "20px";
    heading.style.color = "blue";
    heading.style.padding = "10px";
    heading.style.border = "1px solid black";
    heading.style.borderRadius = "20px";
    heading.style.backgroundColor = "cyan";

    // Change body font family
    fontbody.style.fontFamily = "Gilroy"; 
    fontbody.style.fontSize="20px"

    // Toggle stylesheet
    stylesheet.disabled = !stylesheet.disabled;
});
