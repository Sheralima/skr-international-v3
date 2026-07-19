// SKR INTERNATIONAL V3
// Image Slider

let slides = document.querySelectorAll(".slide");

let index = 0;


function showSlide(){

    slides.forEach(function(slide){

        slide.classList.remove("active");

    });


    index++;


    if(index >= slides.length){

        index = 0;

    }


    slides[index].classList.add("active");

}


// Change image every 3 seconds

if(slides.length > 0){

    setInterval(showSlide,3000);

}
