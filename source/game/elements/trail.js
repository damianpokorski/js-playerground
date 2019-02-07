import { Rectangle } from "source/import";

class Trail extends Rectangle {
    constructor(_position) {
        super();
        this.position = _position;
        this.dimensions.x = 40;
        this.dimensions.y = 40;
        this.style = "#FF00BB";
    }
    update(delta) {
        super.update(delta);
    }
}

export { Trail as default }