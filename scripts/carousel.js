// https://colorlib.com/preview/theme/seogo/

const buttonsWrapper = document.querySelector(".map");
const slides = document.querySelector(".inner");

buttonsWrapper.addEventListener("click", (e) => {
  if (e.target.nodeName === "BUTTON") {
    Array.from(buttonsWrapper.children).forEach((item) =>
      item.classList.remove("active")
    );
    if (e.target.classList.contains("first")) {
      slides.style.transform = "translateX(-0%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains("second")) {
      slides.style.transform = "translateX(-33.33333333333333%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains("third")) {
      slides.style.transform = "translatex(-66.6666666667%)";
      e.target.classList.add("active");
    }
  }
});

// https://colorlib.com/preview/theme/seogo/

const buttonsWrapper2 = document.querySelector(".map-2");
const slides2 = document.querySelector(".inner-2");

buttonsWrapper2.addEventListener("click", (e) => {
  if (e.target.nodeName === "BUTTON") {
    Array.from(buttonsWrapper2.children).forEach((item) =>
      item.classList.remove("active")
    );
    if (e.target.classList.contains("first")) {
      slides2.style.transform = "translateX(-0%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains("second")) {
      slides2.style.transform = "translateX(-33.33333333333333%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains("third")) {
      slides2.style.transform = "translatex(-66.6666666667%)";
      e.target.classList.add("active");
    }
  }
});

const buttonsWrapper3 = document.querySelector(".map-2");
const slides3 = document.querySelector(".inner-2");

buttonsWrapper3.addEventListener("click", (e) => {
  if (e.target.nodeName === "BUTTON") {
    Array.from(buttonsWrapper3.children).forEach((item) =>
      item.classList.remove("active")
    );
    if (e.target.classList.contains("first")) {
      slides3.style.transform = "translateX(-0%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains("second")) {
      slides3.style.transform = "translateX(-33.33333333333333%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains("third")) {
      slides3.style.transform = "translatex(-66.6666666667%)";
      e.target.classList.add("active");
    }
  }
});
