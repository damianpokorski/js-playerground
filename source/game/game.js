import {
  Dom, Snake, Mouse, Canvas,
} from 'source/import';

export default class SnakeGame {
  constructor() {
    this.init();
    Dom.Events.resize(() => this.init());
    this.font = 'Press Start 2P';
  }

  loadAssets() {
    return new Promise((resolve, reject) => {
      Dom.Helper.LoadGoogleFont(this.font);
      Dom.Events.loaded(resolve);
      setTimeout(reject, 10000);
    });
  }

  init() {
    // Register player
    this.player = new Snake();

    // Add some mice
    this.elements = [];
    this.addMouse(3);
  }

  draw() {
    this.player.draw();
    this.elements.forEach(e => e.draw());
    this.drawUI();
  }

  calculateScore() {
    return (this.player.segments.length - 3) * 125;
  }

  drawUI() {
    Canvas.drawText(64, 64, 'Score', '#FFFFFF', '18px', this.font);
    Canvas.drawText(64, 96, this.calculateScore(), '#FFFFFF', '24px', this.font);
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
