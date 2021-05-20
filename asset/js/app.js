// slecting element
const burgerMenu = document.querySelector(".header__hambuger");

const closeMenu = document.querySelector(".header__close");

const headerOverlayContainer = document.querySelector(
  ".header__overlay__container"
);
const headerContainer = document.querySelector(".header__container");

const body = document.querySelector("body");

const mobileNavLinks = document.querySelectorAll(".mobile__nav__links");

// add & remove function

function remove() {
  headerOverlayContainer.classList.remove("show");
  headerContainer.classList.remove("hidden");
  body.classList.remove("overflow__hidden");
}

function add() {
  headerOverlayContainer.classList.add("show");
  headerContainer.classList.add("hidden");
  body.classList.add("overflow__hidden");
}

// Listenting events

burgerMenu.addEventListener("click", add);
closeMenu.addEventListener("click", remove);

mobileNavLinks.forEach((link) => {
  link.addEventListener("click", remove);
});
