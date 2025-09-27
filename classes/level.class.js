class Level {
    static getRandomInt(min, max) {
        return max
        //return Math.floor(Math.random() * (max - min + 1) + min);
    }

    generateRandomAmountOfLandscapeObjects(image, y, height, width, min, max, preventCollision = false) {
        const RANDOM_AMOUNT = Level.getRandomInt(min, max);
        let randomBackgroundObjects = [];

        for (let index = 0; index < RANDOM_AMOUNT; index++) {
            // let bgObject = new LandscapeObject(image, Level.getRandomInt(1, 3000), y, height, width, preventCollision);
            let bgObject = new LandscapeObject(image, Math.floor(Math.random() * (3000 - 1 + 1) + 1), y, height, width, preventCollision);
            randomBackgroundObjects.push(bgObject);
        }

        return randomBackgroundObjects;
    }

    allLandscapeObjects = [
        // Houses
        [
            ...this.generateRandomAmountOfLandscapeObjects("../assets/landscape/plant-house.png", 160, 200, 260, 1, 2, true),
            ...this.generateRandomAmountOfLandscapeObjects("../assets/landscape/straw-house.png", 160, 200, 260, 1, 2, true),
            ...this.generateRandomAmountOfLandscapeObjects("../assets/landscape/tree-house.png", 160, 200, 260, 1, 2, true),
            ...this.generateRandomAmountOfLandscapeObjects("../assets/landscape/wooden-house.png", 160, 200, 260, 1, 2, true)
        ],
        // Trees
        [
            ...this.generateRandomAmountOfLandscapeObjects("../assets/landscape/palm.png", 100, 260, 160, 1, 3, true),
            ...this.generateRandomAmountOfLandscapeObjects("../assets/landscape/pine.png", 100, 260, 160, 1, 3, true),
            ...this.generateRandomAmountOfLandscapeObjects("../assets/landscape/tree_1.png", 100, 260, 200, 1, 3, true),
            ...this.generateRandomAmountOfLandscapeObjects("../assets/landscape/tree_2.png", 100, 260, 200, 1, 3, true),
            ...this.generateRandomAmountOfLandscapeObjects("../assets/plants/tree_4 1.png", 100, 260, 320, 1, 3, true),
            ...this.generateRandomAmountOfLandscapeObjects("../assets/plants/tree_5 1.png", 100, 260, 220, 1, 3, true),
            ...this.generateRandomAmountOfLandscapeObjects("../assets/plants/tree_6 1.png", 100, 260, 220, 1, 3, true),
        ],
        // Rocks & Bushes
        [
            ...this.generateRandomAmountOfLandscapeObjects("../assets/landscape/rock-1.png", 330, 30, 70, 1, 4),
            ...this.generateRandomAmountOfLandscapeObjects("../assets/landscape/rock-2.png", 335, 35, 70, 1, 4),
            ...this.generateRandomAmountOfLandscapeObjects("../assets/landscape/rock.png", 330, 30, 70, 1, 4),
            ...this.generateRandomAmountOfLandscapeObjects("../assets/landscape/shrooms.png", 320, 40, 40, 2, 6),
            ...this.generateRandomAmountOfLandscapeObjects("../assets/plants/stone_2.png", 330, 30, 70, 1, 4),
            ...this.generateRandomAmountOfLandscapeObjects("../assets/plants/stone_3.png", 330, 30, 70, 1, 4)
        ],
    ];

    backgroundObjects = [
        new BackgroundObject("../assets/background/Heaven-Background.png"),
        new BackgroundObject("../assets/background/Heaven-Background.png", 720),
        new BackgroundObject("../assets/background/Heaven-Background.png", 1440),
        new BackgroundObject("../assets/background/Heaven-Background.png", 2160),
        new BackgroundObject("../assets/background/Heaven-Background.png", 2880),
        new BackgroundObject("../assets/background/Heaven-Background.png", 3600),
        new BackgroundObject("../assets/background/Heaven-Background.png", 4320),
        new BackgroundObject("../assets/background/Heaven-Background.png", 5020),
        new BackgroundObject("../assets/background/jungle_1 1.png", null, 80, 480, 480),
        new BackgroundObject("../assets/background/jungle_2 1.png", 480, 100, 480, 480),
        new BackgroundObject("../assets/background/jungle_4 1.png", 1000, 120, 480, 480),
        new BackgroundObject("../assets/background/jungle_3 1.png", 1600, 100, 480, 480),
        new BackgroundObject("../assets/background/jungle_1 1.png", 2200, 140, 480, 480),
        new BackgroundObject("../assets/background/jungle_2 1.png", 2680, 100, 480, 480),
        new BackgroundObject("../assets/background/jungle_1 1.png", 3200, 80, 480, 480),
        new BackgroundObject("../assets/background/jungle_2 1.png", 3680, 100, 480, 480),
        new BackgroundObject("../assets/background/jungle_4 1.png", 4200, 120, 480, 480),
        new BackgroundObject("../assets/background/jungle_3 1.png", 4800, 100, 480, 480),
        new BackgroundObject("../assets/background/ground 1.png", 0, 360, 120),
        new BackgroundObject("../assets/background/ground 1.png", 720, 360, 120),
        new BackgroundObject("../assets/background/ground 1.png", 1440, 360, 120),
        new BackgroundObject("../assets/background/ground 1.png", 2160, 360, 120),
        new BackgroundObject("../assets/background/ground 1.png", 2880, 360, 120),
        new BackgroundObject("../assets/background/ground 1.png", 3600, 360, 120),
        new BackgroundObject("../assets/background/ground 1.png", 4320, 360, 120),
        new BackgroundObject("../assets/background/ground 1.png", 5020, 360, 120),
    ]

    character = new Character(100, 180, 60, 60)

    landscapeObjects = this.generateLandscapeObjects()

    generateLandscapeObjects() {
        let randomLandscapeObjects = [];

        for (let i = 0; i < this.allLandscapeObjects.length; i++) {
            let imageCollection = this.allLandscapeObjects[i];
            let min = Math.floor(imageCollection.length / 2);
            let max = Math.floor(imageCollection.length / 4) * 3;
            // const spliceAmount = Level.getRandomInt(min, max);
            const spliceAmount = min;

            for (let j = 0; j < spliceAmount; j++) {
                imageCollection.splice(Math.floor(Math.random() * imageCollection.length), 1);
            }

            randomLandscapeObjects.push(...imageCollection);
        }

        randomLandscapeObjects.forEach(obj => {
            if (obj instanceof LandscapeObject && obj.preventCollision) {
                obj.preventCollisionWithLandscapeObjects(randomLandscapeObjects);
            }
        });


        console.log(randomLandscapeObjects);
        return randomLandscapeObjects;
    }
}
