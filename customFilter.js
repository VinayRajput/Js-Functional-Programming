//https://youtu.be/xw5SJZnTWp4?t=1860

const filter = predicate => arr => arr.reduce(predicate,[]) ;
const numbers  = [1,2,3,4,5];

const condition1 = item => (item > 2) ? 1 : 0 // numbers bigger then 2
const condition2 = item => item % 2 === 0 // even numbers

const predicate = condition => (acc, cv) => condition(cv) ? [...acc,cv] : acc

// ---
const cl = msg => x => console.log(msg,x);
cl('condition1')(filter(predicate(condition1))(numbers)); // condition1 [ 3, 4, 5 ]
cl('condition2')(filter(predicate(condition2))(numbers)); // condition2 [ 2, 4 ]

