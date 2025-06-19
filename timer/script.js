var sec = document.querySelector("#sec");
var min = document.querySelector("#min");
var hour = document.querySelector("#hour");

var startbtn = document.querySelector("#start");
var resetbtn=document.querySelector("#reset");
var stopbtn =document.querySelector("#stop");

let intervalId; 
startbtn.addEventListener("click", () => {
    clearInterval(intervalId);
   intervalId=setInterval(() => {
        let seconds = parseInt(sec.textContent, 10) + 1;
        let minutes = parseInt(min.textContent, 10);
        let hours = parseInt(hour.textContent, 10);

        if (seconds === 60) {
            seconds = 0;
            minutes += 1;
        }
        if (minutes === 60) {
            minutes = 0;
            hours += 1;
        }

        sec.textContent = String(seconds).padStart(2, "0");
        min.textContent = String(minutes).padStart(2, "0");
        hour.textContent = String(hours).padStart(2, "0");
    }, 1000);
});

resetbtn.addEventListener("click",()=>{
    clearInterval(intervalId);
    sec.textContent = "00";
    min.textContent = "00";
    hour.textContent = "00";
    

})

stopbtn.addEventListener("click",()=>{
    clearInterval(intervalId);
})
    