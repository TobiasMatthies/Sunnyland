class LandscapeObject extends BackgroundObject {
    preventCollision = false;

    constructor(image, x, y, height, width, preventCollision) {
        super(image, x, y, height, width);
        this.preventCollision = preventCollision;
    }

    preventCollisionWithLandscapeObjects(allObjects) {
        let attempts = 0;
        const MAX_ATTEMPTS = 100;

        while (attempts < MAX_ATTEMPTS) {
            let existingLandscapeObject = this.findExistingLandscapeObject(allObjects);

            if (!existingLandscapeObject) {
                return;
            }
            this.x = Math.floor(Math.random() * (5400 - 1 + 1) + 1);
            attempts++;
        }

        console.warn("No room for LandscapeObject:", this);
        const index = allObjects.indexOf(this);
        if (index !== -1) {
            allObjects.splice(index, 1);
        }
    }

    findExistingLandscapeObject(allObjects) {
        return allObjects.find(lo => {
            if (lo === this) return false;

            if (this.preventCollision && this.isColliding(lo)) return true;

            if (!this.preventCollision && !lo.preventCollision && this.isColliding(lo)) return true;

            return false;
        });
    }
}
