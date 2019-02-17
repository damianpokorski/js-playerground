import { Rectangle, Vector } from 'source/import';
import * as GameConfig from 'source/game/config';

export default class Mouse extends Rectangle {
  constructor(properties = {}) {
    super(properties);
    this.dimensions = GameConfig.chunkSize;
    this.position = Vector
      .randomWithinCanvas(GameConfig.chunkSize.x)
      .alignToGrid(this.dimensions);
    this.style = '#FF3300';

    // Injecting all properties at once
    this.applyProperties(properties);
  }
}
