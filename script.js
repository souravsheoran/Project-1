//Navbar animation
const navbar = document.querySelector('#navbar');

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    } else {
        navbar.style.backgroundColor = 'transparent';
    }
});

//Image animation
const leftImage = document.getElementById("profile");
const rightImage = document.getElementById("name");

const fadeIn = (element, duration) => {
    let opacity = 0;
    element.style.opacity = opacity;
    element.style.transition = `opacity ${duration}ms ease`;

    const fadeInterval = setInterval(() => {
        opacity += 0.05;
        element.style.opacity = opacity;

        if (opacity >= 1) {
            clearInterval(fadeInterval);
        }
    }, duration / 20);
};

// Wait for the page to load
window.addEventListener('load', () => {
    fadeIn(leftImage, 500);
    fadeIn(rightImage, 500);
});


// Select the image and create modal dynamically
const img = document.getElementById('MP');
const modal = document.createElement('div');
const modalImg = document.createElement('img');

// Set up modal styles
modal.classList.add('modal');
document.body.appendChild(modal);

// Append image to modal
modal.appendChild(modalImg);

// Open modal with the clicked image
img.onclick = function() {
    modal.style.display = 'flex';  // Show modal
    modalImg.src = img.src;       // Set modal image to clicked image
};

// Close modal when clicked
modal.onclick = function() {
    modal.style.display = 'none';  // Hide modal
};

