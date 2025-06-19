// document.querySelector("html").addEventListener("mousemove", function(dets){
//     console.log(dets);

// })
var img1 = document.querySelector("#img1");
var img2 = document.querySelector("#img2");
var btn = document.querySelector("button");
let h1 = document.querySelector("#heading1");
let h2 = document.querySelector("#heading2");
let h3 = document.querySelector("#heading3");
let h4 = document.querySelector("#heading4");
let random = document.querySelector("#random");

let running = false;
let imgInterval, randomInterval, headingtimeout;

btn.addEventListener("click", function () {
    if (!running) {
        running = true;
        imgInterval = setInterval(function () {
            var src1 = img1.src;
            var src2 = img2.src;
            img1.src = src2;
            img2.src = src1;
        }, 1000);

        headingtimeout=setTimeout(function () {
            h1.textContent = "changed h1";
            h1.style.color = "blue";
            setTimeout(function () {
                h2.textContent = "changed h2";
                h2.style.color = "red";
                setTimeout(function () {
                    h3.textContent = "changed h3";
                    h3.style.color = "green";
                    setTimeout(function () {
                        h4.textContent = "changed h4";
                        h4.style.color = "pink";
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);

        randomInterval = setInterval(function () {
            var r = Math.floor(Math.random() * 100) + 1;
            random.textContent = r;
        }, 1000);
    } else {
        running = false;
        clearInterval(imgInterval);
        clearInterval(randomInterval);
        clearTimeout(headingtimeout);
    }
});
