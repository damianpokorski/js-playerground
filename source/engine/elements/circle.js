import { Element, Vector, Canvas } from 'source/import';

class Circle extends Element {
  constructor(properties = {}) {
    super(properties);
    this.velocity = new Vector(0, 0);
    this.radius = 0;

    // Injecting all properties at once
    this.applyProperties(properties);
  }

  update(delta) {
    super.update(delta);
    this.wrapScreen();
  }

  draw() {
    Canvas.ctx().beginPath();
    Canvas.ctx().fillStyle = this.style;
    Canvas.ctx().arc(
      this.position.x,
      this.position.y,
      this.radius,
      0,
      2 * Math.PI,
    );
    Canvas.ctx().fill();
  }

  collide(otherCircle) {
    return otherCircle.position.distance(this.position) > this.radius + otherCircle.radius;
  }

  contains(vectorPoint) {
    return this.position.distance(vectorPoint) < this.radius;
  }

  center() {
    return this.position;
  }
}

export { Circle as default };
