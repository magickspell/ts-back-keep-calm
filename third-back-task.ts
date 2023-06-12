type inputsT = '{' | '}' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';

class ThirdBackTask {
  public static getResult(input: string): string {
    let result: string[] = [];
    let stack: string[] = [];
    
    for (let char of input) {
      if (char === "}") {
        let innerStack: string[] = [];

        while (stack[stack.length - 1] !== "{") {
          innerStack.unshift(stack.pop()!);
        }

        stack.pop();

        let repeatCount = parseInt(stack.pop()!);

        for (let j = 0; j < repeatCount; j++) {
          result.push(...innerStack);
        }

        if (stack.length === 0) {
          stack = result;
          result = [];
        } else {
          stack.push(...result);
          result = [];
        }
      } else {
        stack.push(char);
      }
    }

    const isResultContainsChars = stack.filter((char) => {
      if (char === '{' || char === '}') {
        return char;
      }
    }).length > 0;

    const isStackEmpty = stack.join('').length === 0;

    return isResultContainsChars || isStackEmpty ? 'you input wrong string' : stack.join('');
  }
}

console.log(ThirdBackTask.getResult("2{4}3{23}")); // 3
console.log(ThirdBackTask.getResult("4{93{2}}")); // 5
console.log(ThirdBackTask.getResult("4{")); // 'you input wrong string'
console.log(ThirdBackTask.getResult("4{}")); // 'you input wrong string'