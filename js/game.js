class Game {
    constructor() {
        this._init()
    }

    _init() {
        // listening window resize 
        window.onresize = () => this._resetSize()

        this._elementCreator = new ElementCreator()

        // initialize
        this._initCanvas()

        this._initScene()

        this._initMiner()

        this._initRopes()

        this._initLevel()
    }

    _initCanvas() {
        this._canvas = document.querySelector('#canvas')
        this._resetSize()
        this._canvas.style['margin'] = 'auto'
        this._canvas.style['margin-top'] = document.body.clientHeight * 0.01
        this._context = this._canvas.getContext('2d')
        document.body.appendChild(this._canvas)
        this._width = this._canvas.clientWidth
        this._height = this._canvas.clientHeight
    }

    _initScene() {
        this.scene = new Scene(this)
    }

    _initMiner() {
        let miner = new Miner()
        miner.init(this)
        let x = this.width / 2 - miner.width / 2
        let y = this.height / 8 - miner.height / 2
        miner.initPos(x, y)
        this.scene.addElement(miner)
    }

    _initRopes() {
        let ropeControl = new RopeControl()
        ropeControl.init(this)
        let x = this.width / 2.22
        let y = this.width / 9.7
        ropeControl.initPos(x, y)
        this.scene.addElement(ropeControl)

        let hook = new Hook()
        hook.init(this)
        this.scene.addElement(hook)

        let rope = new Rope(hook)
        rope.init(this)
        rope.initHead(x, y)
        this.scene.addElement(rope)
    }

    _initLevel() {
        let currentLevel = LEVEL['1']
        Object.keys(currentLevel).forEach((type) => {
            let option = currentLevel[type]
            let end = option.range[0] + Math.floor(Math.random() * (option.range[1] - option.range[0]))
            // let config = option.config
            for (let i = 0; i < end; i++) {
                this._initElement(type)
            }
        })
        // this._initElement()
    }

    _initElement(type) {
        let element = this._createElement(type)
    }

    // _initDiamond() {
    //     let diamond = this._createElement('diamond')
    // }
    // _initGold() {
    //     let gold = this._createElement('gold')
    // }
    // _initPig() {
    //     let pig = this._createElement('pig')
    // }
    // _initStone() {
    //     let stone = this._createElement('stone')
    // }
    // _initPocket() {
    //     let pocket = this._createElement('pocket')
    // }

    setRatio() {
        
    }

    _resetSize(){
        this._canvas.width = document.body.clientWidth * 0.95
        this._canvas.height = document.body.clientHeight * 0.95
        this._width = this._canvas.clientWidth
        this._height = this._canvas.clientHeight
    }

    _createElement(type) {
        let element = this._elementCreator.createElement(type)
        element.init(this)
        this.scene.addElement(element)
        return element
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
        let context = this._context
        context.save()
        this.scene.render(context)
        context.restore()
    }

    _clear() {
        let context = this._context
        context.save()
        context.clearRect(0, 0, this.width, this.height)
        context.restore()
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