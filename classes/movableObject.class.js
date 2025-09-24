class MovableObject extends DrawableObject {
    speedY = 0;
    acceleration = 0.7;
    otherDirection = false

    constructor(img, x, y, height, width) {
        super(img, x, y, height, width)
        this.applyGravity()
    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    showImage(image) {
        this.img = this.imageCache[image]
    }

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
            else {
                this.speedY = 0
                this.y = 300
            }
        }, 1000 / 60);
    }

    isAboveGround() {
        if (this instanceof Character) {
            return this.y < 300;
        }
    }
}
