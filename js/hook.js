class Hook {
    constructor() {
        this._x = 0
        this._y = 0
        this._width = 40
        this._height = 25
        this._angle = 0
        this._type = 'hook'
    }

    init(game) {
        this.game = game
        this.img = window.imagePool[this._type]
    }

    updatePos(pos, angle) {
        this._x = pos.x
        this._y = pos.y
        this._angle = angle - 90
    }
    
    render(context) {
        context.save()
        context.translate(this._x, this._y)
        context.rotate(angleToRadian(this._angle))
        context.translate(-this._x, -this._y)
        context.drawImage(this.img, this._x - this._width / 2, this._y - this._height / 10, this._width, this._height)
        context.restore()
    }
}