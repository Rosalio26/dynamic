const btn = document.getElementById('toggleBtn');
const bloco = document.getElementById('meuBloco');

btn.addEventListener('click', () => {
  if (bloco.style.display === 'none') {
    bloco.style.display = 'block';
  } else {
    bloco.style.display = 'none';
  }
});
