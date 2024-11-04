// const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x);
const compose =
    (...functions) =>
        initialValue =>
            functions.reduceRight(
                (accumulator, currentFunction) =>
                    currentFunction(accumulator),
                initialValue,
            );

const pipe =
    (...functions) =>
        initialValue =>
            functions.reduce(
                (accumulator, currentFunction) =>
                    currentFunction(accumulator),
                initialValue,
            );

const increment = n => n + 1;  //1. increment(3) = 3 + 1 = 4
const double = n => n * 2;     //2. double(4) = 2 * 4 = 8
const square = n => n * n;     //3. square(8) = 8 * 8 = 64

let incDoubleSquare = compose(square, double, increment);
console.log(incDoubleSquare(3)); // 64

let incDoubleSquarePipe = pipe(increment,double,square);
console.log(incDoubleSquarePipe(2)); // 36

// ------------------------------------------
// with tracing
const trace = msg => x => {console.log(msg,x); return x;}

incDoubleSquare = compose(square, trace('before square'), double, trace('before double'), increment);
console.log(incDoubleSquare(3));
/*
before double 4
before square 8
64
*/


incDoubleSquarePipe = pipe(increment, trace('before double'), double, trace('before square'), square);
console.log(incDoubleSquarePipe(2));
/*
before double 3
before square 6
36
*/





