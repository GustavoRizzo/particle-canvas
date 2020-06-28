export default class Paticle {
    private ctx;
    drawCtxWidthLimit: number;
    drawCtxHeightLimit: number;
    vPosition: any;
    absSpeed: number;
    directionAngle: number;
    vSpeed: any;
    radius: number;
    strColor: string;
    constructor(context: CanvasRenderingContext2D);
    draw(): void;
    update(): void;
    checkBoudaries(): void;
}
//# sourceMappingURL=index.d.ts.map