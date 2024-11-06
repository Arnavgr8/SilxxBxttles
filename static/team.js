document.addEventListener("DOMContentLoaded", () => {
    console.log("GSAP Version:", gsap.version); // Check if GSAP is loaded

    // Animate the team container on page load
    gsap.from(".team-container", {
        opacity: 0,
        y: 1000,
        scale: 0, // Zoom effect
        duration: 2, // Animation duration
        ease: "power3.out", // Smooth zoom easing
    });

    // Animate the About section on page load (new addition)
    gsap.from(".about", {
        opacity: 1,
        y: 1000, // Start slightly below the viewport
        duration: 2, // Animation duration
        scale: 2,
        ease: "power3.out", // Smooth easing for slide-in
    });
});

const teamMembers = document.querySelectorAll(".team-member");

// Iterate through each team member and add hover effect
teamMembers.forEach((member) => {
    // Mouse enter event - scale up, change color, and move up
    member.addEventListener("mouseenter", () => {
        gsap.to(member, {
            scale: 1.1, // Zoom-in effect
            y: -10, // Translate up
            backgroundColor: "#000", // Change color (tomato, or any color you prefer)
            duration: 1, // Duration of the animation
            ease: "power2.out", // Smooth transition
        });
    });

    // Mouse leave event - reset to original size, position, and color
    member.addEventListener("mouseleave", () => {
        gsap.to(member, {
            scale: 1, // Reset scale
            y: 0, // Reset vertical position
            backgroundColor: "", // Reset to the original background color
            duration: 1, // Duration of the return animation
            ease: "power2.in", // Smooth return easing
        });
    });
});

// Navigation Toggle
const nav = document.querySelector("nav");
const toggleButton = document.querySelector("#toggleButton");
const navMenu = document.querySelector(".menu");
const toggleButtonLine1 = document.querySelector("#toggleButtonLine1");
const toggleButtonLine2 = document.querySelector("#toggleButtonLine2");

let isToggled = false;
toggleButton.addEventListener("click", function () {
    isToggled = !isToggled; // Toggle state

    if (isToggled) {
        gsap.to(nav, {
            duration: 0.3,
            width: "25rem",
            height: "40rem",
            ease: "power2.inOut",
            borderRadius: "3rem",
        });
        gsap.to("nav button", {
            duration: 0.2,
            top: "1vh",
            right: "1vh",
            ease: "power2.inOut",
        });
        gsap.to(toggleButtonLine1, {
            duration: 0.2,
            rotate: 45,
            top: "50%",
            left: "50%",
            ease: "power2.inOut",
        });
        gsap.to(toggleButtonLine2, {
            duration: 0.2,
            rotate: -45,
            top: "50%",
            left: "50%",
            ease: "power2.inOut",
        });
        gsap.to(navMenu, {
            duration: 0.4,
            visibility: "visible",
            opacity: 1,
            ease: "power2.inOut",
        });
    } else {
        gsap.to(nav, {
            duration: 0.3,
            width: "5rem",
            height: "5rem",
            ease: "power2.inOut",
            borderRadius: "5rem",
        });
        gsap.to("nav button", {
            duration: 0.4,
            top: "0vh",
            right: "0vh",
            ease: "power2.inOut",
        });
        gsap.to(toggleButtonLine1, {
            duration: 0.2,
            rotate: 0,
            top: "42.5%",
            left: "50%",
            ease: "power2.inOut",
        });
        gsap.to(toggleButtonLine2, {
            duration: 0.2,
            rotate: 0,
            top: "57.5%",
            left: "50%",
            ease: "power2.inOut",
        });
        gsap.to(navMenu, {
            duration: 0.2,
            visibility: "hidden",
            opacity: 0,
            ease: "power2.inOut",
        });
    }
});

// Close the navigation if clicked outside
document.addEventListener("click", (event) => {
    const targetElement = event.target;

    if (isToggled && !nav.contains(targetElement) && !toggleButton.contains(targetElement)) {
        isToggled = false;
        gsap.to(nav, {
            duration: 0.3,
            width: "5rem",
            height: "5rem",
            ease: "power2.inOut",
            borderRadius: "5rem",
        });
        gsap.to("nav button", {
            duration: 0.4,
            top: "0vh",
            right: "0vh",
            ease: "power2.inOut",
        });
        gsap.to(toggleButtonLine1, {
            duration: 0.2,
            rotate: 0,
            top: "42.5%",
            left: "50%",
            ease: "power2.inOut",
        });
        gsap.to(toggleButtonLine2, {
            duration: 0.2,
            rotate: 0,
            top: "57.5%",
            left: "50%",
            ease: "power2.inOut",
        });
        gsap.to(navMenu, {
            duration: 0.2,
            visibility: "hidden",
            opacity: 0,
            ease: "power2.inOut",
        });
    }
});

// Custom cursor functionality
const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        left: e.pageX,
        top: e.pageY,
        duration: 0.3, // Smooth movement
        ease: "power2.out"
    });
});

// Change cursor color based on background brightness
function getBrightness(rgb) {
    return (0.299 * rgb[0]) + (0.587 * rgb[1]) + (0.114 * rgb[2]);
}

function changeCursorColor() {
    const bgColor = getComputedStyle(document.body).backgroundColor;
    const rgb = bgColor.match(/\d+/g);

    if (rgb) {
        const brightness = getBrightness(rgb.map(Number));
        gsap.to(cursor, {
            backgroundColor: brightness > 128 ? 'black' : 'white',
            duration: 0.3, // Smooth color transition
            ease: "power2.out"
        });
    }
}

// Function to show reddish effect on cursor click
function clickEffect() {
    gsap.to(cursor, {
        scale: 1.5, // Scale up
        backgroundColor: 'red', // Change to red
        duration: 0.2, // Duration
        ease: "power2.out", // Smooth easing
        onComplete: () => {
            // Return to original state after effect
            gsap.to(cursor, {
                scale: 1,
                backgroundColor: getComputedStyle(cursor).backgroundColor,
                duration: 0.3,
                ease: "power2.out"
            });
        }
    });
}

// Add event listeners
window.addEventListener('scroll', changeCursorColor);
window.addEventListener('resize', changeCursorColor);
document.body.addEventListener('mousemove', changeCursorColor); // For immediate response
document.body.addEventListener('click', clickEffect); // Click effect

// Initial color check
changeCursorColor();
