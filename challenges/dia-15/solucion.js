function autonomousDrive(store, movements) {
    const rowEnd = store[0].length - 1
    const rowStart = 0
    const columnEnd = store.length - 1;
    const columnStart = 0
    let robotColumI = store.findIndex(f => f.includes('!'))
    let robotRowI = store[robotColumI].indexOf('!')
    store[robotColumI] = store[robotColumI].replace('!', '.')
  
  
    for (const move of movements) {
      switch (move) {
        case 'L':
          if (robotRowI > rowStart && store[robotColumI][robotRowI - 1] !== '*') {
            robotRowI -= 1
          }
          break;
        case 'U':
        if (robotColumI > columnStart && store[robotColumI - 1][robotRowI] !== '*') {
          robotColumI -= 1
        }
        break
        case 'D':
          if (robotColumI < columnEnd && store[robotColumI + 1][robotRowI] !== '*') {
            robotColumI += 1
          }
          break
        default:
          if (robotRowI < rowEnd && store[robotColumI][robotRowI + 1] !== '*') {
            robotRowI += 1
          }
      }
    }
    store[robotColumI] = store[robotColumI].substring(0, robotRowI) 
    + '!' 
    + store[robotColumI].substring(robotRowI + 1)
    return store;
  }
  
  const store = [
    '..!....', 
    '...*.*.'
  ]
  const movements = ['R', 'R', 'D', 'L'];
  
  // console.log(autonomousDrive(store, movements));
  
  
  
  // intento de optimizacion
  function autonomousDrive2(store, movements) {
    let col = store.findIndex(f => f.includes('!'))
    let row = store[col].indexOf('!')
    const m = {
      "L": [-1, 0],
      "R": [1, 0],
      "U": [0, -1],
      "D": [0, 1]
    }
  
    store[col] = store[col].replace('!', '.')
  
    for (const move of movements) {
      const [mx, my] = m[move]
  
      row += mx * +(store.at(col + my)?.at(row + mx) == '.')
      col += my * +(store.at(col + my)?.at(row + mx) == '.')
    }
    store[col] = store[col].substring(0, row) + '!' 
    + store[col].substring(row + 1)
    return store;
  }
  
  const store1 = [
    '..!....', 
    '...*.*.'
  ]
  const movements1 = ['R', 'R', 'D', 'L'];
  
  console.log(autonomousDrive2(store1, movements1));
  