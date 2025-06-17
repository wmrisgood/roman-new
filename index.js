document.getElementById('hamburger').addEventListener('click', () => {
  document.querySelector('.dynamic').classList.toggle('hidden');
  document.querySelector('.bar1').classList.toggle('bar1-transform');
  document.querySelector('.bar2').classList.toggle('bar2-transform');
  document.querySelector('.bar3').classList.toggle('bar3-transform');
});

let carouselIndex = 0;
let carouselImages = [
  'images/hof-1.png', 'images/hof-2.png', 'images/hof-3.png', 'images/hof-4.png'
];
let len = carouselImages.length

document.getElementById('btn-left').addEventListener('click', () => {
  carouselIndex += len - 1;
  document.getElementById('carousel-image').src =
      carouselImages[carouselIndex % len];
});

document.getElementById('btn-right').addEventListener('click', () => {
  carouselIndex += 1;
  document.getElementById('carousel-image').src =
      carouselImages[carouselIndex % len];
});
