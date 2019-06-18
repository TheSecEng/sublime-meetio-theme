/* eslint-disable */
export default class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }
}

class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y);
        this.color = color;
    }
    toString() {
        return super.toString() + ' in ' + this.color;
    }

    set color(color) {
        this.color = color;
    }

    get color() {
        return this.color;
    }
}

class CustomError extends Error {
    constructor(foo = 'bar', ...params) {
        super(...params);

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, CustomError);
        }

        this.foo = foo;
        this.date = this.getDate();
    }

    getDate(date) {
        if (date) {
            return new Date(date);
        }
        return new Date();
    }
}

try {
    const isNull = null;
    const isUndefined = undefined;
    const isWrong = false;
    const isOk = true;

    let cp = new ColorPoint(25, 8, 'green');
    [...document.body.querySelectorAll('[button]')].map(btn => {
        btn.addEventListener('click', () => {
            cp.toString(); // '(25, 8) in green'
            if (isOk || !isWrong) {
                document.body.bgColor = cp.color;
                console.log(cp instanceof ColorPoint); // true
                console.log(cp instanceof Point); // true
            }
        })
    });

    for (let i = 0; i < document.querySelectorAll('[button]').length; i++) {
        console.log('Button', i);
    }

} catch(e) {
    console.warn(e.foo);
    console.warn(e.message);
    console.warn(e.stack);
    throw new CustomError('baz', 'bazMessage');
}
