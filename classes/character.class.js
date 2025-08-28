class Character extends DrawableObject {
    animations = {
        images_idle: [
            "../assets/character/idle_1.png",
            "../assets/character/idle_2.png",
            "../assets/character/idle_3.png",
            "../assets/character/idle_4.png",
        ],

        images_run: [
            "../assets/character/run_1.png",
            "../assets/character/run_2.png",
            "../assets/character/run_3.png",
            "../assets/character/run_4.png",
            "../assets/character/run_5.png",
            "../assets/character/run_6.png",
        ],

        images_jump: [
            "../assets/character/jump_1.png",
            "../assets/character/jump_2.png",
            "../assets/character/jump_3.png",
        ],

        images_hurt: [
            "../assets/character/hurt_1.png",
            "../assets/character/hurt_2.png",
            "../assets/character/hurt_3.png",
            "../assets/character/hurt_4.png",
            "../assets/character/hurt_5.png",
            "../assets/character/hurt_6.png",
            "../assets/character/hurt_7.png",
            "../assets/character/hurt_8.png",
            "../assets/character/hurt_9.png",
            "../assets/character/hurt_10.png",
        ]
    }

    constructor(x, y, height, width) {
        super("../assets/character/idle_1.png", x, y, height, width)
        for (const animation in this.animations) {
            this.loadImages(this.animations[animation])
        }

        setInterval(() => this.playAnimation(this.animations["images_idle"]), 150)
    }
}
