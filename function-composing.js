const compose2 = (f, g) => x => f(g(x)); // • operator

const increment = n => n + 1; // f(n)
const double = n => n * 2 // g(n)

const doubleInc = compose2(increment, double); // h(n)
doubleInc(5) // 11