var inpt = document.querySelector("#textarea");
var count = document.querySelector("#count");
var words=document.querySelector("#wordcount");
inpt.addEventListener("input", () => {
    // var wordsarr = inpt.value.trim().split(/\s+/).filter(Boolean);
    var wordsarr=inpt.value.trim().split(" ");
    wordsarr=wordsarr.filter(x=>x!=="");
    console.log(wordsarr);
    words.textContent=wordsarr.length;
    count.textContent = inpt.value.length;
    console.log(wordsarr.length);
});