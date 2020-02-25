class ElementCreator {
    constructor() {
        // this._gold = 
    }

    createElement(type) {
        switch(type) {
            case 'diamond': return new Diamond(type);
            case 'stone': return new Stone(type);
            case 'pocket': return new pocket(type);
            case 'pig': return new Pig(type);
            case 'gold': return new Gold(type);
            default: console.error('error element type')
        }
    }
}