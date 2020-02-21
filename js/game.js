class Game {
    constructor(miner) {
        this.miner = miner
        this._init()
    }

    _init() {
        this._canvas = document.querySelector('#canvas')
        this._canvas.style['width'] = '95%'
        this._canvas.style['height'] = '95%'
        this._canvas.style['margin'] = 'auto'
        this._canvas.style['margin-top'] = '1%'
        this._context = this._canvas.getContext('2d')
        document.body.appendChild(this._canvas)
        this._width = this._canvas.clientWidth
        this._height = this._canvas.clientHeight

        this.miner.init(this)
    }

    setRatio() {
        
    }

    run() {
        const loop = () => {
            console.log('run')
            // this._clear()
            // this._drawBackground()
            this._render()
            requestAnimationFrame(loop)
        }
        requestAnimationFrame(loop)
    }

    _render() {
        this.miner.render(this.context)
    }

    _clear() {
        this.context.clearRect(0, 0, this.width, this.height)
    }

    _drawBackground() {
        this.context.fillStyle = '#D6F8FF'
        this.context.fillRect(0, 0, this.width, this.height)
    }

    get canvas() {
        return this._canvas
    }

    get context() {
        return this._context
    }

    get width() {
        return this._width
    }

    get height() {
        return this._height
    }
}