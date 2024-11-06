document.addEventListener("DOMContentLoaded", () => {
    gsap.from(".message-wrapper", {
        opacity: 0,
        y: 100,  // Start with slight downward shift
        duration: 2,  // Time for animation
        ease: "power2.out",  // Easing function for smooth effect
    });
});


const nav = document.querySelector("nav");
const toggleButton = document.querySelector("#toggleButton");
const navMenu = document.querySelector(".menu");
const toggleButtonLine1 = document.querySelector("#toggleButtonLine1");
const toggleButtonLine2 = document.querySelector("#toggleButtonLine2");



console.log(toggleButtonLine1);
let isToggled = false;
toggleButton.addEventListener("click", function () {
  // open the nav
  if (isToggled === false) {
    isToggled = true;
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
      rotate: 45,
      ease: "power2.inOut",
    });
    gsap.to(toggleButtonLine2, {
      duration: 0.2,
      top: "50%",
      left: "50%",
      rotate: -45,
      ease: "power2.inOut",
    });
    gsap.to(navMenu, {
      duration: 0.4,
      visibility: "visible",
      opacity: 1,
      ease: "power2.inOut",
    });

    // close the nav
  } else {
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
      rotate: 0,
      ease: "power2.inOut",
    });
    gsap.to(toggleButtonLine2, {
      duration: 0.2,
      rotate: 0,
      top: "57.5%",
      left: "50%",
      rotate: 0,
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

document.addEventListener("click", (event) => {
  const targetElement = event.target; // Get the element that was clicked

  // Check if the click is outside the navigation
  if (isToggled && !nav.contains(targetElement) && !toggleButton.contains(targetElement)) {
      // Close the navigation
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


const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        left: e.pageX,
        top: e.pageY,
        duration: 0.3, // Smooth movement
        ease: "power2.out" // Easing function
    });
});

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
            ease: "power2.out" // Easing function
        });
    }
}

// Function to show reddish effect on click
function clickEffect() {
    gsap.to(cursor, {
        scale: 1.5, // Scale up
        backgroundColor: 'red', // Change to red
        duration: 0.2, // Duration of the effect
        ease: "power2.out", // Easing function
        onComplete: () => {
            // Return to original size and color after effect
            gsap.to(cursor, {
                opacity: 1,
                scale: 1, // Scale back
                duration: 0.3, // Duration to return
                backgroundColor: getComputedStyle(cursor).backgroundColor, // Reset to original color
                opacity: 0.5,
                color: 'red',
                ease: "power2.out" // Easing function
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
