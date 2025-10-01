class Level {
    character = new Character(100, 180, 60, 60);

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
    ];

    constructor() {
        this.houseVariants = [
            { image: "../assets/landscape/plant-house.png", y: 160, height: 200, width: 260 },
            { image: "../assets/landscape/straw-house.png", y: 160, height: 200, width: 260 },
            { image: "../assets/landscape/tree-house.png", y: 160, height: 200, width: 260 },
            { image: "../assets/landscape/wooden-house.png", y: 160, height: 200, width: 260 },
            { image: "../assets/landscape/house.png", y: 160, height: 200, width: 200 },
        ];

        this.treeVariants = [
            { image: "../assets/landscape/palm.png", y: 100, height: 260, width: 160 },
            { image: "../assets/landscape/pine.png", y: 100, height: 260, width: 160 },
            { image: "../assets/landscape/tree_1.png", y: 100, height: 260, width: 200 },
            { image: "../assets/landscape/tree_2.png", y: 100, height: 260, width: 200 },
            { image: "../assets/plants/tree_4 1.png", y: 100, height: 260, width: 320 },
            { image: "../assets/plants/tree_5 1.png", y: 100, height: 260, width: 220 },
            { image: "../assets/plants/tree_6 1.png", y: 100, height: 260, width: 220 },
        ];

        this.rockVariants = [
            { image: "../assets/landscape/rock-1.png", y: 330, height: 30, width: 70 },
            { image: "../assets/landscape/rock-2.png", y: 332, height: 35, width: 70 },
            { image: "../assets/landscape/rock.png", y: 330, height: 30, width: 70 },
            { image: "../assets/plants/stone_2.png", y: 330, height: 30, width: 70 },
            { image: "../assets/plants/stone_3.png", y: 330, height: 30, width: 70 },
        ];

        this.bushVariants = [
            { image: "../assets/landscape/shrooms.png", y: 320, height: 40, width: 40 },
            { image: "../assets/landscape/bush.png", y: 330, height: 30, width: 70 },
        ];

        this.landscapeObjects = this.generateLandscapeObjects();
    }

    static getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    static getRandomSubset(array, maxCount) {
        const shuffled = [...array].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, maxCount);
    }

    generateRandomAmountOfLandscapeObjects(image, y, height, width, min, max, preventCollision = false) {
        const amount = Level.getRandomInt(min, max);
        let objects = [];
        for (let i = 0; i < amount; i++) {
            objects.push(new LandscapeObject(image, Level.getRandomInt(1, 3000), y, height, width, preventCollision));
        }
        return objects;
    }

    generateCategoryObjects(variants, maxTypes, totalTarget, minPerType, maxPerType, preventCollision = false) {
        const selectedVariants = Level.getRandomSubset(variants, maxTypes);
        let objects = [];

        const baseCount = Math.floor(totalTarget / selectedVariants.length);
        selectedVariants.forEach(variant => {
            const min = Math.max(minPerType, baseCount - 1);
            const max = Math.min(maxPerType, baseCount + 1);
            objects.push(...this.generateRandomAmountOfLandscapeObjects(
                variant.image, variant.y, variant.height, variant.width, min, max, preventCollision
            ));
        });

        return objects;
    }

    generateLandscapeObjects() {
        let objects = [];
        const targetCount = Level.getRandomInt(25, 35);

        const weights = { houses: 0.1, trees: 0.6, rocks: 0.15, bushes: 0.15 };
        const categoryTargets = {
            houses: Math.round(targetCount * weights.houses),
            trees: Math.round(targetCount * weights.trees),
            rocks: Math.round(targetCount * weights.rocks),
            bushes: Math.round(targetCount * weights.bushes),
        };

        let firstStepCategories = [
            { variants: this.houseVariants, maxTypes: 3, target: categoryTargets.houses, minPerType: 1, maxPerType: 2, preventCollision: true },
            { variants: this.treeVariants, maxTypes: 4, target: categoryTargets.trees, minPerType: 1, maxPerType: 3, preventCollision: true }
        ];

        firstStepCategories = firstStepCategories.sort(() => 0.5 - Math.random());
        firstStepCategories.forEach(cat => {
            objects.push(...this.generateCategoryObjects(cat.variants, cat.maxTypes, cat.target, cat.minPerType, cat.maxPerType, cat.preventCollision));
        });

        objects.push(...this.generateCategoryObjects(this.rockVariants, 3, categoryTargets.rocks, 1, 3));
        objects.push(...this.generateCategoryObjects(this.bushVariants, this.bushVariants.length, categoryTargets.bushes, 2, 4));

        objects.forEach(obj => {
            if (obj instanceof LandscapeObject && obj.preventCollision) {
                obj.preventCollisionWithLandscapeObjects(objects);
            }
        });

        console.log(objects);
        return objects;
    }
}
