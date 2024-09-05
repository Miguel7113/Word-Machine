function solution(S) {
    const stack = [];
    const operations = S.split(' ');

    for (const op of operations) {
        if (/^\d+$/.test(op)) {
            // Push integer onto the stack
            stack.push(parseInt(op));
        } else if (op === 'POP') {
            // Remove topmost number from the stack
            if (stack.length === 0) return -1; // Error: stack underflow
            stack.pop();
        } else if (op === 'DUP') {
            // Duplicate topmost number and push it onto the stack
            if (stack.length === 0) return -1; // Error: stack underflow
            stack.push(stack[stack.length - 1]);
        } else if (op === '+') {
            // Add top two numbers and push the sum onto the stack
            if (stack.length < 2) return -1; // Error: stack underflow
            const sum = stack.pop() + stack.pop();
            if (sum >= Math.pow(2, 20)) return -1; // Error: overflow
            stack.push(sum);
        } else if (op === '-') {
            // Subtract second number from the first and push the difference onto the stack
            if (stack.length < 2) return -1; // Error: stack underflow
            const diff = stack.pop() - stack.pop();
            if (diff < 0) return -1; // Error: negative result
            stack.push(diff);
        }
    }

    if (stack.length === 0) return -1; // Error: empty stack
    return stack[stack.length - 1];
}

// Example usage:
console.log(solution("4 5 6 - 7 +")); // Should return 8
console.log(solution("13 DUP 4 POP 5 DUP + DUP + -")); // Should return 7
console.log(solution("5 6 + -")); // Should return -1
console.log(solution("3 DUP 5 - -")); // Should return -1
console.log(solution("1048575 DUP +")); // Should return -1  write a readme for this
