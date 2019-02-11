import { Rectangle, Canvas } from "source/import";
import * as GameConfig from "source/game/config";

export default class Mouse extends Rectangle {
    constructor() {
        super();
        this.position.x = Math.random() * Canvas.size().x;
        this.position.y = Math.random() * Canvas.size().y;
        this.dimensions = GameConfig.chunk_size;
        this.position = this.position.align_to_grid(this.dimensions);
        this.style = "#FF3300";
    }
}