class Scene {
    constructor(game) {
        this.game = game
        this.underLineY = this.game.height / 8 + 75
        this._elements = []
        this._init()
    }

    _init() {
        this._initBackground()
    }

    _initBackground() {
        this.backgroundTop = window.imagePool['backgroundTop']
        this.backgroundBottom = window.imagePool['backgroundBottom']
    }

    _renderBackground(context) {
        context.save()
        context.drawImage(this.backgroundTop, 0, 0, this.game.width, this.underLineY)
        context.drawImage(this.backgroundBottom, 0, this.underLineY, this.game.width, this.game.height - this.underLineY)
        context.restore()
    }

    addElement(ele) {
        this._elements.push(ele)
    }

    get elements() {
        return this._elements
    }

    render(context) {
        this._renderBackground(context)
        this.elements.forEach((element) => {
            element.render(context)
        })
    }
}