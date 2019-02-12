import { Snake, Mouse } from 'source/import';

export default class SnakeGame {
  constructor() {
    // Register player
    this.player = new Snake();

    // Add some mice
    this.elements = [];
    this.addMouse(3);
  }

  draw() {
    this.player.draw();
    this.elements.forEach(e => e.draw());
  }

  update(delta) {
    this.collide();
    this.player.update(delta);
    this.elements.forEach(e => e.update(delta));
  }

  collide() {
    this.elements
      .filter(e => this.player.collide(e))
      .forEach((e) => {
        this.player.trailLength += 1;
        this.elements.splice(this.elements.indexOf(e), 1);
        this.addMouse();
      });
  }

  addMouse(x = 1) {
    for (let y = 0; y < x; y += 1) {
      this.elements.push(new Mouse());
    }
  }
}
