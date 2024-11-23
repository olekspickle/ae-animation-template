var svgContainer = document.getElementById('bm');
var animItem = bodymovin.loadAnimation({
  container: svgContainer,
  animType: 'svg',
  loop: true,
  autoplay: true,
  path: 'ball.json'
});

// lottie.loadAnimation({
//   container: element, // the dom element that will contain the animation
//   renderer: 'svg',
//   loop: true,
//   autoplay: true,
//   path: 'ball.json' // the path to the animation json
// });