class Level {
    static getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    generateRandomAmountOfBackgroundObjects(image, y, height, width, min, max) {
        const RANDOM_AMOUNT = Level.getRandomInt(min, max);
        let randomBackgroundObjects = [];

        for (let index = 0; index < RANDOM_AMOUNT; index++) {
            let bgObject = new BackgroundObject(image, Level.getRandomInt(1, 3000), y, height, width);
            randomBackgroundObjects.push(bgObject);
        }

        return randomBackgroundObjects;
    }

    allLandscapeObjects = [
        // Houses
        [
            ...this.generateRandomAmountOfBackgroundObjects("../assets/landscape/plant-house.png", 160, 200, 260, 1, 2),
            ...this.generateRandomAmountOfBackgroundObjects("../assets/landscape/straw-house.png", 160, 200, 260, 1, 2),
            ...this.generateRandomAmountOfBackgroundObjects("../assets/landscape/tree-house.png", 160, 200, 260, 1, 2),
            ...this.generateRandomAmountOfBackgroundObjects("../assets/landscape/wooden-house.png", 160, 200, 260, 1, 2)
        ],
        // Trees
        [
            ...this.generateRandomAmountOfBackgroundObjects("../assets/landscape/palm.png", 100, 260, 160, 1, 3),
            ...this.generateRandomAmountOfBackgroundObjects("../assets/landscape/pine.png", 100, 260, 160, 1, 3),
            ...this.generateRandomAmountOfBackgroundObjects("../assets/landscape/tree_1.png", 100, 260, 200, 1, 3),
            ...this.generateRandomAmountOfBackgroundObjects("../assets/landscape/tree_2.png", 100, 260, 200, 1, 3),
            ...this.generateRandomAmountOfBackgroundObjects("../assets/plants/tree_4 1.png", 100, 260, 320, 1, 3),
            ...this.generateRandomAmountOfBackgroundObjects("../assets/plants/tree_5 1.png", 100, 260, 220, 1, 3),
            ...this.generateRandomAmountOfBackgroundObjects("../assets/plants/tree_6 1.png", 100, 260, 220, 1, 3),
        ],
        // Rocks & Bushes
        [
            ...this.generateRandomAmountOfBackgroundObjects("../assets/landscape/rock-1.png", 330, 30, 70, 1, 4),
            ...this.generateRandomAmountOfBackgroundObjects("../assets/landscape/rock-2.png", 335, 35, 70, 1, 4),
            ...this.generateRandomAmountOfBackgroundObjects("../assets/landscape/rock.png", 330, 30, 70, 1, 4),
            ...this.generateRandomAmountOfBackgroundObjects("../assets/landscape/shrooms.png", 320, 40, 40, 2, 6),
            ...this.generateRandomAmountOfBackgroundObjects("../assets/plants/stone_2.png", 330, 30, 70, 1, 4),
            ...this.generateRandomAmountOfBackgroundObjects("../assets/plants/stone_3.png", 330, 30, 70, 1, 4)
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
            let min = Math.floor(imageCollection.length / 2);
            let max = Math.floor(imageCollection.length / 4) * 3;
            const spliceAmount = Level.getRandomInt(min, max);

            for (let j = 0; j < spliceAmount; j++) {
                imageCollection.splice(Math.floor(Math.random()*imageCollection.length),1);
            }

            randomLandscapeObjects.push(...imageCollection);
        }

        console.log(randomLandscapeObjects);
        return randomLandscapeObjects;
    }
}
