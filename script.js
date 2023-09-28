const slideTrack = document.getElementById('slideTrack');
const pagination = document.getElementById('pagination');
const totalItems = 9;
const itemsPerPage = 3;
const slidesToShow = 3;
let currentIndex = 0;

for (let i = 1; i <= totalItems; i++) {
  const slideItem = document.createElement('div');
  slideItem.classList.add('slide-item');

  const image = document.createElement('img');
  image.src = `images/image${i}.avif`;
  slideItem.appendChild(image);

  const textContainer = document.createElement('div');
  textContainer.classList.add('text-container');
  textContainer.innerHTML = `
    <p class="slide-text">Animated Cartoons Images  on Freepik.</p>
    <p class='description'>Description for <span class='imageName'>Image ${i}</span></p>
    <p class='imageFooter imageName'>Page ${i} | Animated Cartoons Images</p>
  `;
  slideItem.appendChild(textContainer);
  slideTrack.appendChild(slideItem);
}

const totalSlides = Math.ceil(totalItems / slidesToShow);
const dots = [];

for (let i = 1; i <= totalSlides; i++) {
  const dot = document.createElement('div');
  dot.classList.add('pagination-dot');
  dot.innerText = i;
  dot.addEventListener('click', () => goToSlide(i - 1));
  pagination.appendChild(dot);
  dots.push(dot);
}

dots[currentIndex].classList.add('active');

function updatePagination() {
  dots.forEach((dot, index) => {
    dot.classList.remove('active');
    if (index === currentIndex) {
      dot.classList.add('active');
    }
  });
}

function goToSlide(index) {
  currentIndex = index;
  const translateValue = -currentIndex * (930);
  slideTrack.style.transform = `translateX(${translateValue}px)`;
  updatePagination();
}

function nextSlide() {
  if (currentIndex < totalSlides - 1) {
    currentIndex++;
    goToSlide(currentIndex);
  } else {
    currentIndex = 0;
    goToSlide(currentIndex);
  }
}

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
    goToSlide(currentIndex);
  } else {
    currentIndex = totalSlides - 1;
    goToSlide(currentIndex);
  }
}

// Automatic slide
setInterval(() => {
  nextSlide();
}, 3000); 