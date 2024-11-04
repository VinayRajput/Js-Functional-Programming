// https://youtu.be/xw5SJZnTWp4?t=1257

const mapNFilterUsingReduce = (array, mapFunction) =>
    array.reduce((accumulator, current) => [...accumulator, mapFunction(current)],[],)

const numbers = [1,2,3,4,5];
const doubled = mapNFilterUsingReduce(numbers, x => x * 2);
console.log(doubled)


// https://youtu.be/xw5SJZnTWp4?t=1288

const filterUsingReduce = (array, filterFunction) =>
    array.reduce(
        (accumulator, currentValue) =>
            (filterFunction(currentValue) ? [...accumulator, currentValue] : accumulator), [],
    );
const filtered = filterUsingReduce(numbers, x => x % 2 === 0)
console.log(filtered);
