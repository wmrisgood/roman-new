document.getElementById('hamburger').addEventListener('click', () => {
  document.querySelector('.dynamic').classList.toggle('hidden');
  document.querySelector('.bar1').classList.toggle('bar1-transform');
  document.querySelector('.bar2').classList.toggle('bar2-transform');
  document.querySelector('.bar3').classList.toggle('bar3-transform');
});
