class Miner {
    constructor() {
        this._imgName = 'daoshilaoba'
    }

    init(game) {
        this._width = 100
        this._heigth = 100
        this._x = game.width / 2 - this._width
        this._y = game.height / 5 - this._heigth
        this._initImage()
    }
    
    _initImage() {
        this.img = window.imagePool[this._imgName]
        let canvas = document.createElement('canvas')
        canvas.width = this._width
        canvas.height = this._heigth
        let ctx = canvas.getContext('2d')
        ctx.drawImage(this.img, 0, 0, this._width, this._heigth)
        // document.body.appendChild(canvas)
        this.canvas = canvas
    }

    render(context) {
        context.save()
        context.translate(this._x, this._y)
        context.drawImage(this.canvas, 0, 0, this._width, this._heigth)
        // context.fillStyle = 'black'
        // context.fillRect(this._x, this._y, this._width, this._height)
        context.restore()
    }
}