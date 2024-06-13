var canvas = document.getElementById('canvas1');    // used for setting movement boundaries

export default class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.width = 50;
        this.height = 50;

        this.disabled = true;  
    } 

    draw(context) {   
        context.fillStyle = "yellow";
        context.fillRect(this.x, this.y, this.width, this.height);

        context.fillStyle = "black";
        
        context.font = "20px Times New Roman";  
        context.textAlign = "center";
        context.fillText("player", this.x + this.width / 2, this.y + this.height / 2);
    }

    update(deltaTime) {
        if (!this.disabled) {
            if (this.x + this.height < canvas.width - 2) {
                this.x += 500 * deltaTime;    // new deltaTime shit being implemented.
            }
        }
    }

    // update() {
    //     if (!this.disabled) {
    //         if (this.x + this.height < canvas.width) {
    //             this.x += 2;
    //         }
    //     }
    // }
    
}