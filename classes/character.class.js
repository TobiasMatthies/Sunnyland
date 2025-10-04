class Character extends MovableObject {
    animations = {
        images_idle: [
            "../assets/character/idle_1@4x.png",
            "../assets/character/idle_2@4X.png",
            "../assets/character/idle_3@4X.png",
            "../assets/character/idle_4@4X.png",
        ],

        images_run: [
            "../assets/character/run_1@4X.png",
            "../assets/character/run_2@4X.png",
            "../assets/character/run_3@4X.png",
            "../assets/character/run_4@4X.png",
            "../assets/character/run_5@4X.png",
            "../assets/character/run_6@4X.png",
        ],

        images_jump: [
            "../assets/character/jump_2@4X.png",
            "../assets/character/jump_3@4X.png",
        ],

        images_hurt: [
            "../assets/character/hurt_1@4X.png",
            "../assets/character/hurt_2@4X.png",
            "../assets/character/hurt_3@4X.png",
            "../assets/character/hurt_4@4X.png",
            "../assets/character/hurt_5@4X.png",
            "../assets/character/hurt_6@4X.png",
            "../assets/character/hurt_7@4X.png",
            "../assets/character/hurt_8@4X.png",
            "../assets/character/hurt_9@4X.png",
            "../assets/character/hurt_10@4X.png",
        ]
    }

    speedX = 4;

    constructor(x, y, height, width) {
        super("../assets/character/idle_1@4X.png", x, y, height, width)
        for (const animation in this.animations) {
            this.loadImages(this.animations[animation])
        }
        this.animate();
        this.move();
    }

    animate() {
        setInterval(() => {
            if ((game.keyboard.keys.ArrowRight || game.keyboard.keys.ArrowLeft) && !this.isAboveGround()) {
                this.playAnimation(this.animations["images_run"])
                this.x += this.speedX;
            }
        }, 100)

        setInterval(() => {
            if (!game.keyboard.keys.ArrowRight && !game.keyboard.keys.ArrowLeft && !this.isAboveGround()) {
                this.playAnimation(this.animations["images_idle"])
            }
        }, 150)
        setInterval(() => {
            if (this.isAboveGround()) {
                if (this.speedY > 0) this.showImage(this.animations["images_jump"][0])
                else this.showImage(this.animations["images_jump"][1])
            }
        }, 200)
    }

    move() {
        setInterval(() => {
            if (game.keyboard.keys.ArrowRight) {
                this.x += this.speedX;
                this.otherDirection = false;
            }
            if (game.keyboard.keys.ArrowLeft) {
                this.x -= this.speedX;
                this.otherDirection = true;
            }
            if (game.keyboard.keys.ArrowUp && !this.isAboveGround()) {
                this.currentImage = 0;
                this.jump()
            }
            game.cameraX = -this.x + 100
        }, 1000 / 60)
    }

    jump() {
        this.speedY = 16;
    }
}
