import { Vector, Element, Dom, Rectangle, Trail } from "source/import"

import * as GameConfig from "source/game/config";

class Snake extends Element {
    constructor() {
        super();
        this.chunk_size = GameConfig.chunk_size;
        this.position = new Vector(0, 0);
        this.segments = [];
        this.trail_length = GameConfig.trail_length;


        // Movement
        this.speed = GameConfig.player_speed;
        this.direction = Vector.right;
        this.velocity = this.direction.multiply(this.speed);

        // Events
        Dom.Events.keyup(x => this.switch_direction(x));
    }

    trail() {
        // Trail which follows player
        let grid_aligned_position = this.position.align_to_grid(this.chunk_size);
        if (this.segments.length == 0 || !this.segments[this.segments.length - 1].position.equals(grid_aligned_position)) {
            this.segments.push(new Trail(grid_aligned_position));
        }
        // Limit trail to the specific length
        while (this.segments.length > this.trail_length) {
            this.segments.shift();
        }
    }

    switch_direction(key_event) {
        switch (key_event.key) {
            case 'ArrowUp':
                this.direction = this.direction.equals(Vector.down) ? Vector.down : Vector.up;
                break;
            case 'ArrowDown':
                this.direction = this.direction.equals(Vector.up) ? Vector.up : Vector.down;
                break;
            case 'ArrowLeft':
                this.direction = this.direction.equals(Vector.right) ? Vector.right : Vector.left;
                break;
            case 'ArrowRight':
                this.direction = this.direction.equals(Vector.left) ? Vector.left : Vector.right;
                break;
        }
        this.velocity = this.direction.multiply(this.speed);
    }

    draw(delta) {
        this.segments.forEach(segment => segment.draw(delta));
    }

    update(delta) {
        super.update(delta);
        this.collide_with_self();
        this.wrap_screen();
        this.trail();
        this.segments.forEach(segment => segment.update(delta));
    }

    collide(other) {
        return this.segments.some(segment => segment.collide(other));
    }

    collide_with_self() {
        for (let x = 0; x < this.segments.length; x++) {
            for (let y = x + 1; y < this.segments.length; y++) {
                if (this.segments[x].collide(this.segments[y])) {
                    this.reset();
                }
            }
        }
    }
    reset() {
        this.trail_length = 3;
        this.segments = [];
        this.position = Vector
            .random_within_canvas()
            .align_to_grid(GameConfig.chunk_size);
        console.log(this.position);
    }
}

export { Snake as default }