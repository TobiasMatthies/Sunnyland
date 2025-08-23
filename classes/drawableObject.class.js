class DrawableObject {
    x = 0;
    y = 0;
    height = 480;
    width = 720;
    img;
    imageCache = {};
    currentImage = 0;

    setInitialImage(path) {
        this.img = new Image();
        this.img.src = path;
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