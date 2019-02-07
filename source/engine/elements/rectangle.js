import {Element, Vector, Canvas} from "source/import";

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
};

export { Rectangle as default };