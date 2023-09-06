// JavaScript to handle box slider functionality
const sliderContainer = document.querySelector('.slider-container');
const boxes = document.querySelectorAll('.box');
const prevArrow = document.querySelector('.prev-arrow');
const nextArrow = document.querySelector('.next-arrow');
const indicatorContainer = document.querySelector('.indicator-container');

let currentIndex = 0;

// Create indicator circles based on the number of boxes
boxes.forEach((box, index) => {
  const indicatorCircle = document.createElement('div');
  indicatorCircle.classList.add('indicator-circle');
  if (index === 0) {
    indicatorCircle.classList.add('active');
  }
  indicatorCircle.addEventListener('click', () => {
    goToBox(index);
  });
  indicatorContainer.appendChild(indicatorCircle);
});

// Update the slider container's transform property to move to the current box
function updateSlider() {
  const boxWidth = boxes[currentIndex].offsetWidth + 60; // Width of box + gap
  sliderContainer.style.transition = 'transform 1.5s ease'; // Add transition property
  sliderContainer.style.transform = `translateX(-${currentIndex * boxWidth}px)`;
  boxes.forEach((box, index) => {
    if (index === currentIndex) {
      box.style.transition = 'width 0.9s ease, height 0.9s ease, margin-top 0.9s ease';
      box.style.width = '300px'; // Width of the selected box
      box.style.height = '300px'; // Height of the selected box
      // Add transition property for margin-top
      box.style.marginTop = '5px';

      // box.style.display = 'block';
    } else {
      box.style.transition = 'width 0.9s ease, height 0.9s ease, margin-top 0.9s ease';
      box.style.width = '200px'; // Width of other boxes
      box.style.height = '200px'; // Height of other boxes
       // Add transition property for margin-top
      box.style.marginTop = '50px';
      // box.style.display = 'none';
    }
  });
  updateIndicator();
}

// Update the active indicator circle
function updateIndicator() {
  const indicatorCircles = document.querySelectorAll('.indicator-circle');
  indicatorCircles.forEach((circle, index) => {
    if (index === currentIndex) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });
}

// Go to a specific box by index
function goToBox(index) {
  if (index >= 0 && index < boxes.length) {
    currentIndex = index;
    updateSlider();
  }
}

// Event listeners for navigation arrows
prevArrow.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
  else{
    currentIndex = boxes.length - 1;
    updateSlider();
  }
});

nextArrow.addEventListener('click', () => {
  if (currentIndex < boxes.length - 1) {
    currentIndex++;
    updateSlider();
  }
  else{
    currentIndex = 0;
    updateSlider();
  }
});

// Initialize the slider
updateSlider();

// Add this variable to keep track of the timer
let autoSliderInterval;

// Function to start the automatic slider
function startAutoSlider() {
  autoSliderInterval = setInterval(() => {
    if (currentIndex < boxes.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateSlider();
  }, 2500); // Change box every 2.5 seconds
}
startAutoSlider();
