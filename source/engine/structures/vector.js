import "source/import"

export default class Vector {
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
        return Vector.isVector(_addition) ?
            new Vector(this.x + _addition.x, this.y + _addition.y) :
            new Vector(this.x + _addition, this.y + _addition);
    }

    substract(_substraction) {
        return Vector.isVector(_substraction) ?
            new Vector(this.x - _substraction.x, this.y - _substraction.y) :
            new Vector(this.x - _substraction, this.y - _substraction);
    }

    multiply(_multiplier) {
        return Vector.isVector(_multiplier) ?
            new Vector(this.x * _multiplier.x, this.y * _multiplier.y) :
            new Vector(this.x * _multiplier, this.y * _multiplier);
    }

    divide(_divider) {
        return Vector.isVector(_divider) ?
            new Vector(this.x / _divider.x, this.y / _divider.y) :
            new Vector(this.x / _divider, this.y / _divider);
    }

    equals(other) {
        return this.x == other.x && this.y == other.y;
    }

    align_to_grid(_gridDimensions) {
        return Vector.isVector(_gridDimensions) ?
            new Vector(this.x - (this.x % _gridDimensions.x), this.y - (this.y % _gridDimensions.y)) :
            new Vector(this.x - (this.x % _gridDimensions), this.y - (this.y % _gridDimensions));
    }

    toString() {
        return `X: ${this.x} Y: ${this.y}`;
    }
}
Vector.up = new Vector(0, -1);
Vector.down = new Vector(0, 1);
Vector.left = new Vector(-1, 0);
Vector.right = new Vector(1, 0);