const button = document.querySelector(".buttons");
const inputsDiv = document.querySelector(".inputs");
const inputbox=document.querySelectorAll("input");
const fontbody = document.body;
const stylesheet = document.getElementById("stylesheet");
 const heading = document.getElementById("heading");


button.classList.add('makeitred')
heading.classList.add('makeitred')
button.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission

    // Change background and padding of .inputs
    inputsDiv.style.backgroundColor = "grey";
    inputsDiv.style.padding = "20px";
    inputsDiv.style.fontSize="20px";


    // Change heading styles
   
    heading.innerHTML+="<i> chuchu</i>";
    //cant add same element in before
    // heading.before("hello");
    // document.body.after(button);
    // heading.textContent = "New Payment Form";
   

    // Change body font family
    fontbody.style.fontFamily = "Gilroy"; 
    fontbody.style.fontSize="20px"

    // Toggle stylesheet
    stylesheet.disabled = !stylesheet.disabled;
    button.style.borderRadius="20px"

// var para=document.createElement("p");
// var para2=document.createElement("h1");
// para2.textContent="para2 appended";
// para.textContent="para appended ";
// document.body.append(para,para2);
// document.body.appendChild(para2);
// document.body.removeChild(para)

});

