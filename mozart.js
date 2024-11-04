const numbers = [1,2,3,4,5];
const customFilter =
    arr => arr.reduce(
        (acc, cv) => cv % 2 === 0 ? [...acc, cv] : acc ,[],
    )

const trace = msg => x => {
    console.log(msg, x);
    return x;
}

const double = arr => arr.reduce((acc,cv) => [...acc,cv * 2],[],)
const curry = (f, arr = []) =>  (...args) =>
    (a => a.length >= f.length ? f(...args) : curry(f,a))([
        ...args,
        ...arr
    ])

const compose = (...fns) =>
    x => fns.reduce((acc, fn) => fn(acc), x, )

const sum = num => num.reduce((acc, cv) => acc + cv);
// console.log('nested',sum(double(customFilter(numbers))));

const mozart = compose(
    trace('before filter'),
    customFilter,
    trace('before double'),
    double,
    trace('before sum'),
    sum);

console.log('mozart',mozart(numbers));

