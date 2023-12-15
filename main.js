const slider = document.getElementById('slider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const images = slider.getElementsByTagName('img');
let currentImageIndex = 0;


function showNextImage() {
  if (currentImageIndex < images.length - 1) {
    images[currentImageIndex].style.display = 'none';
    currentImageIndex++;
    images[currentImageIndex].style.display = 'block';
  }


  if (currentImageIndex === images.length - 1) {
    nextBtn.style.display = 'none';
  }


  prevBtn.style.display = 'block';
}

function showPrevImage() {
  if (currentImageIndex > 0) {
    images[currentImageIndex].style.display = 'none';
    currentImageIndex--;
    images[currentImageIndex].style.display = 'block';
  }


  if (currentImageIndex === 0) {
    prevBtn.style.display = 'none';
  }


  nextBtn.style.display = 'block';
}


prevBtn.addEventListener('click', showPrevImage);
nextBtn.addEventListener('click', showNextImage);