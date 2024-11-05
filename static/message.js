document.addEventListener("DOMContentLoaded", () => {
    gsap.from(".message-wrapper", {
        opacity: 0,
        y: 100,  // Start with slight downward shift
        duration: 2,  // Time for animation
        ease: "power2.out",  // Easing function for smooth effect
    });
});
