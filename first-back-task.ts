type actionsT = 'start' | 'connect' | 'message' | 'end';


class FirstBackTask {
  public static getResult(actions: actionsT[]) {
    if (!actions || actions.length < 4 || actions.length > 50) {
      return 0;
    }

    let result = 0;

    let isStart: boolean = false;
    let isConnect: boolean = false;
    let isMessage: boolean = false;
    let isEnd: boolean = false;

    for (const action of actions) {
      if (action === 'start') {
        isStart = true;
        isConnect = false;
        isMessage = false;
        isEnd = false;
      }

      if (action === 'connect') {
        if (isStart) {
          isConnect = true;
        } else {
          isStart = false;
          isConnect = false;
          isMessage = false;
          isEnd = false;
        }
      }

      if (action === 'message') {
        if (isStart && isConnect) {
          isMessage = true;
        } else {
          isStart = false;
          isConnect = false;
          isMessage = false;
          isEnd = false;
        }
      }

      if (action === 'end') {
        if (isStart && isConnect && isMessage) {
          isEnd = true;
        } else {
          isStart = false;
          isConnect = false;
          isMessage = false;
          isEnd = false;
        }
      }

      if (isStart && isConnect && isMessage && isEnd) {
        result++;
        isStart = false;
        isConnect = false;
        isMessage = false;
        isEnd = false;
      }
    }


    return result;
  }
}

console.log(FirstBackTask.getResult(["start", "connect", "message", "end"])); // 1
console.log(FirstBackTask.getResult(["start", "connect", "message", "end", "start", "connect", "message", "end", "start", "connect", "message"])); // 2
console.log(FirstBackTask.getResult(["start", "message", "end", "start", "connect", "message", "end", "start", "connect", "message"])); // 1