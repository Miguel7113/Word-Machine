# Word-Machine

1. Problem Understanding
The word machine operates like a stack data structure, where:

Stack: A Last In, First Out (LIFO) data structure where the last element added is the first one removed.
Operations:
PUSH X: Adds (pushes) the integer X onto the stack.
POP: Removes the topmost element from the stack.
DUP: Duplicates the topmost element and pushes it onto the stack.
+: Pops the top two elements, adds them, and pushes the result.
-: Pops the top two elements, subtracts the second popped element from the first, and pushes the result.
2. Error Handling
Errors occur when:

Performing an operation that requires more elements than available on the stack.
Resulting numbers exceed the allowable range for a 20-bit unsigned integer (0 to 2^20 - 1).
Performing subtraction that results in a negative number.
The stack is empty after all operations are executed.
3. Solution Code
function solution(S) {
    const MAX_VALUE = (2 ** 20) - 1;
    let stack = [];
    let operations = S.split(" ");
}
- MAX_VALUE: This constant represents the maximum value allowed (2^20 - 1 = 1048575), used to check for overflow in addition.
- stack: Initializes an empty array that will act as the stack for our operations.
- operations: Splits the input string S by spaces to create an array of operations to process.

4. Iterating Through Operations
The loop goes through each operation one by one:
    for (let op of operations) {

## Handling Integer Operations
      
        if (!isNaN(op)) {
            let number = parseInt(op, 10);
            stack.push(number);
        }

- !isNaN(op): Checks if op is a number. If it is, it’s a PUSH operation.
- parseInt(op, 10): Converts the string op to an integer number.
- stack.push(number): Pushes this number onto the stack.

## Handling "POP" operation
        else if (op === "POP") {
            if (stack.length === 0) {
                return -1;
            }
            stack.pop();
        }

- op === "POP": Checks if the operation is "POP".
- stack.length === 0: Checks if the stack is empty before attempting to pop. If it’s empty, we return -1 indicating an error.
- stack.pop(): Removes the topmost element from the stack.

## Handling "DUP" Operation

        else if (op === "DUP") {
            if (stack.length === 0) {
                return -1;
            }
            stack.push(stack[stack.length - 1]);
        }
- op === "DUP": Checks if the operation is "DUP".
- stack.length === 0: Ensures the stack is not empty before duplicating the top element. Returns -1 if it is.
- stack.push(stack[stack.length - 1]): Duplicates the top element by pushing the current top element (last element in the array) onto the stack.

## Handling "+" Operation (Addition)

        else if (op === "+") {
            if (stack.length < 2) {
                return -1;
            }
            let top1 = stack.pop();
            let top2 = stack.pop();
            let result = top1 + top2;
            if (result > MAX_VALUE) {
                return -1;
            }
            stack.push(result);
        }

- op === "+": Checks if the operation is "+" (addition).
- stack.length < 2: Ensures at least two elements are present on the stack to perform addition. Returns -1 if there are fewer than two elements.
- stack.pop(): Pops the top two elements from the stack (top1 and top2).
- let result = top1 + top2: Calculates the sum.
result > MAX_VALUE: Checks for overflow. If the result exceeds MAX_VALUE, returns -1.
- stack.push(result): Pushes the sum back onto the stack.

## Handling "-" Operation (Subtraction)

        else if (op === "-") {
            if (stack.length < 2) {
                return -1;
            }
            let top1 = stack.pop();
            let top2 = stack.pop();
            let result = top1 - top2;
            if (result < 0) {
                return -1;
            }
            stack.push(result);
        }

- op === "-": Checks if the operation is "-" (subtraction).
- stack.length < 2: Ensures at least two elements are present on the stack to perform subtraction. Returns -1 if there are fewer than two elements.
- stack.pop(): Pops the top two elements from the stack (top1 and top2).
- let result = top1 - top2: Calculates the difference.
result < 0: Checks for underflow (negative result). If the result is negative, returns -1.
- stack.push(result): Pushes the difference back onto the stack.

## Handling Unknown Operations

        else {
            return -1;
        }
- else: If an operation is not recognized (which should not happen given the problem constraints), returns -1 as a fail-safe.

## Final Check and Return

    if (stack.length === 0) {
        return -1;
    }
    return stack[stack.length - 1];
}

- stack.length === 0: Checks if the stack is empty after all operations. If it is, returns -1.
- return stack[stack.length - 1]: If there are elements left on the stack, returns the topmost element as the result.


## Summary of Solution


- Initialization: Prepare the stack and operations list.

- Processing: Iterate through operations, modify the stack according to rules, and handle errors.

- Final Output: Return the topmost element or -1 if an error condition is met.

- This solution ensures all edge cases are covered, such as underflow, overflow, empty stacks, and invalid operations, making it robust and reliable for any valid input string as per the problem's constraints.





### AnotherWordMachine

This JavaScript function, solution(S), simulates a stack machine that processes a string of operations and returns the result based on the operations performed on a stack. The operations are space-separated and include basic stack operations like pushing numbers, popping the stack, duplicating the top value, and performing arithmetic operations (addition and subtraction). It handles edge cases such as stack underflows, overflow, and invalid results.

Operations
PUSH (a number): Pushes an integer onto the stack. If an operation is a number, it is pushed onto the stack.
POP: Removes the topmost number from the stack. If the stack is empty, it returns -1 as an error.
DUP: Duplicates the topmost number and pushes the duplicate onto the stack. If the stack is empty, it returns -1.
+ (ADD): Pops the top two numbers, adds them, and pushes the result onto the stack. If the sum exceeds 2^20 or if there are fewer than two numbers on the stack, it returns -1.
- (SUBTRACT): Pops the top two numbers, subtracts the first popped number from the second popped number, and pushes the result onto the stack. If the result is negative or if there are fewer than two numbers on the stack, it returns -1.
The function will return -1 for any invalid operation, including stack underflows, overflow, and negative results from subtraction. Otherwise, it returns the topmost number on the stack after processing all operations.


function solution(S)

Parameters:
S (string): A space-separated string of operations and integers.
Returns:
(integer): The topmost number on the stack if all operations are valid, or -1 if an error occurs.
Constraints
Each operation is space-separated.
Integer values can be pushed onto the stack.
Overflow occurs if the sum of two numbers exceeds 2^20 (1,048,576).
Stack underflow occurs when trying to perform operations (e.g., POP, DUP, +, -) without sufficient numbers on the stack.


console.log(solution("4 5 6 - 7 +")); // Returns 8
console.log(solution("13 DUP 4 POP 5 DUP + DUP + -")); // Returns 7
console.log(solution("5 6 + -")); // Returns -1 (error due to stack underflow)
console.log(solution("3 DUP 5 - -")); // Returns -1 (error due to negative result)
console.log(solution("1048575 DUP +")); // Returns -1 (error due to overflow)

Edge Cases
Overflow: The sum of two numbers exceeds 1,048,576.
Underflow: Insufficient numbers on the stack to perform an operation.
Negative result: Subtraction yields a negative result.
Error Handling
The function handles multiple error conditions:

Stack underflow (attempting to operate on an empty or insufficient stack).
Overflow (sum exceeds the maximum allowed value).
Negative results from subtraction. If any of these errors occur, the function immediately returns -1.
