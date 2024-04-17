document.addEventListener("DOMContentLoaded", function() {
    // Hide all images except the first one
    const images = document.querySelectorAll('.p-info');
    for (let i = 1; i < images.length; i++) {
        images[i].style.display = 'none';
    }
});

let currentImageIndex = 0;
const images = document.querySelectorAll('.p-info');

document.getElementById('prevBtn').addEventListener('click', () => {
    showImage(currentImageIndex - 1);
});

document.getElementById('nextBtn').addEventListener('click', () => {
    showImage(currentImageIndex + 1);
});

function showImage(index) {
    // Hide all images
    images.forEach(image => {
        image.style.display = 'none';
    });

    // Calculate current index considering wrapping
    currentImageIndex = (index + images.length) % images.length;

    // Display only the current image
    images[currentImageIndex].style.display = 'flex';
}
document.addEventListener("DOMContentLoaded", function() {
    const toggleBtn = document.querySelector('.toggle-btn');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    toggleBtn.addEventListener('click', function() {
        dropdownMenu.classList.toggle('show');
    });
});
