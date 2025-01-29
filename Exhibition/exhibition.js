//Navbar animation
const navbar = document.querySelector('#navbar');

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    } else {
        navbar.style.backgroundColor = 'transparent';
    }
});

function showMore() {
    var moreExhibitions = document.getElementById("more-exhibitions");
    var showMoreButton = document.getElementById("show-more");
    
    if (moreExhibitions.style.display === "none") {
        moreExhibitions.style.display = "block";
        showMoreButton.textContent = "Show Less";
    } else {
        moreExhibitions.style.display = "none";
        showMoreButton.textContent = "Show More";
    }
}