function drawClock(time) {
    const t = time.replace(':', '')
    let iterator = 0
    const resultArr = [
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '*', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '*', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
    ]
    for (const n of t) {
      iterator = [iterator, iterator + 2][+(iterator === 8)]
      switch (n) {
        case '0':
          resultArr[0][iterator + 0] = '*'
          resultArr[0][iterator + 1] = '*'
          resultArr[0][iterator + 2] = '*'
  
          resultArr[1][iterator + 0] = '*'
          resultArr[1][iterator + 2] = '*'
  
          resultArr[2][iterator + 0] = '*'
          resultArr[2][iterator + 2] = '*'
  
          resultArr[3][iterator + 0] = '*'
          resultArr[3][iterator + 2] = '*'
  
          resultArr[4][iterator + 0] = '*'
          resultArr[4][iterator + 2] = '*'
  
          resultArr[5][iterator + 0] = '*'
          resultArr[5][iterator + 2] = '*'
  
          resultArr[6][iterator + 0] = '*'
          resultArr[6][iterator + 1] = '*'
          resultArr[6][iterator + 2] = '*'
          iterator += 4
          break
        case '1':
          resultArr[0][iterator + 2] = '*'
  
          resultArr[1][iterator + 2] = '*'
  
          resultArr[2][iterator + 2] = '*'
  
          resultArr[3][iterator + 2] = '*'
  
          resultArr[4][iterator + 2] = '*'
  
          resultArr[5][iterator + 2] = '*'
  
          resultArr[6][iterator + 2] = '*'
          iterator += 4
          break
        case '2':
          resultArr[0][iterator + 0] = '*'
          resultArr[0][iterator + 1] = '*'
          resultArr[0][iterator + 2] = '*'
  
          resultArr[1][iterator + 2] = '*'
  
          resultArr[2][iterator + 2] = '*'
  
          resultArr[3][iterator + 0] = '*'
          resultArr[3][iterator + 1] = '*'
          resultArr[3][iterator + 2] = '*'
  
          resultArr[4][iterator + 0] = '*'
  
          resultArr[5][iterator + 0] = '*'
  
          resultArr[6][iterator + 0] = '*'
          resultArr[6][iterator + 1] = '*'
          resultArr[6][iterator + 2] = '*'
          iterator += 4
          break
        case '3':
          resultArr[0][iterator + 0] = '*'
          resultArr[0][iterator + 1] = '*'
          resultArr[0][iterator + 2] = '*'
  
          resultArr[1][iterator + 2] = '*'
  
          resultArr[2][iterator + 2] = '*'
  
          resultArr[3][iterator + 0] = '*'
          resultArr[3][iterator + 1] = '*'
          resultArr[3][iterator + 2] = '*'
  
          resultArr[4][iterator + 2] = '*'
  
          resultArr[5][iterator + 2] = '*'
  
          resultArr[6][iterator + 0] = '*'
          resultArr[6][iterator + 1] = '*'
          resultArr[6][iterator + 2] = '*'
          iterator += 4
          break
        case '4':
          resultArr[0][iterator + 0] = '*'
          resultArr[0][iterator + 2] = '*'
  
          resultArr[1][iterator + 0] = '*'
          resultArr[1][iterator + 2] = '*'
  
          resultArr[2][iterator + 0] = '*'
          resultArr[2][iterator + 2] = '*'
  
          resultArr[3][iterator + 0] = '*'
          resultArr[3][iterator + 1] = '*'
          resultArr[3][iterator + 2] = '*'
  
          resultArr[4][iterator + 2] = '*'
  
          resultArr[5][iterator + 2] = '*'
  
          resultArr[6][iterator + 2] = '*'
          iterator += 4
          break
        case '5':
          resultArr[0][iterator + 0] = '*'
          resultArr[0][iterator + 1] = '*'
          resultArr[0][iterator + 2] = '*'
  
          resultArr[1][iterator + 0] = '*'
  
          resultArr[2][iterator + 0] = '*'
  
          resultArr[3][iterator + 0] = '*'
          resultArr[3][iterator + 1] = '*'
          resultArr[3][iterator + 2] = '*'
  
          resultArr[4][iterator + 2] = '*'
  
          resultArr[5][iterator + 2] = '*'
  
          resultArr[6][iterator + 0] = '*'
          resultArr[6][iterator + 1] = '*'
          resultArr[6][iterator + 2] = '*'
          iterator += 4
          break
        case '6':
          resultArr[0][iterator + 0] = '*'
          resultArr[0][iterator + 1] = '*'
          resultArr[0][iterator + 2] = '*'
  
          resultArr[1][iterator + 0] = '*'
  
          resultArr[2][iterator + 0] = '*'
  
          resultArr[3][iterator + 0] = '*'
          resultArr[3][iterator + 1] = '*'
          resultArr[3][iterator + 2] = '*'
  
          resultArr[4][iterator + 0] = '*'
          resultArr[4][iterator + 2] = '*'
  
          resultArr[5][iterator + 0] = '*'
          resultArr[5][iterator + 2] = '*'
  
          resultArr[6][iterator + 0] = '*'
          resultArr[6][iterator + 1] = '*'
          resultArr[6][iterator + 2] = '*'
          iterator += 4
          break
        case '7':
          resultArr[0][iterator + 0] = '*'
          resultArr[0][iterator + 1] = '*'
          resultArr[0][iterator + 2] = '*'
  
          resultArr[1][iterator + 2] = '*'
  
          resultArr[2][iterator + 2] = '*'
  
          resultArr[3][iterator + 2] = '*'
  
          resultArr[4][iterator + 2] = '*'
  
          resultArr[5][iterator + 2] = '*'
  
          resultArr[6][iterator + 2] = '*'
          iterator += 4
          break
        case '8':
          resultArr[0][iterator + 0] = '*'
          resultArr[0][iterator + 1] = '*'
          resultArr[0][iterator + 2] = '*'
  
          resultArr[1][iterator + 0] = '*'
          resultArr[1][iterator + 2] = '*'
  
          resultArr[2][iterator + 0] = '*'
          resultArr[2][iterator + 2] = '*'
  
          resultArr[3][iterator + 0] = '*'
          resultArr[3][iterator + 1] = '*'
          resultArr[3][iterator + 2] = '*'
  
          resultArr[4][iterator + 0] = '*'
          resultArr[4][iterator + 2] = '*'
  
          resultArr[5][iterator + 0] = '*'
          resultArr[5][iterator + 2] = '*'
  
          resultArr[6][iterator + 0] = '*'
          resultArr[6][iterator + 1] = '*'
          resultArr[6][iterator + 2] = '*'
          iterator += 4
          break
        case '9':
          resultArr[0][iterator + 0] = '*'
          resultArr[0][iterator + 1] = '*'
          resultArr[0][iterator + 2] = '*'
  
          resultArr[1][iterator + 0] = '*'
          resultArr[1][iterator + 2] = '*'
  
          resultArr[2][iterator + 0] = '*'
          resultArr[2][iterator + 2] = '*'
  
          resultArr[3][iterator + 0] = '*'
          resultArr[3][iterator + 1] = '*'
          resultArr[3][iterator + 2] = '*'
  
          resultArr[4][iterator + 2] = '*'
  
          resultArr[5][iterator + 2] = '*'
  
          resultArr[6][iterator + 0] = '*'
          resultArr[6][iterator + 1] = '*'
          resultArr[6][iterator + 2] = '*'
          iterator += 4
          break
      }
    }
    return resultArr
  }
  
  // console.log(drawClock('01:30'))
  
  
  function drawClock2(time) {
    let result = []
    const numbers = [
      ['***', '* *', '* *', '* *', '* *', '* *', '***'],
      ['  *', '  *', '  *', '  *', '  *', '  *', '  *'],
      ['***', '  *', '  *', '***', '*  ', '*  ', '***'],
      ['***', '  *', '  *', '***', '  *', '  *', '***'],
      ['* *', '* *', '* *', '***', '  *', '  *', '  *'],
      ['***', '*  ', '*  ', '***', '  *', '  *', '***'],
      ['***', '*  ', '*  ', '***', '* *', '* *', '***'],
      ['***', '  *', '  *', '  *', '  *', '  *', '  *'],
      ['***', '* *', '* *', '***', '* *', '* *', '***'],
      ['***', '* *', '* *', '***', '  *', '  *', '***'],
    ]
  
    for(let i = 0; i < 7; i++) {
      result.push([numbers[time[0]][i].split(''), 
      ' ', numbers[time[1]][i].split(''), ' ',  
      [' ', '*'][+(i === 2 || i === 4)], ' ',  
      numbers[time[3]][i].split(''), ' ', 
      numbers[time[4]][i].split('')].flat()) 
    }
    return result
  }
  
  // console.log(drawClock2('01:30'))
  
  function drawClock3(time) {
    let result = []
    const range = new Array(7).keys()
    const numbers = [
      ['***', '* *', '* *', '* *', '* *', '* *', '***'],
      ['  *', '  *', '  *', '  *', '  *', '  *', '  *'],
      ['***', '  *', '  *', '***', '*  ', '*  ', '***'],
      ['***', '  *', '  *', '***', '  *', '  *', '***'],
      ['* *', '* *', '* *', '***', '  *', '  *', '  *'],
      ['***', '*  ', '*  ', '***', '  *', '  *', '***'],
      ['***', '*  ', '*  ', '***', '* *', '* *', '***'],
      ['***', '  *', '  *', '  *', '  *', '  *', '  *'],
      ['***', '* *', '* *', '***', '* *', '* *', '***'],
      ['***', '* *', '* *', '***', '  *', '  *', '***'],
    ]
  
    for(const i of range) {
      result.push([numbers[time[0]][i].split(''), 
      ' ', numbers[time[1]][i].split(''), ' ',  
      [' ', '*'][+(i === 2 || i === 4)], ' ',  
      numbers[time[3]][i].split(''), ' ', 
      numbers[time[4]][i].split('')].flat())
    }
    return result
  }
  
  console.log(drawClock3('01:30'))
  