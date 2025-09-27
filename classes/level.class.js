class Level {
    static getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    allLandscapeObjects = [
        [
            new BackgroundObject("../assets/landscape/plant-house.png", Level.getRandomInt(1, 3000), 160, 200, 200),
            new BackgroundObject("../assets/landscape/straw-house.png", Level.getRandomInt(1, 3000), 160, 200, 200),
            new BackgroundObject("../assets/landscape/tree-house.png", Level.getRandomInt(1, 3000), 160, 200, 200),
            new BackgroundObject("../assets/landscape/wooden-house.png", Level.getRandomInt(1, 3000), 160, 200, 200)
        ],
        [
            new BackgroundObject("../assets/landscape/rock-1.png", Level.getRandomInt(1, 3000), 160, 200, 200),
            new BackgroundObject("../assets/landscape/rock-2.png", Level.getRandomInt(1, 3000), 160, 200, 200),
            new BackgroundObject("../assets/landscape/rock.png", Level.getRandomInt(1, 3000), 160, 200, 200),
            new BackgroundObject("../assets/landscape/shrooms.png", Level.getRandomInt(1, 3000), 160, 200, 200),
            new BackgroundObject("../assets/plants/stone_2.png", Level.getRandomInt(1, 3000), 160, 200, 200),
            new BackgroundObject("../assets/plants/stone_3.png", Level.getRandomInt(1, 3000), 160, 200, 200)
        ],
        [
            new BackgroundObject("../assets/landscape/palm.png", Level.getRandomInt(1, 3000), 160, 200, 200),
            new BackgroundObject("../assets/landscape/pine.png", Level.getRandomInt(1, 3000), 160, 200, 200),
            new BackgroundObject("../assets/landscape/tree_1.png", Level.getRandomInt(1, 3000), 160, 200, 200),
            new BackgroundObject("../assets/landscape/tree_2.png", Level.getRandomInt(1, 3000), 160, 200, 200),
            new BackgroundObject("../assets/plants/tree_4 1.png", Level.getRandomInt(1, 3000), 160, 200, 200),
            new BackgroundObject("../assets/plants/tree_5 1.png", Level.getRandomInt(1, 3000), 160, 200, 200),
            new BackgroundObject("../assets/plants/tree_6 1.png", Level.getRandomInt(1, 3000), 160, 200, 200),
        ],

    ];

    backgroundObjects = [
        new BackgroundObject("../assets/background/Heaven-Background.png"),
        new BackgroundObject("../assets/background/Heaven-Background.png", 720),
        new BackgroundObject("../assets/background/Heaven-Background.png", 1440),
        new BackgroundObject("../assets/background/Heaven-Background.png", 2160),
        new BackgroundObject("../assets/background/Heaven-Background.png", 2880),
        new BackgroundObject("../assets/background/jungle_1 1.png", null, 80, 480, 480),
        new BackgroundObject("../assets/background/jungle_2 1.png", 480, 100, 480, 480),
        new BackgroundObject("../assets/background/jungle_4 1.png", 1000, 120, 480, 480),
        new BackgroundObject("../assets/background/jungle_3 1.png", 1600, 100, 480, 480),
        new BackgroundObject("../assets/background/jungle_1 1.png", 2200, 140, 480, 480),
        new BackgroundObject("../assets/background/jungle_2 1.png", 2680, 100, 480, 480),
        new BackgroundObject("../assets/background/ground 1.png", 0, 360, 120),
        new BackgroundObject("../assets/background/ground 1.png", 720, 360, 120),
        new BackgroundObject("../assets/background/ground 1.png", 1440, 360, 120),
        new BackgroundObject("../assets/background/ground 1.png", 2160, 360, 120),
        new BackgroundObject("../assets/background/ground 1.png", 2880, 360, 120),
    ]

    character = new Character(100, 180, 60, 60)

    landscapeObjects = this.generateLandscapeObjects()

    generateLandscapeObjects() {
        let randomLandscapeObjects = [];

        for (let i = 0; i < this.allLandscapeObjects.length; i++) {
            let imageCollection = this.allLandscapeObjects[i];
            const spliceAmount = Level.getRandomInt(1, 3);

            for (let j = 0; j < spliceAmount; j++) {
                imageCollection.splice(Math.floor(Math.random()*imageCollection.length),1);
            }

            randomLandscapeObjects.push(...imageCollection);
        }

        console.log(randomLandscapeObjects);
        return randomLandscapeObjects;
    }
}
