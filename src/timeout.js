

function setupListeners () {

  // code asynchrone utilisant setTimeout...
  const callback = () => {
    console.log('Temps de chargement écoulé');
    // envoi de données au serveur
  }
  const timer = setTimeout(callback);

  const cancelButton = document.getElementById('cancel');
  cancelButton.addEventListener('click', (_clickEvent) => {
    clearTimeout(timer);
  })
};


window.addEventListener('load', setupListeners);
