var textarea = document.querySelector("#textarea");
var people = document.querySelector(".people");
var arr = [
    { name: "rupak", src: "https://plus.unsplash.com/premium_photo-1749732738885-b1fcc64d586a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8" },
    { name: "ankit", src: "https://images.unsplash.com/photo-1743397015934-3aa9c6199baf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8" },
    { name: "rohan", src: "https://images.unsplash.com/photo-1749581434794-d5de133303d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "peacock", src: "https://plus.unsplash.com/premium_photo-1749723954289-8c8434ff5274?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D" },
    { name: "sam", src: "https://images.unsplash.com/photo-1745933115134-9cd90e3efcc7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D" }
];

function isSubsequence(str, sub) {
    let i = 0, j = 0;
    while (i < str.length && j < sub.length) {
        if (str[i] === sub[j]) {
            j++;
        }
        i++;
    }
    return j === sub.length;
}

function addpoeple(list) {
    people.innerHTML = "";
    list.forEach((el) => {
        people.innerHTML += `<div class="img"><img src="${el.src}" alt=""></div>
       <div class="name">${el.name}</div>`;
    });
}

addpoeple(arr);

textarea.addEventListener("input", () => {
    var inp = textarea.value.trim("");
    var result = arr.filter(el => isSubsequence(el.name, inp));
    if(result.length===0){
        people.innerHTML=`<h1>result not found</h1>`;
    }else{
    addpoeple(result);}
});
