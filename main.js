let up = document.getElementById("fas");
let nav = document.getElementById("nav");
let section = document.getElementById("right-about");
let progres =document.querySelectorAll(".progres span");
let nums = document.getElementById("nums");//السيكشن
let number = document.querySelectorAll(".number .num");//الارقام 
let started = false;
let text=document.getElementById("text1");
let text2=document.getElementById("text2");
let text3=document.getElementById("text3");
let one =document.getElementById("one")
let two =document.getElementById("two")
let three =document.getElementById("three")


window.onscroll = function(){
   if(this.scrollY >= 300){
    up.classList.add("show");
    nav.classList.add("change");
    
   }else{
    up.classList.remove("show");
    nav.classList.remove("change");
   }
   if(window.scrollY >=section.offsetTop -100){
    progres.forEach((span)=>{
        span.style.width=span.dataset.width;
    });
   };
   if(window.scrollY >=nums.offsetTop -300 ){
    if(!started){
        number.forEach((num)=>startcount(num));
    }
    started=true;
}
};

up.onclick = function(){
    window.scrollTo({
        top:0,
    });
};

function startcount(el){
    let goal=el.dataset.goal;
    let counter = setInterval(()=>{
        el.textContent++;
        if(el.textContent==goal){
            clearInterval(counter);
        }
    },3000 / goal);
}

text2.style.display="none";
text3.style.display="none";

one.onclick = function(){
    text1.style.display="block";
    text2.style.display="none";
    text3.style.display="none";
   
};

two.onclick = function(){
    text1.style.display="none";
    text2.style.display="block";
    text3.style.display="none";
};

three.onclick = function(){
    text1.style.display="none";
    text2.style.display="none";
    text3.style.display="block";
};




 
