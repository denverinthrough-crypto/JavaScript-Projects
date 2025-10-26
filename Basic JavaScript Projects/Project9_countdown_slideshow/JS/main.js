function countdown() {
    var seconds = document.getElementById("seconds").value;
    var timer = document.getElementById("timer"); // Get the element to display countdown

    function tick() {
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000);

        if (seconds == -1) {
            alert("Time's up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }

    tick();
}


let slideIndex = 0;
let slides = document.getElementsByClassName("slides");
let caption = document.getElementById("caption");

// Show the current slide
function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // Wrap around if slideIndex is out of bounds
    if (slideIndex >= slides.length) { slideIndex = 0; }
    if (slideIndex < 0) { slideIndex = slides.length - 1; }

    slides[slideIndex].style.display = "block";
    caption.innerHTML = slides[slideIndex].alt;
}

// Change slide when arrow clicked
function changeSlide(n) {
    slideIndex += n;
    showSlides();
}

// Initialize first slide
showSlides();
