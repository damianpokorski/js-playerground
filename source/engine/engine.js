import { Canvas, Snake, Mouse } from "source/import"

export default class Engine {
    constructor() {
        // Initialize a clock
        this.total_time = 0;
        this.last_tick = performance.now();
        this.draw_fps = false;
        this.game = null;
    }
    load_game(game) {
        this.game = game;
        this.tick();
    }

    requestFrame(callback) {
        let handler = window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            function(callback) {
                window.setTimeout(callback, 1000 / 60);
            };
        handler(callback);
    }

    tick() {
        this.requestFrame(() => this.tick());
        let this_tick = performance.now();
        let delta = this_tick - this.last_tick;
        this.last_tick = this_tick;
        this.total_time += delta;
        this.update(delta / 1000);
        this.draw(delta / 1000);
        this.draw_fps && Canvas.drawText(100, 100, Math.round(1000 / delta));
    }

    draw(delta) {
        Canvas.clear();
        this.game.draw(delta);
    }

    update(delta) {
        this.game.update(delta);
    }
}