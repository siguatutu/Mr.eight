class RopeControl {
    constructor() {
        this._x = 0
        this._y = 0
        this._width = 100
        this._height = 80
        this._type = 'ropeControl'
        this._img = window.imagePool[this._type]
    }

    init(game) {
        this.game = game
        this.img = window.imagePool[this._type]
    }

    initPos(x, y) {
        this._x = x - this._width / 2
        this._y = y - this._height / 2
    }

    render(context) {
        context.save()
        context.drawImage(this.img, this._x, this._y, this._width, this._height)
        context.restore()
    }
}