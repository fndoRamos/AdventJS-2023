function drawGift(size, symbol) {
    let result = ''
    let counter = 1
    const repeatS = '#'.repeat(size)
    
    for (let i = 1; i < size * 2; i++) {
      if(i === 1) {
        result += ' '.repeat(size - 1) + repeatS + '\n'
      }else if (i === size) {
        result += repeatS + symbol.repeat(size - 2) + '#' + '\n'
      }else if (i === size * 2 - 1) {
        result += repeatS + '\n'
      }else if (i < size) {
        result += ' '.repeat(size - i) + '#' + symbol.repeat(size - 2) 
        + '#' + symbol.repeat(i - 2) + '#' + '\n'
      }else {
        result += '#' + symbol.repeat(size - 2) + '#' 
        + symbol.repeat(size - 2 - counter) + '#' + '\n'
        counter++
      }
    }
    return result
  }