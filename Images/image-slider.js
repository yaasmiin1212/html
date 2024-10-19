let index = 0;
const slides = document.querySelectorAll(".slider");
const totalSlides = slides.length;
const carousel = document.querySelector(".carousel");

function nextSlide() {
  index = (index + 1) % totalSlides;
  updateSlidePosition();
}

function updateSlidePosition() {
  carousel.style.transform = `translateX(-${index * 100}%)`;
}

let startX;
let isDragging = false;

carousel.addEventListener("mousedown", (e) => {
  startX = e.clientX;
  isDragging = true;
  carousel.style.transition = "none";
});

carousel.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  const currentX = e.clientX;
  const moveX = currentX - startX;
  carousel.style.transform = `translateX(${moveX - index * 100}%)`;
});

carousel.addEventListener("mouseup", (e) => {
  if (!isDragging) return;
  isDragging = false;
  carousel.style.transition = "transform 0.5s ease-in-out";
  const moveX = e.clientX - startX;
  if (moveX < -100) {
    nextSlide();
  } else if (moveX > 100) {
    index = (index - 1 + totalSlides) % totalSlides;
    updateSlidePosition();
  } else {
    updateSlidePosition();
  }
});

carousel.addEventListener("mouseleave", () => {
  if (isDragging) {
    isDragging = false;
    carousel.style.transition = "transform 0.5s ease-in-out";
    updateSlidePosition();
  }
});

setInterval(nextSlide, 10000); // Change slide every 10 seconds
