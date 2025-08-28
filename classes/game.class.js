class Game {
    level;
    keyboard;
    canvas;
    ctx;

    constructor(canvas, level, keyboard) {
        this.canvas = canvas;
        this.level = level;
        this.keyboard = keyboard;
        this.ctx = canvas.getContext("2d")
        this.drawObjects()
    }

    drawObjects() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.addObjectsToMap(this.level.backgroundObjects)
        this.addToMap(this.level.character)

        let self = this;
        requestAnimationFrame(function () {
            self.drawObjects();
        });
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(o) {
        o.draw(this.ctx);
    }
}
