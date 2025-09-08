const carouselHeight = document.querySelector(".slide-container").clientHeight;
const menuHeight = document.querySelector("header").clientHeight;
const scrollDistance = carouselHeight - menuHeight;
const target = document.querySelector("header.mainpage");
const className = "scrolled";

window.addEventListener("scroll", () => {
  if (window.scrollY >= scrollDistance) {
    target.classList.add(className);
  } else {
    target.classList.remove(className);
  }
});
