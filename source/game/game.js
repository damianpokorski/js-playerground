import {
  Dom, Snake, Mouse, Text, DPad, Vector,
} from 'source/import';
import { Canvas } from '../import';

export default class SnakeGame {
  constructor() {
    this.init();
    Dom.Events.resize(() => this.init());

    // DPad
    this.dpad = new DPad();

    // Score text
    this.fontFamily = 'Press Start 2P';

    this.scoreText = new Text({
      position: new Vector(64, 96),
      style: '#FFFFFF',
      fontFamily: this.fontFamily,
      fontSize: '24px',
      text: 'Score...?',
      strokeStyle: 'Dark Gray',
      strokeThickness: 4,
    });

    this.scoreTextLabel = new Text({
      position: new Vector(64, 64),
      style: '#FFFFFF',
      fontFamily: this.fontFamily,
      fontSize: '18px',
      text: 'Score',
      strokeStyle: 'Dark Gray',
      strokeThickness: 4,
    });
  }

  loadAssets() {
    return new Promise((resolve, reject) => {
      Dom.Helper.LoadGoogleFont(this.fontFamily);
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
    this.scoreText.text = this.calculateScore();
    this.scoreText.draw();
    this.scoreTextLabel.draw();

    if (Canvas.isPortrait()) {
      this.dpad.draw();
    }
  }

  update(delta) {
    this.collide();
    this.player.update(delta);
    this.elements.forEach(e => e.update(delta));

    if (Canvas.isPortrait()) {
      this.dpad.update(delta);
    }
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
