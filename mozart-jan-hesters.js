const curry =
    (f, arr=[]) =>
        (...args) =>
            (a =>
                    (a.length >= f.length
                            ? f(...a)
                            : curry(f,a)
                    )
            )([
                ...arr,
                ...args
            ])

const add = curry((a, b) => a + b);
const multiply = a => b => a * b;

const inc = add(1);
const double = multiply(2)
const isEven = n => n % 2 === 0

const map = fn => arr => arr.map(fn);
const filter = pred => arr => arr.filter(pred);
const reduce = curry((fn, acc, arr) => arr.reduce(fn, acc));

const filterEven = filter(isEven);
const doubleMap = map(double);
const sum = reduce(add, 0);

const pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x, )

const mozart = pipe(filterEven, doubleMap, sum);

console.log(mozart([1,2,3,4,5]));





