window.onload = function () {
      const searchTerms = ["Jaipur", "Thar Desert", "Dal Bati", "Ghoomer"];
      const searchInput = document.getElementById("search-bar");
      let termIndex = 0;
      function rotateSearchText() {
        searchInput.setAttribute("placeholder", searchTerms[termIndex]);
        termIndex = (termIndex + 1) % searchTerms.length;
      }
      rotateSearchText();
      setInterval(rotateSearchText, 3000);
    };
    document.addEventListener("DOMContentLoaded", () => {
      const hamburger = document.getElementById("hamburger"); // Hamburger Functionality
      const nav = document.getElementById("nav");

      hamburger.addEventListener("click", () => {
        nav.classList.toggle("active");
      });
    });