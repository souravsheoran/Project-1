//Navbar animation
const navbar = document.querySelector('#navbar');

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  } else {
    navbar.style.backgroundColor = 'transparent';
  }
});