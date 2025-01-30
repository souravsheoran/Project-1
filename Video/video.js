 //Navbar animation
const navbar = document.querySelector('#navbar');

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    } else {
        navbar.style.backgroundColor = 'transparent';
    }
});

 
  // Function to load and display the video player section
  function loadVideo(videoId, title, description, thumbnail) {
    // Hide the video gallery
    document.getElementById('video-gallery-section').style.display = 'none';
    
    // Show the video player section
    document.getElementById('video-player-section').style.display = 'block';
    
    // Set the iframe src with the YouTube embed link
    document.getElementById('videoFrame').src = `https://www.youtube.com/embed/${videoId}`;
    
    // Set the video title and description
    document.getElementById('videoTitle').innerText = title;
    document.getElementById('videoDescription').innerText = description;
}

// Function to go back to the gallery view
// Function to go back to the gallery view
function showGallery() {
    // Hide the video player section
    document.getElementById('video-player-section').style.display = 'none';
    
    // Show the video gallery
    document.getElementById('video-gallery-section').style.display = 'grid';
    
    // Stop the video by resetting the iframe src
    document.getElementById('videoFrame').src = '';
}
