// so even though no "frames" shit is used here, still runs faster on mac.

var canvas = document.getElementById('canvas1');

import Player from "/player.js";
import InputHandler from "/inputHandler.js";

var canvas = document.getElementById('canvas1');
var cxt = canvas.getContext('2d');
cxt.fillStyle = "green";
cxt.fillRect(0, 0, canvas.width, canvas.height);

let player = new Player(canvas.width / 3, canvas.height / 2);
new InputHandler(player, canvas);

let lastTime = 0;

function animate(timestamp) {
    // what this:
    if (!lastTime) lastTime = timestamp;

    const deltaTime = (timestamp - lastTime) / 1000; // Convert to seconds
    lastTime = timestamp;
    
    cxt.clearRect(0, 0, canvas.width, canvas.height);
    cxt.fillStyle = "green"; 
    cxt.fillRect(0, 0, canvas.width, canvas.height);

    player.draw(cxt);
    player.update(deltaTime);

    // console.log(player.disabled);
    // console.log(deltaTime);

    window.requestAnimationFrame(animate);
}

// this automatically passes a "timestamp" arg to animate().
// what does timestamp look like? a floating point num (w/ tenths place).
// Precisely: num of milliseconds that've elapsed since page loaded.
window.requestAnimationFrame(animate);