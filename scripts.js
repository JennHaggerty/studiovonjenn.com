let slideIndex = 1;
let carousel = document.querySelector('.slides');
let slides = document.getElementsByClassName("slide");
//let slideWidth = slides[0].offsetWidth;

showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  let cards = document.getElementsByClassName("slide.card");
  const offset = 100 * slideIndex;
  if (n === 1) {
    // user presses right arrow, content slides in from right
    for (i = 0; i < cards.length; i++) {
      let card = cards[i];
      card.classList.replace("slide-right", "slide-left");
    }
  } else {
    // user presses left arrow, content slides in from left
    for (i = 0; i < cards.length; i++) {
      let card = cards[i];
      card.classList.replace("slide-left", "slide-right");
    }
  }
  carousel.style.transform = `translateX(${offset}%)`;
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    const slide = slides[i]
    slide.ariaHidden = true;
    slide.ariaLive = false;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].ariaHidden = false;
  slides[slideIndex-1].ariaLive = true;
  dots[slideIndex-1].className += " active";
}