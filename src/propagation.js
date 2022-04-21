

function setupListeners () {
  // ROOT
  var root = document.getElementById('root');
  function onRootClick(clickEvent) {
    console.log('clic sur root', clickEvent)
  }
  root.addEventListener('click', onRootClick);

  // CHILDREN
  var children = document.getElementById('children');
  function onChildrenClick(clickEvent) {
    console.log('clic sur children', clickEvent);
    clickEvent.stopPropagation();
  }
  children.addEventListener('click', onChildrenClick);

  // LINK
  var linkMdn = document.getElementById('lien-MDN');
  function onMdnLinkClick(clickEvent) {
    clickEvent.preventDefault();
    console.log('clic sur mdn', clickEvent);
  }
  linkMdn.addEventListener('click', onMdnLinkClick);

  // Connectin FORM
  var connectinoForm = document.getElementById('connection-form');
  function onConnectionFormSubmit(submitEvent) {
    submitEvent.preventDefault();
    console.log('envoie du formulaire', submitEvent);
  }
  connectinoForm.addEventListener('click', onConnectionFormSubmit);
};


window.addEventListener('load', setupListeners);
