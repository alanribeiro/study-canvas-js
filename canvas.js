const canvasElement = document.querySelector("canvas");
const canvasContext = canvasElement.getContext("2d");
const characterSpriteImage = new Image();
characterSpriteImage.src = "sprite.png";

const character = new Sprite(characterSpriteImage);

window.addEventListener("keydown", keyPressHandler, false);

function keyPressHandler(event) {
    const keyMapFunctions = {
        39: () => character.moveRight(canvasElement.width),
        37: () => character.moveLeft(canvasElement.width),
        38: () => character.moveUp(canvasElement.height),
        40: () => character.moveDown(canvasElement.height)
    }

    if (keyMapFunctions[event.keyCode] !== undefined) {
        character.animate();
        return keyMapFunctions[event.keyCode]();
    }
    else return;
}

characterSpriteImage.onload = function() {
    loop();
}

function display() {
    canvasContext.clearRect(0, 0, canvasElement.width, canvasElement.height);
    character.draw(canvasContext);
}

function loop() {
    window.requestAnimationFrame(loop, canvasElement);
    display();
}
