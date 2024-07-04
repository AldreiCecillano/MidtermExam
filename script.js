document.addEventListener("DOMContentLoaded", function() {
    const navBar = document.querySelector(".nav-bar");
    navBar.addEventListener("click", function(event) {
        if (event.target.tagName === "A") {
            console.log(`You clicked on ${event.target.textContent}!`);
        }
    });
});
