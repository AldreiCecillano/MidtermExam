document.addEventListener('DOMContentLoaded', function() {

    const navLinks = document.querySelectorAll('.navbar a');


    navLinks.forEach(function(navLink) {
        navLink.addEventListener('click', function(event) {
            event.preventDefault();


            console.log('Clicked:', navLink.id);

        });
    });
});
