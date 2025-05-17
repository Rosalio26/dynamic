
//==============================================================
//========================
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


//========================SCROLL========================
const scrollBox = document.getElementById('scrollBox');
    const scrollContent = document.getElementById('scrollContent');

    let isScrolling = true;

    scrollBox.addEventListener('click', () => {
      if (isScrolling) {
        scrollContent.style.animationPlayState = 'paused';
        scrollBox.classList.add('scroll-manual');
      } else {
        scrollContent.style.animationPlayState = 'running';
        scrollBox.classList.remove('scroll-manual');
      }
      isScrolling = !isScrolling;
    });