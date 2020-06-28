"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Paticle = /** @class */ (function () {
    //public absSpeed : number;
    function Paticle(context) {
        this.directionAngle = Math.floor(Math.random() * 360);
        this.ctx = context;
        //const
        //this.absSpeed = 1;
        this.radius = 1;
        this.strColor = '#FFF';
        this.drawCtxWidthLimit = this.ctx.canvas.clientWidth;
        this.drawCtxHeightLimit = this.ctx.canvas.clientHeight;
        this.vPosition = {
            x: Math.random() * this.drawCtxWidthLimit,
            y: Math.random() * this.drawCtxHeightLimit
        };
        this.vSpeed = {
            x: (Math.cos(this.directionAngle) * 1),
            y: (Math.sin(this.directionAngle) * 1) //this.absSpeed)
        };
    }
    Paticle.prototype.draw = function () {
        this.ctx.beginPath();
        this.ctx.arc(this.vPosition.x, this.vPosition.y, this.radius, 0, Math.PI * 2);
        this.ctx.closePath();
        this.ctx.fillStyle = this.strColor;
        this.ctx.fill();
        this.update();
    };
    Paticle.prototype.update = function () {
        this.checkBoudaries();
        this.vPosition.x += this.vSpeed.x;
        this.vPosition.y += this.vSpeed.y;
    };
    Paticle.prototype.checkBoudaries = function () {
        if (this.vPosition.x < 0 || this.vPosition.x > this.drawCtxWidthLimit) {
            this.vSpeed.x *= -1;
        }
        if (this.vPosition.y < 0 || this.vPosition.y > this.drawCtxHeightLimit) {
            this.vSpeed.y *= -1;
        }
    };
    return Paticle;
}());
exports.default = Paticle;
//# sourceMappingURL=index.js.map