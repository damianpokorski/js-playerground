import { Vector, Element, Dom, Rectangle, Trail } from "source/import"

import * as GameConfig from "source/game/config";
import { inherits } from "util";

class Snake extends Element {
    constructor() {
        super();
        // Assume defaults
        this.reset();
        // Events
        Dom.Events.keyup(x => this.switch_direction(x));

    }

    hasTrail() {
        return this.segments.length > 0;
    }

    frontSegment() {
        return this.segments[this.segments.length - 1];
    }

    trail() {
        // Trail which follows player - align pixel perfect moving position to grid. 
        let grid_aligned_position = this.position.align_to_grid(GameConfig.chunk_size);
        if (!this.hasTrail() || !this.frontSegment().position.equals(grid_aligned_position)) {
            this.segments.push(new Trail(grid_aligned_position));
            this.calculateVelocity();
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
        this.calculateVelocity();
    }

    calculateVelocity() {
        this.speed = GameConfig.player_speed + (GameConfig.player_speed_boost) * this.segments.length;
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
        // Reset all of the properties
        this.trail_length = 3;
        this.segments = [];
        this.speed = GameConfig.player_speed;
        this.position = Vector
            .random_within_canvas(GameConfig.chunk_size.x)
            .align_to_grid(GameConfig.chunk_size);

        this.direction = Vector.right;
        this.calculateVelocity();
    }
}

export { Snake as default }