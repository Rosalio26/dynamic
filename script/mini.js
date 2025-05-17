const btn = document.getElementById('toggleBtn');
const bloco = document.getElementById('meuBloco');
const closeBtn = bloco.querySelector('.btn-close');

btn.addEventListener('click', () => {
  if (bloco.style.display === 'none') {
    bloco.style.display = 'block';
    btn.style.display = 'none';
  } else {
    bloco.style.display = 'none';
    btn.style.display = 'block';
  }
});

closeBtn.addEventListener('click', () => {
  bloco.style.display = 'none';
  btn.style.display = 'block';
  });