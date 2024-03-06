const buttonsWrappers = document.querySelector(".map-hidden");
const slidess = document.querySelector(".inner-hidden");

buttonsWrappers.addEventListener("click", (e) => {
  if (e.target.nodeName === "BUTTON") {
    Array.from(buttonsWrappers.children).forEach((item) =>
      item.classList.remove("active")
    );
    if (e.target.classList.contains("first-2")) {
      slidess.style.transform = "translateX(-0%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains("second-2")) {
      slidess.style.transform = "translateX(-11.11111111111%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains("third-2")) {
      slidess.style.transform = "translatex(-22.22222222222%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains("fourth-2")) {
      slidess.style.transform = "translatex(-33.3333333%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains("fifth-2")) {
      slidess.style.transform = "translatex(-44.444444444%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains("sixth-2")) {
      slidess.style.transform = "translatex(-55.5555555%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains("seventh-2")) {
      slidess.style.transform = "translatex(-66.666666%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains("eigth-2")) {
      slidess.style.transform = "translatex(-77.7777777%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains("nineth-2")) {
      slidess.style.transform = "translatex(-88.888888%)";
      e.target.classList.add("active");
    }
  }
});

const buttonsWrappers2 = document.querySelector(".map-hidden-2");
const slidess2 = document.querySelector(".inner-hidden-2");

buttonsWrappers2.addEventListener("click", (e) => {
  if (e.target.nodeName === "BUTTON") {
    Array.from(buttonsWrappers2.children).forEach((item) =>
      item.classList.remove("active")
    );
    if (e.target.classList.contains("first-2")) {
      slidess2.style.transform = "translateX(-0%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains("second-2")) {
      slidess2.style.transform = "translateX(-11.11111111111%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains("third-2")) {
      slidess2.style.transform = "translatex(-22.22222222222%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains("fourth-2")) {
      slidess2.style.transform = "translatex(-33.3333333%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains("fifth-2")) {
      slidess2.style.transform = "translatex(-44.444444444%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains("sixth-2")) {
      slidess2.style.transform = "translatex(-55.5555555%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains("seventh-2")) {
      slidess2.style.transform = "translatex(-66.666666%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains("eigth-2")) {
      slidess2.style.transform = "translatex(-77.7777777%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains("nineth-2")) {
      slidess2.style.transform = "translatex(-88.888888%)";
      e.target.classList.add("active");
    }
  }
});

const buttonsWrappers3 = document.querySelector(".map-hidden-3");
const slidess3 = document.querySelector(".inner-hidden-3");

buttonsWrappers3.addEventListener("click", (e) => {
  if (e.target.nodeName === "BUTTON") {
    Array.from(buttonsWrappers3.children).forEach((item) =>
      item.classList.remove("active")
    );
    if (e.target.classList.contains("first-2")) {
      slidess3.style.transform = "translateX(-0%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains("second-2")) {
      slidess3.style.transform = "translateX(-11.11111111111%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains("third-2")) {
      slidess3.style.transform = "translatex(-22.22222222222%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains("fourth-2")) {
      slidess3.style.transform = "translatex(-33.3333333%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains("fifth-2")) {
      slidess3.style.transform = "translatex(-44.444444444%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains("sixth-2")) {
      slidess3.style.transform = "translatex(-55.5555555%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains("seventh-2")) {
      slidess3.style.transform = "translatex(-66.666666%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains("eigth-2")) {
      slidess3.style.transform = "translatex(-77.7777777%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains("nineth-2")) {
      slidess3.style.transform = "translatex(-88.888888%)";
      e.target.classList.add("active");
    }
  }
});
