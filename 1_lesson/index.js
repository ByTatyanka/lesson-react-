// №1

let callback = (i = 0) => {
    console.log(i)
};

let loop = (times = 0, callback = null) => {
    if (callback !== null) {
        for (let i = 0; i < times; i++) {
            callback(i)
        }
    }
};

loop(5, callback);
// №2

let calculateArea = (figure, arg) => {

    triangle = (arr) => {

        let [a, b, c] = arr;
        if (a + b > c && a + c > b && b + c > a) {
            let p = (a + b + c) / 2;
            let s = Math.sqrt(p * (p - a) * (p - b) * (p - c));
            return {figure: 'triangle', arg: arr, s};
        }

    };

    box = (arr) => {
        let [a, b] = arr;
        if (a > 0 && b > 0) {
            return {figure: 'box', arg: arr, s: (a * b)};
        }
    };

    switch (figure) {
        case 'box':
            console.log(box(arg));
            break;
        case 'triangle':
            console.log(triangle(arg));
            break;
    }
}

calculateArea('box', [3, 4]);
calculateArea('box', [3, 3]);
calculateArea('triangle', [3, 4, 4]);