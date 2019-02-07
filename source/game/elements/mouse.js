import { Rectangle, Canvas} from "source/import";

export default class Mouse extends Rectangle {
    constructor() {
        super();
        this.position.x = Math.random() * Canvas.size().x;
        this.position.y = Math.random() * Canvas.size().y;
        this.dimensions.x = 40;
        this.dimensions.y = 40;
        this.position = this.position.align_to_grid(this.dimensions);
        this.style = "#FF3300";
    }
}