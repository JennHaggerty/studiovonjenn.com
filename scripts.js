let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  let cards = document.getElementsByClassName("card");
  if (n === 1) {
    for (i = 0; i < cards.length; i++) {
      let card = cards[i];
      card.classList.replace("slide-right", "slide-left");
    }
  } else {
    for (i = 0; i < cards.length; i++) {
      let card = cards[i];
      card.classList.replace("slide-left", "slide-right");
    }
    }
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}