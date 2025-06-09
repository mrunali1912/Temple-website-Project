// Simple carousel logic (optional)
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

function activateSlide(index) {
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
  // Logic to change image would go here if you have more than one
}

setInterval(() => {
  currentIndex = (currentIndex + 1) % dots.length;
  activateSlide(currentIndex);
}, 3000);
