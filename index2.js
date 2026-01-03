const icone = document.getElementById('coracao');

window.addEventListener('scroll', () => {
  if (window.scrollY > 4000) {
    icone.style.display = 'none';
  } else {
    icone.style.display = 'block';
  }
});