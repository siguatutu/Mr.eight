// range表示生成个数范围, [0, 5]代表生成0 - 5个element
// config表示生成element大小, 以及各大小的概率
const LEVEL = {
    1: {
        gold: {
            range: [5, 5],
            config: {
                small: 0.2,
                normal: 0.5,
                big: 0.2,
                biggest: 0.1,
            }
        },
        stone: {
            range: [5, 5],
            config: {
                normal: 0.2,
                big: 0.5,
                biggest: 0.3,
            }
        },
        pig: {
            range: [0, 0],
            config: {
                normal: 1,
            }
        },
        pigWithDiamond: {
            range: [0, 0],
            config: {
                normal: 1,
            }
        },
        diamond: {
            range: [0, 0],
            config: {
                normal: 1,
            }
        },
        pocket: {
            range: [0, 1],
            config: {
                normal: 1,
            }
        },
    },
    2: {

    },
}