// ===============================
// SKR INTERNATIONAL V3
// script.js
// ===============================

// Smooth Scroll for Navbar Links
document.querySelectorAll('a[href^="#"]').forEach(link => {

link.addEventListener("click", function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

// Counter Animation

const counters=document.querySelectorAll(".counter");

const speed=100;

counters.forEach(counter=>{

const updateCounter=()=>{

const target=+counter.getAttribute("data-target");

const count=+counter.innerText;

const increment=target/speed;

if(count<target){

counter.innerText=Math.ceil(count+increment);

setTimeout(updateCounter,20);

}else{

counter.innerText=target;

}

};

updateCounter();

});

// Fade Animation

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(".card,.hero,#about,#plans").forEach((el)=>{

observer.observe(el);

});

// Current Year in Footer

const year=document.getElementById("year");

if(year){

year.innerText=new Date().getFullYear();

}

console.log("SKR INTERNATIONAL V3 Loaded Successfully");
