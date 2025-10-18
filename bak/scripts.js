
class Gallery {
  constructor(element) {
    this.imagesDir = "./images/"
    this.gallery = element;
  }

  customSort(a, b) {
    return (Number(a.match(/(\d+)/g)[0]) - Number((b.match(/(\d+)/g)[0])));
  }

  async getImageSource() {
    const titles = await fetch("./images/")
      .then((response) => response.text())
      .then((text) => {
        const el = document.createElement('html');
        el.innerHTML = text;
        const list = el.querySelector("#files").getElementsByTagName("a");
        let arr = [];
        for (let i = 0; i < list.length; i++) {
          arr[i] = list[i].title;
        }

        arr.shift(); // get rid of first result which is the "../" directory reference
        arr.sort(this.customSort);
        return(arr);
      })
      .catch((error) => console.log(error));

      return titles;
  }

  createImageElement(src) {
    const image = document.createElement("img");
    image.setAttribute("src", this.imagesDir + src);
    image.setAttribute("alt", "");

    return image;
  }

  async onLoad() {
    await this.getImageSource()
      .then((titles) => {
        titles.forEach((title) => {
          const image = this.createImageElement(title);
          
          this.gallery.appendChild(image);
        })
      });
  }
}

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

window.onload = (event) => {
  const gallery = document.querySelector(".gallery");
  if (gallery) {
    new Gallery(gallery).onLoad();
  }

  const carousels = document.getElementsByClassName("carousel");
  if (carousels) {
    for (const carousel of carousels) {
      new Carousel(carousel).addEventListeners();
    }
  }

  const footer = document.querySelector("footer");
  const text = document.createTextNode("Copyright © " + new Date().getFullYear() + " Jennifer Haggerty. All rights reserved." + " ");
  footer.prepend(text);
}
