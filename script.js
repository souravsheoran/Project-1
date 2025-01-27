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

//Pop effect on images
const gallerImages = document.querySelectorAll('.image-container img');
const popup = document.getElementById('popup');
const popupImg = document.getElementById('popup-img');

gallerImages.forEach(image => {
    image.addEventListener('click', () => {
        popupImg.src = image.src;   
        popup.classList.add('active');
    });
});

popup.addEventListener('click', (event) => {
    if(event.target !== popupImg){
        popup.classList.remove('active');
    }
});