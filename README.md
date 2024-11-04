### WHAT IS A STATEMENT
###### EXCEPT FUNCTION IF NOTICE {curly braces} in code its likey a statement

>A for loop that logs numbers 0 to 4.
><pre>for (let i = 0; i < 5; i++) {
>    console.log (1) ;
>}
></pre>

>- A while loop that decrements x and logs it until x is no longer greater than 0.
><pre>let x = 5
>while (x > 0) {
>   x—-;
>   console.log (x);
>}</pre>

> - Value assignment to variable
> <pre>const x = -19; 
> const color = 'blue'</pre>

> - An if...else statement that logs if x is positive or not.
> ``` 
> if (x > 0) {
>   console. log("x is positive");
>} else 1
>   console. log("x is zero or negative");
>} 
>```


> - A switch statement that handles different color cases.
> ```` 
> switch (color) {
>   case "red":
>       console.log ("Color is red");
>   break;
> 
>   case "blue":
>       console. log ("Color is blue"); 
>   break;
>
>   default:
>       console. log ("Color is not red or blue");
> }
> ````

> -  A try...catch block that handles errors from riskyFunction.
> ````
> try {
>   let result = riskyFunction();
> } catch (error) {
>   console.error(error);
> }
> 
> throw new Error ("Something went wrong"); // Throws a new error with a message.
> ````

--------------------------------------------


### WHAT IS AN EXPRESSION
###### Expression is a code which evaluates to a value
> - Literal expressions
> ```` 
> 42; // The number 42 is a literal expression.
> "Hello"; // The string "Hello" is a literal expression.
> ````

> - Arithmetic expressions
> ````
> 5 + 3; // Evaluates to 8.
> x * y; // Evaluates to the product of x and y.
> ````

> - Logical expressions
> ````
> true && false; // Evaluates to false.
> x || y; // Evaluates to x if x is true, otherwise y.
> ````

> - Function expressions
> ```` 
> const funcExpr = function() & return 42; 3; // Defines a function expression.
> const arrowFunc = () => 42; // Defines an arrow function expression.
> ````

> - Object and array initializers
> ````
> const objectInitializer = { name: "John", age: 30}: // Object initializer expression.
> const objectInitializer = [11, 2, 31]; // Array initializer expression.
> ````

> - Property access expressions
> ````
> obj.name; // Accesses the "name" property of 
> obj.array[0]; // Accesses the first element of array.
> ````

> - Function calls
> ````
> square(7); // Evaluates to 49.
> Math.max(4, 3, 2); // Evaluates to 4;
> ````

