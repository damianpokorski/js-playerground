// Dom Helpers - I'm just lazy
const dom = (function() {
    let self = {};
    self.getFirstOfTag = (tag) => document.getElementsByTagName(tag)[0];
    self.getById = (id) => document.getElementById(id);
    self.getBody = () => self.getFirstOfTag("body");

    self.events = {};
    self.events.resize = (func) => window.addEventListener('resize', func, true);
    self.events.keyup = (func) => window.addEventListener('keyup', func, true);
    self.events.keydown = (func) => window.addEventListener('keydown', func, true);

    return self;
})();

// Canvas helpers
const canvas = (function() {
    let self = {};
    self.instance = null;
    self.context = null;
    self.clear_color = "#000000"

    self.init = () => {
        // Scaffold full window canvas
        self.instance = document.createElement('canvas');
        self.instance.id = "engine";
        dom.getBody().appendChild(self.instance);
        self.context = self.instance.getContext("2d");
        self.resize();
    }

    // Resize to the window size
    self.resize = () => {
        self.context.width = window.innerWidth;
        self.context.height = window.innerHeight;
        self.instance.setAttribute("width", self.context.width);
        self.instance.setAttribute("height", self.context.height);
        self.clear();
    };

    self.size = () => {
        return {
            x: self.context.width,
            y: self.context.height
        };
    }

    self.clear = () => {
        self.context.fillStyle = self.clear_color;
        self.context.fillRect(0, 0, self.size().x, self.size().y);
    };

    dom.events.resize(self.resize);

    // Public getter
    self.ctx = () => self.context;

    self.init();
    return self;
})();
const ctx = () => canvas.ctx();


class Vector {
    constructor(_x = 0, _y = 0) {
        this.x = _x;
        this.y = _y;
    }

    static isVector(obj) {
        return (obj) instanceof Vector;
    }

    clone() {
        return new Vector(this.x, this.y);
    }

    add(_addition) {
        return Vector.isVector(_addition) 
            ? new Vector(this.x + _addition.x, this.y + _addition.y)
            : new Vector(this.x + _addition, this.y + _addition);
    }

    substract(_substraction) {
        return Vector.isVector(_substraction) 
            ? new Vector(this.x - _substraction.x, this.y - _substraction.y)
            : new Vector(this.x - _substraction, this.y - _substraction);
    }

    multiply(_multiplier) {
        return Vector.isVector(_multiplier) 
            ? new Vector(this.x * _multiplier.x, this.y * _multiplier.y)
            : new Vector(this.x * _multiplier, this.y * _multiplier);
    }

    divide(_divider) {
        return Vector.isVector(_divider) 
            ? new Vector(this.x / _divider.x, this.y / _divider.y)
            : new Vector(this.x / _divider, this.y / _divider);
    }

    equals(other) {
        return this.x == other.x && this.y == other.y;
    }

    align_to_grid(_gridDimensions) {
        return Vector.isVector(_gridDimensions)
            ? new Vector(this.x - (this.x % _gridDimensions.x), this.y - (this.y % _gridDimensions.y))
            : new Vector(this.x - (this.x % _gridDimensions), this.y - (this.y % _gridDimensions));
    }

    toString(){
        return `X: ${this.x} Y: ${this.y}`;
    }
}
Vector.up = new Vector(0, -1);
Vector.down = new Vector(0, 1);
Vector.left = new Vector(-1, 0);
Vector.right = new Vector(1, 0);

class Element {
    constructor() {
        this.style = "#AA00AA";
        this.position = new Vector(0, 0);
        this.velocity = new Vector(0, 0);
    }
    apply_velocity(delta) {
        this.position = this.position.add(this.velocity.multiply(delta));
    }
    wrap_screen() {
        this.position.x = this.position.x % canvas.size().x;
        this.position.y = this.position.y % canvas.size().y;
        while(this.position.x < 0) {
            this.position.x += canvas.size().x;
        }
        while(this.position.y < 0) {
            this.position.y += canvas.size().y;
        }
    }
    update(delta) {
        this.apply_velocity(delta);
    }
    draw() {
        Error('Draw function needs to be defined')
    }
};

class Rectangle extends Element {
    constructor() {
        super();
        this.width = 0;
        this.height = 0;
        this.velocity = new Vector(0, 0);
    }

    update(delta) {
        super.update(delta);
        this.wrap_screen();
    }

    draw(delta) {
        ctx().fillStyle = this.style;
        ctx().fillRect(this.position.x, this.position.y, this.width, this.height);
    }
};

class Trail extends Rectangle {
    constructor(_position) {
        super();
        this.position = _position;
        this.width = 40;
        this.height = 40;
        this.style="#FF00BB";
    }
    update(delta) {
        super.update(delta);
    }
}

class Snake extends Element {
    constructor() {
        super();
        this.width = this.height = 50;
        this.segments = [];
        this.trail_length = 3;

        dom.events.keydown((key) => this.switch_direction(key));

        this.speed = 350;

        this.direction = Vector.right;
        this.velocity = this.direction.multiply(this.speed);
        console.log(['player', this]);
    }

    trail(){
        // Trail which follows player
        let grid_aligned_position = this.position.align_to_grid(this.width);
        if(this.segments.filter(x => x.position.equals(grid_aligned_position)).length == 0) {
            this.segments.push(new Trail(grid_aligned_position));
        }
        // Limit trail to the specific length
        while(this.segments.length > this.trail_length) {
            this.segments.shift();
        }
    }

    switch_direction(key_event) {
        switch(key_event.key) {
            case 'ArrowUp':
                this.direction = this.direction.equals(Vector.down) ? Vector.down : Vector.up;
                break;
            case 'ArrowDown':
                this.direction = this.direction.equals(Vector.up) ? Vector.up: Vector.down;
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
        super.draw(delta);
        this.segments.forEach(segment => segment.draw(delta));
    }

    update(delta) {
        super.update(delta);
        this.wrap_screen();
        this.trail();
        this.segments.forEach(segment => segment.update(delta));
    }
};


const engine = (function() {
    this.elements = [];
    // Draw background
    this.draw = (delta) => {
        canvas.clear();
        // Update all of the elements, then draw them
        this.elements.forEach(e => e.update(delta));
        this.elements.forEach(e => e.draw(delta));
    }

    // Being a time lord here
    let last_tick = performance.now();
    self.total_time = 0;
    this.ticker = () => {
        // Aiming for 60fps
        setInterval(() => {
            let this_tick = performance.now();
            let delta = this_tick - last_tick;
            last_tick = this_tick;
            total_time += delta;
            this.draw(delta / 1000);
        }, 1000 / 60);
    }

    this.init = () => {
        this.ticker();
        // Register player
        var snake = new Snake();
        this.elements.push(snake);
    };

    this.init();
    return this;
})();