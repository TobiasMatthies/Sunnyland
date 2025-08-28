class Keyboard {
    keys = {
        ArrowLeft: false,
        ArrowRight: false,
        Space: false,
        KeyD: false,
    }

    constructor() {
        this.addKeyboardEventListeners()
    }

    addKeyboardEventListeners() {
        this.addKeyDownsListeners();
        this.addKeyUpListeners();
    }

    addKeyDownsListeners() {
        document.addEventListener("keydown", (e) => {
            let key = e['code'];
            let controls = Object.keys(this.keys)
            if (controls.includes(key)) {
                this.keys[key] = true;
            }
        })
    }

    addKeyUpListeners() {
        document.addEventListener("keyup", (e) => {
            let key = e['code'];
            let controls = Object.keys(this.keys)
            if (controls.includes(key)) {
                this.keys[key] = false;
            }
        })
    }
}
