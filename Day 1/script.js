const panels = document.querySelectorAll('.panel');

panels.forEach((panel, index) => {
  panel.addEventListener('click', () => {
    removeActiveClass();
    panel.classList.add('active');
    
    
    if (index === 1) {
      panels[panels.length - 1].classList.add('active');
    }
  });
});

function removeActiveClass() {
  panels.forEach(panel => {
    panel.classList.remove('active');
  });
}