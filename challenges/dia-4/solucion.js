//solucion 1
function decode(message) {
    while (message.includes('(')) {
      const lastIndexOfOP = message.lastIndexOf('(');
      const str = message.slice(lastIndexOfOP + 1);
      const firstIndexOfCP = str.indexOf(')');
      const strReversed = str
        .slice(0, firstIndexOfCP)
        .split('')
        .reverse()
        .join('');
      message = message.split('');
      message.splice(lastIndexOfOP, strReversed.length + 2, strReversed);
      message = message.join('');
    }
    return message;
  }

  //solucion 2
  function decode(message) {
    let stack = [];
    let result = '';
  
    for (let char of message) {
      if (char === '(') {
        stack.push(result);
        result = '';
      } else if (char === ')') {
        result = stack.pop() + result.split('').reverse().join('');
      } else {
        result += char;
      }
    }
    return result;
  }