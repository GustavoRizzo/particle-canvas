export default class Particle {

    private ctx : CanvasRenderingContext2D;
    public drawCtxWidthLimit : number;
    public drawCtxHeightLimit : number;
    public vPosition : any;    
    public directionAngle : number = Math.floor(Math.random() * 360);
    public vSpeed : any;    
    public strColor: string;
    public radius : number;
    public absSpeed : number;

    constructor(context : CanvasRenderingContext2D) {
        this.ctx = context;

        //const
        this.absSpeed = 1;
        this.radius = 1;
        this.strColor = '#FFF';


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

    static linkParticles(particle: Particle , othersParticle  : Array<Particle> , contexto: CanvasRenderingContext2D) {
        const distMin = 100;
        for (const p of othersParticle) {
            const distancia = Math.hypot( (p.vPosition.x - particle.vPosition.x) , (p.vPosition.y - particle.vPosition.y) );
            if (distancia< distMin)
            {
                const opacity = 1 - distancia/distMin;
                contexto.lineWidth = 1;
                contexto.strokeStyle = `rgba(255,255,255,${opacity})`;
                contexto.beginPath();
                contexto.moveTo(particle.vPosition.x, particle.vPosition.y);
                contexto.lineTo(p.vPosition.x, p.vPosition.y);
                contexto.stroke();
            }
        }
    }

}