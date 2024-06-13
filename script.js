var canvas = document.getElementById('canvas1');

import Player from "/player.js";
import InputHandler from "/inputHandler.js";

var canvas = document.getElementById('canvas1');
var cxt = canvas.getContext('2d');
cxt.fillStyle = "green";
cxt.fillRect(0, 0, canvas.width, canvas.height);

let player = new Player(canvas.width / 3, canvas.height / 2);
new InputHandler(player, canvas);

function handlePlayer() {
    player.draw(cxt);
    player.update();
}

function animate() {
    cxt.clearRect(0, 0, canvas.width, canvas.height);
    cxt.fillStyle = "green"; 
    cxt.fillRect(0, 0, canvas.width, canvas.height);

    handlePlayer();

    console.log(player.disabled);

    window.requestAnimationFrame(animate);
}
window.requestAnimationFrame(animate);