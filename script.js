const slides=document.querySelectorAll(".slide");
let current=0;

setInterval(()=>{
slides[current].classList.remove("active");
current=(current+1)%slides.length;
slides[current].classList.add("active");
},4000);

window.addEventListener("scroll",()=>{
document.querySelectorAll(".reveal").forEach(el=>{
if(el.getBoundingClientRect().top<window.innerHeight-100){
el.classList.add("active");
}
});
});