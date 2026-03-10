const slider = document.getElementById('slider');
const totalSlides = 38; // Change this number if you add more slides later

// 1. GENERATE THE SLIDES
for (let i = 1; i <= totalSlides; i++) {
  const slideDiv = document.createElement('div');
  slideDiv.classList.add('slide');
  
  // Make the first slide active by default
  if (i === 1) slideDiv.classList.add('active');

  const img = document.createElement('img');
  img.src = `myslide/Slide${i}.PNG`; // Matches "Slide1.PNG", "Slide2.PNG", etc.
  img.alt = `Slide ${i}`;

  slideDiv.appendChild(img);
  slider.appendChild(slideDiv);
}

// 2. THE NAVIGATION LOGIC (Same as before, but defined AFTER slides are created)
const slides = document.querySelectorAll('.slide');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
let currentIndex = 0;

function showSlide(index) {
  slides[currentIndex].classList.remove('active');
  
  if (index >= slides.length) {
    // currentIndex = 0;
  } else if (index < 0) {
    // currentIndex = slides.length - 1;
  } else {
    currentIndex = index;
  }
  
  slides[currentIndex].classList.add('active');
}

nextBtn.addEventListener('click', () => showSlide(currentIndex + 1));
prevBtn.addEventListener('click', () => showSlide(currentIndex - 1));

// 3. BONUS: ADD KEYBOARD SUPPORT
document.addEventListener('keydown', (e) => {
  if (e.key === "ArrowRight") showSlide(currentIndex + 1);
  if (e.key === "ArrowLeft") showSlide(currentIndex - 1);
});