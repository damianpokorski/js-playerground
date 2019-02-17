import { Canvas } from 'source/import';

export default class Vector {
  constructor(_x = 0, _y = 0) {
    this.x = _x;
    this.y = _y;
  }

  static isVector(obj) {
    return (obj) instanceof Vector;
  }

  clone() {
    return new Vector(this.x, this.y);
  }

  add(_addition) {
    return Vector.isVector(_addition)
      ? new Vector(this.x + _addition.x, this.y + _addition.y)
      : new Vector(this.x + _addition, this.y + _addition);
  }

  subtract(_subtraction) {
    return Vector.isVector(_subtraction)
      ? new Vector(this.x - _subtraction.x, this.y - _subtraction.y)
      : new Vector(this.x - _subtraction, this.y - _subtraction);
  }

  multiply(_multiplier) {
    return Vector.isVector(_multiplier)
      ? new Vector(this.x * _multiplier.x, this.y * _multiplier.y)
      : new Vector(this.x * _multiplier, this.y * _multiplier);
  }

  divide(_divider) {
    return Vector.isVector(_divider)
      ? new Vector(this.x / _divider.x, this.y / _divider.y)
      : new Vector(this.x / _divider, this.y / _divider);
  }

  normal() {
    const unit = Math.sqrt(this.x * this.x + this.y * this.y);
    return new Vector(
      this.x / unit,
      this.y / unit,
    );
  }

  distance(other) {
    const absX = Math.abs(this.x - other.x);
    const absY = Math.abs(this.y - other.y);
    return Math.sqrt(absX * absX + absY * absY);
  }

  angle() {
    return Math.atan2(this.y, this.x) * 180 / Math.PI;
  }

  equals(other) {
    return this.x === other.x && this.y === other.y;
  }

  constrain(topLeft, bottomRight) {
    return new Vector(
      Math.min(Math.max(this.x, topLeft.x), bottomRight.x),
      Math.min(Math.max(this.y, topLeft.y), bottomRight.y),
    );
  }

  alignToGrid(_gridDimensions) {
    return Vector.isVector(_gridDimensions)
      ? new Vector(this.x - (this.x % _gridDimensions.x), this.y - (this.y % _gridDimensions.y))
      : new Vector(this.x - (this.x % _gridDimensions), this.y - (this.y % _gridDimensions));
  }

  static randomWithinCanvas(padding = 0) {
    const boundaries = Canvas.size();

    return new Vector(
      Math.max(
        padding,
        Math.min(
          Math.random() * boundaries.x,
          boundaries.x - padding,
        ),
      ),
      Math.max(
        padding,
        Math.min(
          Math.random() * boundaries.y,
          boundaries.y - padding,
        ),
      ),
    );
  }

  toString() {
    return `X: ${this.x} Y: ${this.y}`;
  }
}
Vector.up = new Vector(0, -1);
Vector.down = new Vector(0, 1);
Vector.left = new Vector(-1, 0);
Vector.right = new Vector(1, 0);
