class Character extends DrawableObject {
    animations = {
        images_idle: [
            "../assets/character/idle_1.svg",
            "../assets/character/idle_2.svg",
            "../assets/character/idle_3.svg",
            "../assets/character/idle_4.svg",
        ],

        images_run: [
            "../assets/character/run_1.svg",
            "../assets/character/run_2.svg",
            "../assets/character/run_3.svg",
            "../assets/character/run_4.svg",
            "../assets/character/run_5.svg",
            "../assets/character/run_6.svg",
        ],

        images_jump: [
            "../assets/character/jump_1.svg",
            "../assets/character/jump_2.svg",
            "../assets/character/jump_3.svg",
        ],

        images_hurt: [
            "../assets/character/hurt_1.svg",
            "../assets/character/hurt_2.svg",
            "../assets/character/hurt_3.svg",
            "../assets/character/hurt_4.svg",
            "../assets/character/hurt_5.svg",
            "../assets/character/hurt_6.svg",
            "../assets/character/hurt_7.svg",
            "../assets/character/hurt_8.svg",
            "../assets/character/hurt_9.svg",
            "../assets/character/hurt_10.svg",
        ]
    }

    constructor(x, y, height, width) {
        super("../assets/character/idle_1.svg", x, y, height, width)
        for (const animation in this.animations) {
            this.loadImages(this.animations[animation])
        }

        setInterval(this.playAnimation, 150, this, this.animations["images_idle"])
    }
}
