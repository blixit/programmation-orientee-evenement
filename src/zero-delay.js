(function() {

  console.log('ceci est le début');

  setTimeout(function cb() {
    console.log('Callback 1: ceci est un msg depuis le callback');
  }); // has a default time value of 0

  console.log('ceci est juste un message');

  setTimeout(function cb1() {
    console.log('Callback 2: ceci est un msg depuis le callback');
  }, 0);

  console.log('ceci est la fin');

})();

// "ceci est le début"
// "ceci est juste un message"
// "ceci est la fin"
// "Callback 1: ceci est un msg depuis le callback"
// "Callback 2: ceci est un msg depuis le callback"
