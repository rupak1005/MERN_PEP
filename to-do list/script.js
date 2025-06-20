var add=document.querySelector("#add");
var remove=document.querySelector("#remove");
var textarea=document.querySelector("#textarea");
var addlist=document.querySelector("#addlist");
add.addEventListener("click",()=>{
    if(textarea.value === "") return;
    addlist.innerHTML+=`<li>${textarea.value} <button class="remove"> remove</button></li>
     `;
    console.log("hi");
    textarea.value="";
})
addlist.addEventListener("click",(elem)=>{
    if(elem.target.classList.contains("remove")){
        elem.target.parentElement.remove();
    }
})