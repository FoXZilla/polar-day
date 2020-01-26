import * as Engine from 'short-night';

export default class AxisScale extends Engine.AxisScale {
    theme = 'polar-day';

    draw() {
        const ctx = this.canvas.getContext('2d')!;
        const box = this.drawInfo.box;

        ctx.beginPath();
        ctx.fillStyle = '#ff6600';
        ctx.fillRect(box.x, box.y, box.width, box.height);

        return super.draw();
    }
}
