const div1= document.querySelector("div.d1");
const div2= document.querySelector("div.d2");
const div3= document.querySelector("div.d3");
const div4= document.querySelector("div.d4");
const div5= document.querySelector("div.d5");
const div6= document.querySelector("div.d6");
window.addEventListener("scroll",function(){
    if(div1.getBoundingClientRect().top < window.innerHeight){
        div1.style.animation= 'slideRAndFade 4s';
    }
    
})
window.addEventListener("scroll",function(){
    if(div2.getBoundingClientRect().top < window.innerHeight){
        div2.style.animation= 'slideRAndFade 4s';
    }
    
})
window.addEventListener("scroll",function(){
    if(div3.getBoundingClientRect().top < window.innerHeight){
        div3.style.animation= 'slideRAndFade 4s';
    }
    
})
window.addEventListener("scroll",function(){
    if(div4.getBoundingClientRect().top < window.innerHeight){
        div4.style.animation= 'slideLAndFade 4s';
    }
    
})
window.addEventListener("scroll",function(){
    if(div5.getBoundingClientRect().top < window.innerHeight){
        div5.style.animation= 'slideLAndFade 4s';
    }
    
})
window.addEventListener("scroll",function(){
    if(div6.getBoundingClientRect().top < window.innerHeight){
        div6.style.animation= 'slideLAndFade 4s';
    }
    
})