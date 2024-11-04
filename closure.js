const cl = msg => x => console.log(msg,x)
const createCounter = () => {
    let count = 0;
    return () => {
        count = count + 1;
        return count;
    }
}

/*
counter1 and counter2 have access to lexical scope where the
return ()=>{} function declared, even createCounter returned
*/

const counter1 = createCounter();
const counter2 = createCounter();
cl('counter1')(counter1()); // 1 
cl('counter2')(counter2()); // 1

let capturedCount = counter1(); // 3
capturedCount = capturedCount + 39; //41
cl('capturedCount')(capturedCount);

cl('counter1')(counter1()); // 3
cl('counter2')(counter2()); // 2
