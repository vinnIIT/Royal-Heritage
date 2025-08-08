 // Ensure DOM is loaded
    document.addEventListener("DOMContentLoaded", function () {
        const form = document.getElementById("feedbackForm");
        const thankYou = document.getElementById("thankYouMessage");

        form.addEventListener("submit", function (e) {
            e.preventDefault(); // Prevent actual form submission

            // Optional: Use mailto trigger
            // window.location.href = "mailto:sharmavineet2206@gmail.com?subject=Website Feedback";

            // Hide form and show thank you message
            form.style.display = "none";
            thankYou.style.display = "block";
        });
    });