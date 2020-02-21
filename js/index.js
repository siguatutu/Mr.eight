class Main {
    constructor() {
        this._init()
    }

    _initGame() {
        let miner = new Miner()
        this._game = new Game(miner)
        this._run()
    }

    _init() {
        let promises = []
        window.imagePool = {}
        for (const name in IMAGE) {
            if (IMAGE.hasOwnProperty(name)) {
                promises.push(new Promise((reslove, reject) => {
                    const imageUrl = IMAGE[name];
                    let img = new Image()
                    img.src = `../img/${imageUrl}`
                    img.onload = () => {
                        window.imagePool[name] = img
                        reslove()
                    }
                    img.onerror = (err) => reject(err)
                }))
            }
        }
        // 加载完图片再运行吧    TODO 懒加载图片
        Promise.all(promises).then(() => {
            this._initGame()
        }).catch((err) =>{
            this._error()
        })
    }

    _run() {
        this._game.run()
    }

    _error() {
        console.log('err')
    }

}