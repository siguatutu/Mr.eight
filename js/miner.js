class Miner {
    constructor() {
        this._type = 'daoshilaoba'
        this._width = 100
        this._height = 150
    }

    init() {
        this.img = window.imagePool[this._type]
    }
    
    initPos(x, y) {
        this._x = x
        this._y = y
    }

    render(context) {
        context.save()
        context.drawImage(this.img, this._x, this._y, this._width, this._height)
        context.restore()
    }

    get x() {
        return this._x
    }

    get y() {
        return this._y
    }

    get width() {
        return this._width
    }

    get height() {
        return this._height
    }
}