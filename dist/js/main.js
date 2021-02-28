const footerYear = document.getElementById('year'),
  carousel = document.getElementById('myCarousel');

// Carousel interval
carousel.setInterval({
  interval: 6000,
  pause: 'hover'
})

// Footer year
footerYear.innerText = new Date().getFullYear()
