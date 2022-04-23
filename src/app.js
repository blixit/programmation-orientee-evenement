
/**
 * @throws {string} lève une exception en cas de ...
 */
async function setupListeners () {

  // OPTIMISING A LOOP with setTimeout
  let i = 0;

  let start = Date.now();

  function count() {

    // do a piece of the heavy job (*)
    do {
      i++;
    } while (i % 1e6 != 0);

    if (i == 1e12) {
      alert("Done in " + (Date.now() - start) + 'ms');
    } else {
      console.log("PAUSE")
      setTimeout(count); // schedule the new call (**)
    }

  }

  count(); 
}

window.addEventListener('load', setupListeners);
