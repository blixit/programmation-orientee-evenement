/**
 * @throws {string} lève une exception en cas de ...
 */
async function setupListeners () {
  
  console.log('TIMER');
  
  setTimeout(() => {
    console.log('Timer 2');
  }, 0);
  
  setTimeout(() => {
    console.log('Timer 2.1');
  }, 0);
  
  // QUEUEING Micro tasks
  queueMicrotask(() => {
    console.log('task is queued');
  });

  console.log('TIMER 3')

}

window.addEventListener('load', setupListeners);
