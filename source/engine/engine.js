import { Canvas, Snake, Mouse } from "source/import"

export default class Engine {
    constructor() {
        this.elements = [];

        // Initialize a clock
        this.total_time = 0;
        this.last_tick = performance.now();
        // Aiming for 60fps
        setInterval(() => {
            let this_tick = performance.now();
            let delta = this_tick - this.last_tick;
            this.last_tick = this_tick;
            this.total_time += delta;
            this.draw(delta / 1000);
            Canvas.drawText(100, 100, Math.round(1000 / delta));
        }, 1000 / 60);
        this.init_game();
    }

    init_game() {
        // Register player
        this.elements.push(new Snake());
        // Add some mice
        this.elements.push(new Mouse());
        this.elements.push(new Mouse());
        this.elements.push(new Mouse());
    }

    draw(delta) {
        Canvas.clear();
        // Update all of the elements, then draw them
        this.elements.forEach(e => e.update(delta));
        this.elements.forEach(e => e.draw(delta));
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