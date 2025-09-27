class Game {
    level;
    keyboard;
    canvas;
    ctx;
    cameraX

    constructor(canvas, level, keyboard) {
        this.canvas = canvas;
        this.level = level;
        this.keyboard = keyboard;
        this.ctx = canvas.getContext("2d")
        this.drawObjects()
    }

    drawObjects() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.cameraX, 0);
        this.addObjectsToMap(this.level.backgroundObjects)
        this.addObjectsToMap(this.level.landscapeObjects)
        this.addToMap(this.level.character)

        this.ctx.translate(-this.cameraX, 0);

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
        if (o.otherDirection) {
            this.flipImage(o);
        }
        
        o.draw(this.ctx);

        if (o.otherDirection) {
            this.flipBack(o);
        }
    }

    flipImage(o) {
        this.ctx.save();
        this.ctx.translate(o.width, 0);
        this.ctx.scale(-1, 1);
        o.x = o.x * -1;
    }

    flipBack(o) {
        o.x = o.x * -1;
        this.ctx.restore();
    }

}
