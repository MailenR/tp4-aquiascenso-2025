let intro = document.querySelector('.intro');
let logoHeader = document.querySelector('.logo-header')

window.addEventListener('DOMContentLoaded', ()=>{
        
    setTimeout(()=>{

        setTimeout(()=>{
            intro.style.top= '-200vh';
        },4000)
    })
}); 

function App() {
  this.processingButton = function (event) {
    const btn = event.currentTarget;
    const carrusel = btn.closest('.carrusel');
    const track = carrusel.querySelector('#track');
    const slide = track.querySelector('.slide');
    const slideWidth = slide.offsetWidth + 20; // ancho + margen
    const visibleWidth = carrusel.querySelector('.carrusel-container').offsetWidth;
    const trackWidth = track.scrollWidth;

    let currentLeft = track.style.left === "" ? 0 : parseFloat(track.style.left) * -1;

    if (btn.dataset.button === "button-prev" && currentLeft > 0) {
      track.style.left = `${-1 * (currentLeft - slideWidth)}px`;
    }

    if (btn.dataset.button === "button-next" && (currentLeft + visibleWidth) < trackWidth) {
      track.style.left = `${-1 * (currentLeft + slideWidth)}px`;
    }
  };
}

window.onload = () => {
  window.app = new App();
};