import { Canvas } from 'source/import';

export default class Engine {
  constructor() {
    // Initialize a clock
    this.total_time = 0;
    this.last_tick = performance.now();
    this.draw_fps = false;
    this.game = null;
  }

  loadGame(game) {
    this.game = game;
    game.loadAssets().then(() => this.tick());
  }

  static requestFrame(callback) {
    const handler = window.requestAnimationFrame
            || window.webkitRequestAnimationFrame
            || window.mozRequestAnimationFrame
            || (() => window.setTimeout(callback, 1000 / 60));
    handler(callback);
  }

  tick() {
    Engine.requestFrame(() => this.tick());
    const delta = performance.now() - this.last_tick;
    this.last_tick = performance.now();
    this.total_time += delta;
    this.update(delta / 1000);
    this.draw();
    if (this.draw_fps) {
      Canvas.drawText(100, 100, Math.round(1000 / delta));
    }
  }

  draw() {
    Canvas.clear();
    this.game.draw();
  }

  update(delta) {
    this.game.update(delta);
  }
}
