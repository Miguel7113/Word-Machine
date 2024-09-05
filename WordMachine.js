function solution(S) {
    const MAX_VALUE = (2 ** 20) - 1; // Calculate the maximum value for a 20-bit unsigned integer
    let stack = [];
    let operations = S.split(" "); // Split the input string into an array of operations

    for (let op of operations) {
        if (!isNaN(op)) { // Check if the operation is a number
            let number = parseInt(op, 10);
            stack.push(number);
        } else if (op === "POP") { // Handle POP operation
            if (stack.length === 0) {
                return -1;
            }
            stack.pop();
        } else if (op === "DUP") { // Handle DUP operation
            if (stack.length === 0) {
                return -1;
            }
            stack.push(stack[stack.length - 1]);
        } else if (op === "+") { // Handle + operation
            if (stack.length < 2) {
                return -1;
            }
            let top1 = stack.pop();
            let top2 = stack.pop();
            let result = top1 + top2;
            if (result > MAX_VALUE) { // Check for overflow
                return -1;
            }
            stack.push(result);
        } else if (op === "-") { // Handle - operation
            if (stack.length < 2) {
                return -1;
            }
            let top1 = stack.pop();
            let top2 = stack.pop();
            let result = top1 - top2;
            if (result < 0) { // Check for underflow
                return -1;
            }
            stack.push(result);
        } else { // Invalid operation
            return -1;
        }
    }

    if (stack.length === 0) {
        return -1; // Return -1 if the stack is empty after all operations
    }
    return stack[stack.length - 1]; // Return the topmost value of the stack
}

// Example usage with console log statements
console.log(solution("4 5 6 - 7 +")); // Expected output: 8
console.log(solution("13 DUP 4 POP 5 DUP + DUP + -")); // Expected output: 7
console.log(solution("5 6 + -")); // Expected output: -1
console.log(solution("3 DUP 5 - -")); // Expected output: -1
console.log(solution("1048575 DUP +")); // Expected output: -1
