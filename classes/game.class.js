class Game {
    level = new Level();
    canvas;
    ctx;

    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d")
        this.drawObjects()
    }

    drawObjects() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.level.backgroundObjects[0].draw(this.ctx)

        let self = this;
        requestAnimationFrame(function () {
            self.drawObjects();
        });
    }
}