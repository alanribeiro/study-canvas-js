function Sprite(image) {
    this.image = image;
    this.sourceX = 0;
    this.sourceY = 0;
    this.width = 460;
    this.height = 590;
    this.positionX = 0;
    this.positionY = 0 ;
    this.speedMove = 5;
    this.countAnimation = 0;

    this.draw = function(canvasContext) {
        canvasContext.drawImage(
            this.image, 
            this.sourceX, 
            this.sourceY, 
            this.width, 
            this.height, 
            this.positionX, 
            this.positionY, 
            50, 
            70
        );
    }

    this.moveLeft = function(canvasWidth) {
        if (this.positionX > 0) {
            this.positionX -= this.speedMove;
        }
        this.sourceY = this.height * 2;
    }

    this.moveRight = function(canvasWidth) {
        if (this.positionX < (canvasWidth - 50)) {
            this.positionX += this.speedMove;
        }
        this.sourceY = this.height;
    }

    this.moveUp = function(canvasHeight) {
        if (this.positionY > 0) {
            this.positionY -= this.speedMove;
        }
        this.sourceY = this.height * 3;
    }

    this.moveDown = function(canvasHeight) {
        if (this.positionY < (canvasHeight - 70)) {
            this.positionY += this.speedMove;
        }
        this.sourceY = 0;
    }  

    this.animate = function() {
        this.countAnimation++;
        if (this.countAnimation === 20) {
            this.countAnimation = 0;
        }
        this.sourceX = Math.floor(this.countAnimation / 5) * this.width;

    }
}