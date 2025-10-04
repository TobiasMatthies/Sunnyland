class Enemy extends MovableObject {
    idleAnimation = [];
    animationSpeed = 500;

    constructor(idleAnimation, animationSpeed) {
        super();
        this.idleAnimation = idleAnimation;
        this.animationSpeed = animationSpeed;
        this.loadImages(this.idleAnimation);
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.idleAnimation)
        }, this.animationSpeed)
    }
}
