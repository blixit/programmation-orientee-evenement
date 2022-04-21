
let elapsedTime = 0;
function formatTime(time) {
  
  return `${Math.round(time / 60)}:${time % 60}`;
}

function setupListeners () {

  // code asynchrone utilisant setTimeout...
  const callback = () => {
    console.log('Temps de chargement écoulé');
    // envoi de données au serveur
    const newTime = elapsedTime++;
    rootElement.innerHTML = formatTime(newTime);
  }
  const timer = setInterval(callback, 1000);

  const rootElement = document.getElementById('root');
  const cancelButton = document.getElementById('cancel');
  cancelButton.addEventListener('click', (_clickEvent) => {
    clearInterval(timer);
  })
};


window.addEventListener('load', setupListeners);
