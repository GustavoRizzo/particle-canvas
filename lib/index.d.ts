export default class Paticle {
    private ctx;
    drawCtxWidthLimit: number;
    drawCtxHeightLimit: number;
    vPosition: any;
    directionAngle: number;
    vSpeed: any;
    strColor: string;
    radius: number;
    constructor(context: CanvasRenderingContext2D);
    draw(): void;
    update(): void;
    checkBoudaries(): void;
}
//# sourceMappingURL=index.d.ts.map