import { Rectangle } from 'source/import';

import * as GameConfig from 'source/game/config';

class Trail extends Rectangle {
  constructor(properties = {}) {
    super(properties);
    this.dimensions = GameConfig.chunkSize;
    this.style = '#22FF22';

    this.applyProperties(properties);
  }

  update(delta) {
    super.update(delta);
  }
}

export { Trail as default };
