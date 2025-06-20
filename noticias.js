function App() {
    const self = this;

    this.processingButton = function(event) {
        const btn = event.currentTarget;
        const carruselList = btn.parentNode;
        const track = carruselList.querySelector('#track');

        const carriles = track.querySelectorAll('.slide');
        const carruselWidth = carriles[0].offsetWidth;
        const trackWidth = track.scrollWidth;
        const listWidth = carruselList.offsetWidth;

        let leftPosition = track.style.left === "" ? 0 : parseFloat(track.style.left.slice(0, -2)) * -1;

        if (btn.dataset.button === "button-prev") {
            prevAction(leftPosition, carruselWidth, track);
        } else {
            nextAction(leftPosition, trackWidth, listWidth, carruselWidth, track);
        }
    };

    let prevAction = (leftPosition, carruselWidth, track) => {
        if (leftPosition > 0) {
            track.style.left = `${-1 * (leftPosition - carruselWidth)}px`;
        }
    };

    let nextAction = (leftPosition, trackWidth, listWidth, carruselWidth, track) => {
        if (leftPosition + listWidth < trackWidth) {
            track.style.left = `${-1 * (leftPosition + carruselWidth)}px`;
        }
    };
}

console.log('noticias.js cargado');

window.onload = function () {
  console.log('window.onload ejecutado');
  const app = new App();
  window.app = app;
  
  const buttons = document.querySelectorAll('.carrusel-arrow');
  console.log(`${buttons.length} botones encontrados`);
  buttons.forEach(btn => {
    btn.addEventListener('click', app.processingButton);
  });
};