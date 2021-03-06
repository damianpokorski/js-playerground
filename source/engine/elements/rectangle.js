import { Element, Vector, Canvas } from 'source/import';

let idIncrement = 0;

const idGenerator = () => {
  idIncrement += 1;
  return idIncrement;
};

class Rectangle extends Element {
  constructor(properties = {}) {
    super(properties);
    this.id = idGenerator();
    this.velocity = new Vector(0, 0);
    this.dimensions = new Vector(0, 0);

    // Injecting all properties at once
    this.applyProperties(properties);
  }

  update(delta) {
    super.update(delta);
    this.wrapScreen();
  }

  draw() {
    Canvas.ctx().fillStyle = this.style;
    Canvas.ctx().fillRect(this.position.x, this.position.y, this.dimensions.x, this.dimensions.y);
  }

  collide(other) {
    if (
      this.position.x < other.position.x + other.dimensions.x
      && this.position.x + this.dimensions.x > other.position.x
      && this.position.y < other.position.y + other.dimensions.y
      && this.position.y + this.dimensions.y > other.position.y
    ) {
      return true;
    }
    return false;
  }

  contains(vectorPoint) {
    return this.position.x < vectorPoint.x
      && this.position.y < vectorPoint.y
      && this.dimensions.x + this.position.x > vectorPoint.x
      && this.dimensions.y + this.position.y > vectorPoint.y;
  }

  center() {
    return this.position.add(this.dimensions.divide(2));
  }
}

export { Rectangle as default };
