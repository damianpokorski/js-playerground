import { Vector, Canvas, GenericHelper } from 'source/import';

class Element {
  constructor(properties = {}) {
    this.style = '#FFFFFFF';
    this.position = new Vector(0, 0);
    this.velocity = new Vector(0, 0);

    this.applyProperties(properties);
  }

  applyProperties(properties) {
    // Injecting all properties at once
    GenericHelper.applyProperties(this, properties);
  }

  applyVelocity(delta) {
    this.position = this.position.add(this.velocity.multiply(delta));
  }

  wrapScreen() {
    this.position.x = this.position.x % Canvas.size().x;
    this.position.y = this.position.y % Canvas.size().y;
    while (this.position.x < 0) {
      this.position.x += Canvas.size().x;
    }
    while (this.position.y < 0) {
      this.position.y += Canvas.size().y;
    }
  }

  update(delta) {
    this.applyVelocity(delta);
  }

  draw() {
    Error(`${this.constructor.name} - which inherits from Element, should not call super on draw function as it's a stub method.`);
  }
}

export { Element as default };
