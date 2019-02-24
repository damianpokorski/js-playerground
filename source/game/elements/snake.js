import {
  Vector, Canvas, Element, Dom, Trail,
} from 'source/import';

import * as GameConfig from 'source/game/config';

class Snake extends Element {
  constructor() {
    super();

    // Events
    Dom.Events.keyup(key => this.switchDirection(key));
    
    // Assume defaults
    this.reset();
  }

  hasTrail() {
    return this.segments.length > 0;
  }

  frontSegment() {
    return this.segments[this.segments.length - 1];
  }

  calculateSpeed() {
    return 1 / (GameConfig.playerSpeed + this.segments.length);
  }

  trail(delta = 0) {
    this.speed -= delta;
    if (this.speed < 0) {
      this.speed = this.calculateSpeed();

      this.segments.push(new Trail({
        position: this.frontSegment().position
          .add(GameConfig.chunkSize.multiply(this.direction))
          .wrapScreen()
          .constrainScreen()
          .alignToGrid(GameConfig.chunkSize),
      }));

      this.previousDirection = this.direction;
    }

    // Limit trail to the specific length
    if (this.segments.length > this.trailLength) {
      this.segments.shift();
    }
  }

  switchDirection(key) {
    switch (key) {
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
    }
  }


  draw() {
    this.segments.forEach(segment => segment.draw());
  }

  update(delta) {
    // super.update(delta);
    this.trail(delta);
    this.collideWithSelf();
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
    this.trailLength = GameConfig.trailLength;
    this.segments = [];
    this.position = Vector
      .randomWithinCanvas(GameConfig.chunkSize.x)
      .alignToGrid(GameConfig.chunkSize);

    // create initial segments -shift them off
    const upByOneChunk = GameConfig.chunkSize.multiply(Vector.up);
    for (let i = 0; i <= GameConfig.trailLength; i += 1) {
      this.segments.push(new Trail({
        position: this.position.subtract(upByOneChunk.multiply(i)).wrapScreen(),
      }));
    }

    this.speed = this.calculateSpeed();
    this.direction = Vector.down;
    this.previousDirection = Vector.left;
  }
}

export { Snake as default };
