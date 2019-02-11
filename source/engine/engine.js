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
        this.start_clock();
    }

    start_clock() {
        // Aiming for 60fps
        this.clock_id = setInterval(() => {
            let this_tick = performance.now();
            let delta = this_tick - this.last_tick;
            this.last_tick = this_tick;
            this.total_time += delta;
            this.update(delta / 1000);
            this.draw(delta / 1000);
            this.draw_fps && Canvas.drawText(100, 100, Math.round(1000 / delta));
        }, 1000 / 60);
    }

    stop_clock() {
        clearInterval(this.clock_id);
    }

    draw(delta) {
        Canvas.clear();
        this.game.draw(delta);
    }

    update(delta) {
        this.game.update(delta);
    }

    collision_detection() {
        // simple collision
        for (let e1 in this.elements) {
            for (let e2 in this.elements) {
                if (e1 instanceof Snake && e2 instanceof Mouse) {

                }
            }
        }
    }
}