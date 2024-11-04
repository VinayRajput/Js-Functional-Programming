const addUncurried = (a, b) => a + b;
const curry = (f, array = []) =>
    (...args) =>
        (a => (a.length >= f.length
                ? f(...a)
                : curry(f,a)
        ))([...array,...args,]);

/*
// Explained

const curry =
    (targetFunction, collectedArguments = []) => {
        return (...currentArguments) => {
            return (allArguments => {
                return (
                    allArguments.length >= targetFunction.length
                        ? targetFunction(...allArguments)
                        : curry(targetFunction, allArguments)
                )
            })([
                ...collectedArguments,
                ...currentArguments,
            ])
        }
    }*/

// NOTE: because of f. length, this implementation of 'curry' fails with
// functions that use default parameters.


const addCurried = curry(addUncurried);
// const increment = addCurried(2);
// console.log('increment',increment(4));
console.log('addCurried',addCurried(1,4)); // 5
console.log('addCurried',addCurried(1)(3)); // 4
