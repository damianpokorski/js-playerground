import { Rectangle, Vector } from "source/import";
import * as GameConfig from "source/game/config";

export default class Mouse extends Rectangle {
    constructor() {
        super();
        this.dimensions = GameConfig.chunk_size;
        this.position = Vector
            .random_within_canvas(GameConfig.chunk_size.x)
            .align_to_grid(this.dimensions);
        this.style = "#FF3300";
    }
}