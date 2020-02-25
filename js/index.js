class Main {
    constructor() {
        this._init()
    }

    _initGame() {
        this._game = new Game()
        this._run()
    }

    _init() {
        let promises = []
        window.imagePool = {}
        for (const name in IMAGE) {
            if (IMAGE.hasOwnProperty(name)) {
                promises.push(new Promise((reslove, reject) => {
                    const base64 = IMAGE[name];
                    let img = new Image()
                    img.src = base64
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
            this._error(err)
        })
    }

    _run() {
        this._game.run()
    }

    _error(err) {
        console.log('err', err)
    }

}