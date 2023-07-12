import Renderer from "./renderer.js";

//new Renderer with scale of 10
const renderer = new Renderer(5);

let loop;
let fps = 60,
  fpsInterval,
  startTime,
  now,
  then,
  elapsed;

function init() {
  fpsInterval = 1000 / fps;
  then = Date.now();
  startTime = then;

  renderer.testRender();
  renderer.render();

  loop = requestAnimationFrame(step);
}

function step() {
  now = Date.now();
  elapsed = now - then;

  if (elapsed > fpsInterval) {
    //come back later
  }

  loop = requestAnimationFrame(step);
}

init();
