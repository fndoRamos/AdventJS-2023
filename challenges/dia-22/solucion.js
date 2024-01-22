function compile(code) {
    let count = 0
    let returnPoint = 0
  
    for (let i = 0; i < code.length; i++) {
      if (code[i] === '¿') {
        const match = code.slice(i).match(/¿(.*?)\?/)[1]
        if (count > 0) {
          for (const m of match) {
            returnPoint += [0, count][+(m === '%')]
            count += [0, 1][+(m === '+')]
            count *= [1, 2][+(m === '*')]
            count += [0, -1][+(m === '-')]
            count += [0, count - returnPoint][+(m === '<')]
          }
        }
        i += match.length + 1
      }
      returnPoint += [0, count][+(code[i] === '%')]
      count += [0, 1][+(code[i] === '+')]
      count *= [1, 2][+(code[i] === '*')]
      count += [0, -1][+(code[i] === '-')]
      count += [0, count - returnPoint][+(code[i] === '<' && returnPoint !== 0)]
    }
    return count
  }
  
  console.log(compile('++¿+?¿+?¿+?'))