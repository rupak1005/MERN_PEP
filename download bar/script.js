var prgs=document.querySelector("#progress");
var h1=document.querySelector("h1");
var count=0;
var id=setInterval(()=>{
    if(count===100){
        clearInterval(id);
        h1.style.opacity=1;}
    count++;
    prgs.style.width=count+'%';

    
},50)