function startGame() {
    document.querySelector(".startscreen").style.display = "none";
    canvas = document.querySelector("canvas");
    game = new Game(canvas, new Level(), new Keyboard());
}
