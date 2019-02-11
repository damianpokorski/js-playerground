import { Element, Vector, Canvas } from "source/import";

class Rectangle extends Element {
    constructor() {
        super();
        this.velocity = new Vector(0, 0);
        this.dimensions = new Vector(0, 0);
    }

    update(delta) {
        super.update(delta);
        this.wrap_screen();
    }

    draw(delta) {
        Canvas.ctx().fillStyle = this.style;
        Canvas.ctx().fillRect(this.position.x, this.position.y, this.dimensions.x, this.dimensions.y);
    }

    collide(other) {
        if (
            this.position.x < other.position.x + other.dimensions.x &&
            this.position.y < other.position.y + other.dimensions.y &&
            this.position.x + this.dimensions.x > other.position.x &&
            this.position.y + this.dimensions.y > other.position.y
        ) {
            return true;
        }
        return false;
    }
};

export { Rectangle as default };