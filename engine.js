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

    add(_addition) {
        let t = new Vector(this.x, this.y);
        if (Vector.isVector(_addition)) {
            t.x += _addition.x;
            t.y += _addition.y;
        } else {
            t.x += _addition;
            t.y += _addition;
        }
        return t;
    }

    multiply(_multiplier) {
        let t = new Vector(this.x, this.y);
        if (Vector.isVector(_multiplier)) {
            let t = new Vector(this.x, this.y)
            t.x *= _multiplier.x;
            t.y *= _multiplier.y;
        } else {
            t.x *= _multiplier;
            t.y *= _multiplier;
        }
        return t;
    }
}

class Element {
    constructor() {
        this.style = "#AA00AA";
        this.position = new Vector();
        console.log(this.position);
        this.width = 10;
        this.height = 10;

        this.velocity = new Vector();
    }
    apply_velocity(delta) {
        this.position = this.position.add(this.velocity.multiply(delta));
    }
    draw() {
        Error('Draw function needs to be defined')
    }
};

class Rectangle extends Element {
    constructor() {
        super();
        this.width = 60;
        this.height = 60;
        this.velocity = new Vector(50, 50);
    }
    wrap_screen() {
        this.position.x = this.position.x % canvas.size().x;
        this.position.y = this.position.y % canvas.size().y;
    }

    update(delta) {
        this.apply_velocity(delta);
        this.wrap_screen();
    }

    draw(delta) {
        ctx().fillStyle = this.style;
        ctx().fillRect(this.position.x, this.position.y, this.width, this.height);
    }
};

class Player {
    constructor() {

    }

    draw(delta) {

    }

    update(delta) {

    }
}


const engine = (function() {
    this.elements = [];
    // Draw background
    this.draw = (delta) => {
        canvas.clear();
        // Update all of the elements, then draw them
        this.elements.forEach(e => e.update(delta));
        this.elements.forEach(e => e.draw(delta));
    }

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

        var player = new Rectangle();

        this.elements.push(player);
    };

    this.init();
    return this;
})();