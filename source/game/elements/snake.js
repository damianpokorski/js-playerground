import {
  Vector, Element, Dom, Trail,
} from 'source/import';

import * as GameConfig from 'source/game/config';

class Snake extends Element {
  constructor() {
    super();
    // Assume defaults
    this.reset();

    // Events
    Dom.Events.keyup(event => this.switchDirection(event));
  }

  hasTrail() {
    return this.segments.length > 0;
  }

  frontSegment() {
    return this.segments[this.segments.length - 1];
  }

  enteredNewChunk() {
    return !this.frontSegment().position.equals(this.position.alignToGrid(GameConfig.chunkSize));
  }

  trail() {
    // Trail which follows player - align pixel perfect moving position to grid.
    const gridAlignedPosition = this.position.alignToGrid(GameConfig.chunkSize);
    if (!this.hasTrail() || this.enteredNewChunk()) {
      this.segments.push(new Trail({
        position: gridAlignedPosition,
      }));
      this.position = gridAlignedPosition.add(GameConfig.chunkSize.divide(2));
      this.calculateVelocity();
      this.previousDirection = this.direction;
    }

    // Limit trail to the specific length
    while (this.segments.length > this.trailLength) {
      this.segments.shift();
    }
  }

  switchDirection(keyEvent) {
    switch (keyEvent.key) {
      case 'ArrowUp':
        this.direction = this.previousDirection.equals(Vector.down) ? Vector.down : Vector.up;
        break;
      case 'ArrowDown':
        this.direction = this.previousDirection.equals(Vector.up) ? Vector.up : Vector.down;
        break;
      case 'ArrowLeft':
        this.direction = this.previousDirection.equals(Vector.right) ? Vector.right : Vector.left;
        break;
      case 'ArrowRight':
        this.direction = this.previousDirection.equals(Vector.left) ? Vector.left : Vector.right;
        break;
      default:
        return;
    }
    this.calculateVelocity();
  }

  calculateVelocity() {
    this.speed = GameConfig.playerSpeed + (GameConfig.playerSpeedBoost) * this.segments.length;
    this.velocity = this.direction.multiply(this.speed);
  }

  draw() {
    this.segments.forEach(segment => segment.draw());
  }

  update(delta) {
    super.update(delta);
    this.collideWithSelf();
    this.wrapScreen();
    this.trail();
    this.segments.forEach(segment => segment.update(delta));
  }

  collide(other) {
    return this.segments.some(segment => segment.collide(other));
  }

  collideWithSelf() {
    for (let x = 0; x < this.segments.length; x += 1) {
      for (let y = x + 1; y < this.segments.length; y += 1) {
        if (this.segments[x].collide(this.segments[y])) {
          this.reset();
        }
      }
    }
  }

  reset() {
    // Reset all of the properties
    this.trailLength = 3;
    this.segments = [];
    this.speed = GameConfig.playerSpeed;
    this.position = Vector
      .randomWithinCanvas(GameConfig.chunkSize.x)
      .alignToGrid(GameConfig.chunkSize);

    // create initial segments -shift them off
    const leftByOneChunk = GameConfig.chunkSize.multiply(Vector.right);
    for (let i = 0; i <= GameConfig.trailLength; i += 1) {
      this.segments.push(new Trail({
        position: this.position.subtract(leftByOneChunk.multiply(i)),
      }));
    }

    this.direction = Vector.right;
    this.previousDirection = Vector.right;
    this.calculateVelocity();
  }
}

export { Snake as default };
