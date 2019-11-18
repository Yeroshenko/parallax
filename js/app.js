document.addEventListener("DOMContentLoaded", (e) => {

  let layer = document.querySelectorAll('.section-layer');

  function parallax(e) {
    layer.forEach(layer => {
      let speed = layer.getAttribute('data-speed');

      layer.style.transform = `translate(${e.clientX*speed/1000}px, ${e.clientY*speed/1000}px )`;
    });
  }

  document.addEventListener('mousemove', parallax);
});