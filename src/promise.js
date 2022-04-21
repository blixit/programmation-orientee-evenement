

function setupListeners () {
  function initPromise (resolve, reject) {
    // On appelle resolve(...) lorsque notre action asynchrone
    // a réussi et reject(...) lorsqu'elle a échoué.
    // Dans cet exemple, on utilise setTimeout(...) pour simuler
    // du code asynchrone. En situation réelle, on utiliserait
    // plutôt XHR ou une API Web asynchrone.

    setTimeout( function() {

      const loginInput = document.getElementById('login-input');
      if (loginInput.value == 'admin') {
        resolve("Succès !")  // Tout s'est bien passé !
      } else {
        reject(new Error("t'as pas les droits !!"))
      }

    }, 5000);
  }

  let maPremierePromesse = Promise.resolve(null); // new Promise(initPromise);
  
  function onSuccess (messageReussite) {
    // messageReussite correspond à ce qui a été passé à 
    // la fonction resolve(...) ci-avant.
    console.log("Youpi ! " + messageReussite)
    return 
  }

  function onError (error) {
    console.error('ERROR: ', error);
  }

  maPremierePromesse
    .then(onSuccess, onError)
    .catch(onError);
};


window.addEventListener('load', setupListeners);

// class Promise {
//   successListeners = [];

//   constructor(initPromise) {
//     // this.reject = ...;

//     initPromise(this.resolve, this.reject)
//   }

//   resolve(data) {
//     // chercher des listners et exécuter ces listeners
//   }

  // then(onfullfiled, onRejected) {
  //   try {
  //     this.successListeners.push(onfullfiled)
  //   } catch (error) {
  //     this.errorListeners[0](error)
      
  //   }
  // }

// }