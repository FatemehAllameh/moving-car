const $ = document;
const car = $.querySelector(".car");
const carImg = $.querySelector(".car img");
const surface = $.querySelector(".surface");

let isMoving = false;
let lightOn = true;

const moveCar = () => {
  if (isMoving) {
    car.classList.remove("move");
    surface.style.animationPlayState = "paused";
    isMoving = false;
  } else {
    car.classList.add("move");
    surface.style.animationPlayState = "running";
    isMoving = true;
  }
};

const toggleLights = () => {
  if (lightOn) {
    carImg.setAttribute("src", "./images/Img_05.png");
    lightOn = false;
  } else {
    carImg.setAttribute("src", "./images/Img_06.png");
    lightOn = true;
  }
};

window.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    moveCar();
  } else if (e.code === "Space") {
    toggleLights();
  }
});
