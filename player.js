var canvas = document.getElementById('canvas1');    // used for setting movement boundaries

export default class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.width = 50;
        this.height = 50;

        this.disabled = true; 

        this.direction = "null";       
        this.pressed = false;   
    } 

    draw(context) {   
        context.fillStyle = "yellow";
        context.fillRect(this.x, this.y, this.width, this.height);

        context.fillStyle = "black";
        
        context.font = "20px Times New Roman";  
        context.textAlign = "center";
        context.fillText("player", this.x + this.width / 2, this.y + this.height / 2);
    }

    update() {

        if (!this.disabled) {
            if (this.x + this.height < canvas.width) this.x += 2;
        }
    }
}