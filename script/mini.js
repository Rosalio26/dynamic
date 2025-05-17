
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


//========================SVG========================
function updatePath() {
    const box1El = document.getElementById('box1');
    const box2El = document.getElementById('box2');
    const pathEl = document.getElementById('path');

    if (!box1El || !box2El || !pathEl) return;

    const box1 = box1El.getBoundingClientRect();
    const box2 = box2El.getBoundingClientRect();

    const startX = box1.left + window.scrollX;
    const startY = box1.top + box1.height / 2 + window.scrollY;

    const endX = box2.left + window.scrollX;
    const endY = box2.top + box2.height / 2 + window.scrollY;

    const midX = (startX + endX) / 2;

    const path = `M${startX} ${startY} C${midX} ${startY}, ${midX} ${endY}, ${endX} ${endY}`;
    pathEl.setAttribute('d', path);
}

function makeDraggable(el) {
    if (!el) return;

    let isDragging = false;
    let offsetX, offsetY;

    el.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - el.offsetLeft;
        offsetY = e.clientY - el.offsetTop;
        el.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            el.style.left = `${e.clientX - offsetX}px`;
            el.style.top = `${e.clientY - offsetY}px`;
            updatePath();
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        el.style.cursor = 'grab';
    });
}

window.addEventListener('resize', updatePath);
window.addEventListener('scroll', updatePath);

window.addEventListener('DOMContentLoaded', () => {
    const box1 = document.getElementById('box1');
    const box2 = document.getElementById('box2');

    makeDraggable(box1);
    makeDraggable(box2);
    updatePath();
});