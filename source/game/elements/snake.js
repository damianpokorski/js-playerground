import { Vector, Element, Dom, Rectangle, Trail } from "source/import"

class Snake extends Element {
    constructor() {
        super();
        this.chunk_size = new Vector(40, 40);
        this.position = new Vector(0, 0);
        this.segments = [];
        this.trail_length = 3;

        // Movement
        this.speed = 400;
        this.direction = Vector.right;
        this.velocity = this.direction.multiply(this.speed);

        // Events
        Dom.Events.keyup(x => this.switch_direction(x));
    }

    trail() {
        // Trail which follows player
        let grid_aligned_position = this.position.align_to_grid(this.chunk_size);
        if (this.segments.filter(x => x.position.equals(grid_aligned_position)).length == 0) {
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
        //super.draw(delta);
        this.segments.forEach(segment => segment.draw(delta));
    }

    update(delta) {
        super.update(delta);
        this.wrap_screen();
        this.trail();
        this.segments.forEach(segment => segment.update(delta));
    }
};

export { Snake as default }