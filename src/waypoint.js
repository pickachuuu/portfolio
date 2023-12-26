
document.addEventListener("DOMContentLoaded", function() {
    var animatedElement = document.querySelector('.animated-element');

    // Use Waypoints to trigger the animation when the element enters the viewport
    new Waypoint({
        element: animatedElement,
        handler: function() {
            animatedElement.classList.add('animate__animated', 'animate__fadeIn'); // Example: fadeIn
        },
        offset: '50%', // Adjust the offset as needed
    });
});
