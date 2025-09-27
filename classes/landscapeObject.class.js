class LandscapeObject extends BackgroundObject {
    preventCollision = false;

    constructor(image, x, y, height, width, preventCollision) {
        super(image, x, y, height, width);
        this.preventCollision = preventCollision;
    }

    preventCollisionWithLandscapeObjects(allObjects) {
        let existingLandscapeObject = allObjects.find((lo) => {
            return lo.preventCollision && lo !== this && this.isColliding(lo);
        });

        if (existingLandscapeObject) {
            // this.x = Level.getRandomInt(1, 3000);
            this.x = Math.floor(Math.random() * (3000 - 1 + 1) + 1)
            this.preventCollisionWithLandscapeObjects(allObjects);
        }
    }
}
