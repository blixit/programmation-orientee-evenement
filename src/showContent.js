import startInfiniteLoop from './infiniteLoop.js';
import retrieveContent from './query.js';

async function showContent() {
  try {
    const content = await retrieveContent(); 
    console.log(content, "content 4")

    let elt = document.createElement('div');
    elt.innerHTML = content.join('<br />');

    document.getElementsByTagName('body')[0].appendChild(elt);
  } catch (e) {
    console.log('Error', e);
  }
}

showContent();
startInfiniteLoop();