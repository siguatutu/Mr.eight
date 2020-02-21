class Point {
    constructor(x = 0, y = 0) {
        this._x = x
        this._y = y
    }

    get x() {
        return this._x
    }

    get y() {
        return this._y
    }

    inside(rect) {
        return (this.x > rect.x && 
                this.y > rect.y &&
                this.x < rect.x + rect.width && 
                this.y < rect.y + rect.height)
    }
}