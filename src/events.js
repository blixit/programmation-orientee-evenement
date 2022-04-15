

function setupListeners (loadEvent) {
  // informer l'utilisateur que la page est chargée
  console.log('Ma page est chargée', loadEvent);

  // abonnement à 'mouseover' sur root
  // function onMouseover (mouseoverEvent) {
  //   console.log(this);
  //   console.log('MON EVENT est bien parvenu', mouseoverEvent);
  // }  
  // var root = document.getElementById('root');
  // root.addEventListener('mouseover', onMouseover);
  
  // 1. abonnement au 'clic' sur root 
  // 2. suppression de l'abonnement à 'mouseover' sur root
  function onClick(clickEvent) {
    console.log('SUPPRESSION de mouseover sur root', clickEvent)
    // root.removeEventListener('mouseover', onMouseover);

    // setTimeout(() => {
    //   root.addEventListener('mouseover', XXXXXx);
    // }, 3000)
  }
  root.addEventListener('click', onClick);

  var lastnameInput = document.getElementById('lastname');
  console.log({lastnameInput});
  function onLastnameChange(changeEvent) {
    console.log(`LA valeur saisie est: ${changeEvent.target.value}`);
  }
  lastnameInput.addEventListener('change', onLastnameChange);
  
};

window.addEventListener('load', setupListeners);
