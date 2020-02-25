class Rope {
    constructor(hook) {
        this._head = new Point()
        this._end = new Point()
        this._angle = 30
        this._increment = 1
        this._width = 4
        this._length = 30
        this.hook = hook
        this.init()
    }

    init(game) {
        this.game = game
        // this.img = window.imagePool[this._type]
    }

    initHead(x, y) {
        this._head.x = x
        this._head.y = y
    }

    render(context) {
        context.save()
        context.translate(this._head.x, this._head.y)
        context.rotate(angleToRadian(this._angle))
        context.translate(-this._head.x, -this._head.y)
        context.fillStyle = 'rgba(51, 51, 51, 1)'
        context.fillRect(this._head.x, this._head.y, this._length, this._width)
        context.restore()
        this._update()
    }

    _update() {
        if (this._angle <= 10) this._increment = 1
        if (this._angle >= 150) this._increment = -1
        this._angle += this._increment
        this._updateEnd()
    }

    _updateEnd() {
        let x = this._length * Math.cos(angleToRadian(this._angle))
        let y = this._length * Math.sin(angleToRadian(this._angle))
        this._end.x = this._head.x + x - this._width / 2
        this._end.y = this._head.y + y
        this.hook.updatePos(this._end, this._angle)
    }

    get width() {
        return this._width
    }

    get height() {
        return this._height
    }
}