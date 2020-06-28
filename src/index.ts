export default class Paticle {

    private ctx : CanvasRenderingContext2D;
    public drawCtxWidthLimit : number;
    public drawCtxHeightLimit : number;
    public vPosition : any;
    public absSpeed : number = 1;
    public directionAngle : number = Math.floor(Math.random() * 360);
    public vSpeed : any;
    public radius :number = 1;
    public strColor: string = '#FFF'

    constructor(context : CanvasRenderingContext2D) {
        this.ctx = context;

        this.drawCtxWidthLimit = this.ctx.canvas.clientWidth;
        this.drawCtxHeightLimit = this.ctx.canvas.clientHeight;
        
        this.vPosition = {
            x: Math.random() * this.drawCtxWidthLimit,
            y: Math.random() * this.drawCtxHeightLimit
        };

        this.vSpeed = {
            x: (Math.cos(this.directionAngle) * this.absSpeed),
            y: (Math.sin(this.directionAngle) * this.absSpeed)
        }        
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc( this.vPosition.x, this.vPosition.y, this.radius, 0, Math.PI*2);
        this.ctx.closePath();
        this.ctx.fillStyle = this.strColor;
        this.ctx.fill();

        this.update();
    }

    update() {
        this.checkBoudaries();
        this.vPosition.x += this.vSpeed.x; 
        this.vPosition.y += this.vSpeed.y; 
    }

    checkBoudaries() {
        if ( this.vPosition.x < 0 || this.vPosition.x > this.drawCtxWidthLimit ) {
            this.vSpeed.x *= -1;
        }

        if ( this.vPosition.y < 0 || this.vPosition.y > this.drawCtxHeightLimit ) {
            this.vSpeed.y *= -1;
        }
    }

}