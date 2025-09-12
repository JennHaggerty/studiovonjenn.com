

class Carousel {
  constructor(element) {
    this.carouselSlides = element.querySelector(".slides");
    this.cards = element.querySelectorAll(".card");
    this.galleries = element.querySelectorAll(".slide-images");
    this.arrowLeft = element.querySelector(".prev");
    this.arrowRight = element.querySelector(".next");
    this.dots = element.querySelectorAll(".dot");
    this.slideIndex = 0;
  }

  slideToIndex(n) {
    if (n < 0 || n >= this.dots.length) return;

    this.slideIndex = n;
    this.carouselSlides.scrollTo(this.carouselSlides.children[n].offsetLeft - this.carouselSlides.offsetLeft, 0);
    
    for (let i = 0; i < this.dots.length; i++) {
      this.dots[i].classList.toggle("active", this.slideIndex === i);
    }
  }
  
  addEventListeners() {
    for (let i = 0; i < this.dots.length; i++) {
      this.dots[i].addEventListener("click", () => {
        this.slideToIndex(i);

        this.cards[this.slideIndex].classList = "card";
        this.galleries[this.slideIndex].classList = "slide-images";

        void this.cards[i].offsetWidth;
        void this.galleries[i].offsetWidth;
        
        this.galleries[i].classList.add("fade-down");
        this.cards[i].classList.add("slide-up");
      });
    }
    this.arrowLeft.addEventListener("click", () => {
      this.slideToIndex((this.slideIndex === 0 ? this.dots.length : this.slideIndex) - 1);
      this.cards[this.slideIndex].classList = "card";
      this.galleries[this.slideIndex].classList = "slide-images";

      void this.cards[this.slideIndex].offsetWidth;
      void this.galleries[this.slideIndex].offsetWidth;

      this.galleries[this.slideIndex].classList.add("fade-up");
      this.cards[this.slideIndex].classList.add("slide-left");
    });
    this.arrowRight.addEventListener("click", () => {
      this.slideToIndex(this.slideIndex === this.dots.length -1 ? 0 : this.slideIndex + 1);
      this.cards[this.slideIndex].classList = "card";
      this.galleries[this.slideIndex].classList = "slide-images";

      void this.cards[this.slideIndex].offsetWidth;
      void this.galleries[this.slideIndex].offsetWidth;

      this.galleries[this.slideIndex].classList.add("fade-up");
      this.cards[this.slideIndex].classList.add("slide-right");
    });
  }
}

const carousels = document.getElementsByClassName("carousel");

for (const carousel of carousels) {
  new Carousel(carousel).addEventListeners();
}