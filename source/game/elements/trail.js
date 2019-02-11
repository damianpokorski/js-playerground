import { Rectangle } from "source/import";

import * as GameConfig from "source/game/config";
class Trail extends Rectangle {
    constructor(_position) {
        super();
        this.position = _position;
        this.dimensions = GameConfig.chunk_size;
        this.style = "#22FF22";
    }
    update(delta) {
        super.update(delta);
    }
}

export { Trail as default }