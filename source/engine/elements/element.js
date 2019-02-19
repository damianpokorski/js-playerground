import {
  Dom, Vector, Canvas, GenericHelper,
} from 'source/import';

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
    this.position.wrapScreen();
  }

  update(delta) {
    this.applyVelocity(delta);
  }

  draw() {
    Error(`${this.constructor.name} - which inherits from Element, should not call super on draw function as it's a stub method.`);
  }

  /* eslint-disable class-methods-use-this, no-unused-vars */
  // Method use
  contains(vectorPoint) {
    return false;
  }
  /* eslint-enable class-methods-use-this, no-unused-vars */

  click(func) {
    Dom.Events.click(clickedPoint => this.contains(clickedPoint) && func(clickedPoint));
  }

  mousemove(func) {
    Dom.Events.mousemove(clickedPoint => this.contains(clickedPoint) && func(clickedPoint));
  }

  touchstart(func) {
    Dom.Events.touchstart(clickedPoint => this.contains(clickedPoint) && func(clickedPoint));
  }

  touchend(func) {
    Dom.Events.touchend(clickedPoint => this.contains(clickedPoint) && func(clickedPoint));
  }

  touchmove(func) {
    Dom.Events.touchmove(clickedPoint => this.contains(clickedPoint) && func(clickedPoint));
  }
}

export { Element as default };
