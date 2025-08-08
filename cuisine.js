const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-bar nav ul");
hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});