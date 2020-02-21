class Rect {
    constructor(x = 0, y = 0, width = 0, height = 0) {
        this._topLeft = new Point(x, y)
        this._topRight = new Point(x + width, y)
        this._bottomLeft = new Point(x, y + height)
        this._bottomRight = new Point(x + width, y + height)
    }

    intersect() {
        // TODO two rectangle intersect
    }

    get isRect() {
        return true
    }

    get topLeft() {
        return this._topLeft
    }

    get topRight() {
        return this._topRight
    }

    get bottomLeft() {
        return this._bottomLeft
    }

    get bottomRight() {
        return this._bottomRight
    }

    get x() {
        return this._topLeft.x
    }

    get y() {
        return this._topLeft.y
    }

    get width() {
        return this._topRight.x - this._topLeft.x
    }

    get height() {
        return this._bottomLeft.y - this._topLeft.y
    }
}