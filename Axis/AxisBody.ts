import * as Engine from 'short-night';

export default class AxisBody extends Engine.AxisBody {
    theme = 'polar-day';

    draw() {
        const ctx = this.canvas.getContext('2d')!;
        const box = this.drawInfo.box;

        ctx.beginPath();
        ctx.fillStyle = '#000000';
        ctx.fillRect(box.x, box.y, box.width, box.height);

        return super.draw();
    }
}
