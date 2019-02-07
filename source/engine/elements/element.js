import { Vector, Canvas } from "source/import"

class Element {
    constructor() {
        this.style = "#FF00FF";
        this.position = new Vector(0, 0);
        this.velocity = new Vector(0, 0);
    }
    apply_velocity(delta) {
        this.position = this.position.add(this.velocity.multiply(delta));
    }
    wrap_screen() {
        this.position.x = this.position.x % Canvas.size().x;
        this.position.y = this.position.y % Canvas.size().y;
        while (this.position.x < 0) {
            this.position.x += Canvas.size().x;
        }
        while (this.position.y < 0) {
            this.position.y += Canvas.size().y;
        }
    }
    update(delta) {
        this.apply_velocity(delta);
    }
    draw() {
        Error('Draw function needs to be defined')
    }
};

export { Element as default }