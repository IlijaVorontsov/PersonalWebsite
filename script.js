// Get the element with the "about" name attribute
// Get all the links in the navbar
var navLinks = document.querySelectorAll('.navbar a');

// Add a click event listener to each link
navLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
        // Prevent the default link behavior
        event.preventDefault();

        // Get the target element
        var targetId = this.getAttribute('href');
        var targetElement = document.querySelector(targetId);

        // Scroll the page to the top of the target element
        window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
        });
    });
});