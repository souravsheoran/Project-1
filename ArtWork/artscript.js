//Navbar animation
const navbar = document.querySelector('#navbar');

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  } else {
    navbar.style.backgroundColor = 'transparent';
  }
});

const galleryImages = document.querySelectorAll('.gallery img');
const popup = document.getElementById('popup');
const popupImg = document.getElementById('popup-img');

galleryImages.forEach(image => {
  image.addEventListener('click', () => {
    popupImg.src = image.src;
    popup.classList.add('active'); // Adds the active class to show the popup
  });
});

popup.addEventListener('click', (event) => {
  if (event.target !== popupImg) {
    popup.classList.remove('active'); // Removes the active class to hide the popup
  }
});