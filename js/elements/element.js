class Element {
    constructor(type) {
        this._x = 0
        this._y = 0
        this._width = 0
        this._height = 0
        this._type = type
        this._img = window.imagePool[type]
    }

    init(game) {
        this._x = (game.width - this._width) * Math.random()
        this._y = (game.height - this._height) * ((Math.random() + 1) / 2)
    }
    render(context) {
        if (!this._img) { return }
        context.save()
        context.drawImage(this._img, this._x, this._y, this._width, this._height)
        context.restore()
    }
}