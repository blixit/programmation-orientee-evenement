export default function startInfiniteLoop() {
  const rootElement = document.getElementById('root');
  rootElement.addEventListener('click', function clickHandler () {
    let i = 0;
    while(i++ < 1E3) {
      console.log("YES");
    }
    console.log({i});
  });
}