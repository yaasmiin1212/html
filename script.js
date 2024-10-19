// Sticky navigation Functionality
document.addEventListener("scroll", () => {
  var header = document.querySelector("nav");
  if (window.scrollY > 0) {
    header.classList.toggle("sticky");
    var logo = document.querySelector("#logo");
    logo.src = "images/logo black.png";
  } else {
    header.classList.remove("sticky");
    var logo = document.querySelector("#logo");
    logo.src = "images/white-logo.png";
  }
});

// Slider Javascript
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".item");
  const dots = document.querySelectorAll("button.dot");
  const prev = document.querySelector(".dots .prev");
  const next = document.querySelector(".dots .next");

  let currentIndex = 0;

  function showSlide(index) {
    items.forEach((item, i) => {
      item.style.transform = `translateX(${100 * (i - index)}%)`;
    });
    dots.forEach((dot) => dot.classList.remove("active"));
    dots[index].classList.add("active");
  }

  function goToNextSlide() {
    currentIndex = (currentIndex + 1) % items.length;
    showSlide(currentIndex);
  }

  function goToPrevSlide() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showSlide(currentIndex);
  }

  next.addEventListener("click", goToNextSlide);
  prev.addEventListener("click", goToPrevSlide);

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentIndex = index;
      showSlide(currentIndex);
    });
  });

  showSlide(currentIndex);
  // Set interval
  setInterval(function () {
    goToNextSlide();
  }, 10000); // Slide every 10 seconds
});
// Video Section Js
document.addEventListener("DOMContentLoaded", () => {
  const playButton = document.querySelector(".video-icon");
  const closeButton = document.querySelector(".close-video");
  const videoBox = document.querySelector(".video-box");
  const videoFrame = document.querySelector("#video-frame");
  const section = document.querySelector("section");

  const videoSrc = "https://www.youtube.com/embed/B03IqRlOhG0";

  playButton.addEventListener("click", (e) => {
    e.preventDefault();
    videoFrame.src = videoSrc;
    videoBox.style.display = "block";
    section.classList.add("video-blur");
  });

  closeButton.addEventListener("click", (e) => {
    e.preventDefault();
    videoFrame.src = "";
    videoBox.style.display = "none";
    section.classList.remove("video-blur");
  });
});

// Back to top functionality
document.addEventListener("DOMContentLoaded", () => {
  const backToTop = document.querySelector(".back-to-top");
  const firstSection = document.querySelector(".main-container");

  document.addEventListener("scroll", () => {
    if (window.scrollY > firstSection.offsetHeight) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }
  });

  backToTop.addEventListener("click", (event) => {
    event.preventDefault();
    firstSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

// Success vides javascript
document.addEventListener("DOMContentLoaded", () => {
  const playButtons = document.querySelectorAll(".play-box i");
  const closeButton = document.querySelector(".close-video1");
  const videoBox = document.querySelector(".video-box1");
  const videoFrame = document.querySelector("#video-frame1");
  const section = document.querySelector("section");

  const videoSrcs = [
    "https://www.youtube.com/embed/LlCwHnp3kL4?si=GW_r4WD3RQpZBVgn",
    "https://www.youtube.com/embed/LlCwHnp3kL4?si=GW_r4WD3RQpZBVgn",
    "https://www.youtube.com/embed/LlCwHnp3kL4?si=GW_r4WD3RQpZBVgn",
  ];

  playButtons.forEach((button, index) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      videoFrame.src = videoSrcs[index];
      videoBox.style.display = "block";
      section.classList.add("video-blur");
    });
  });

  closeButton.addEventListener("click", (e) => {
    e.preventDefault();
    videoFrame.src = "";
    videoBox.style.display = "none";
    section.classList.remove("video-blur");
  });
});
