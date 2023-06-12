class SecondBackTask {
  public static getResult(a: number, b: number): number {
    if (a < 1 || b < 1 || a > 1000000000 || b > 1000000000) {
      throw new Error('you input wrong number!');
    }

    let result = 1;

    for (let i = 1; i <= b; i++) {
      result = (result * a) % 10;
    }

    return result;
  }
}

console.log(SecondBackTask.getResult(7, 3)); // 3
console.log(SecondBackTask.getResult(5, 123456789)); // 5
console.log(SecondBackTask.getResult(-1, 99)); // error