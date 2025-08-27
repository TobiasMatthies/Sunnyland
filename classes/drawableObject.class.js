class DrawableObject {
    x = 0;
    y = 0;
    height = 480;
    width = 720;
    img;
    imageCache = {};
    currentImage = 0;

    constructor(img, x, y, height, width) {
        this.setInitialImage(img);
        this.x = x ? x : 0;
        this.y = y ? y : 0;
        this.height = height ? height : 480;
        this.width = width ? width : 720;
        this.currentImage = 0;
    }

    setInitialImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    playAnimation(self, images) {
        let i = self.currentImage % images.length;
        let path = images[i];
        self.img = self.imageCache[path];
        self.currentImage++;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    loadImages(array) {
        array.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }
}
