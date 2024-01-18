function revealSabotage(store) {

    for (let i = 0; i < store.length; i++) {
      for (let j = 0; j < store[i].length; j++) {
        let count = 0
        if(store[i][j] === '*') {
          continue
        }
        count += [0, 1][+(store[i][j + 1] === '*')]
        count += [0, 1][+(store[i][j - 1] === '*')]
        count += [0, 1][+(store[i - 1]?.[j - 1] === '*')]
        count += [0, 1][+(store[i - 1]?.[j] === '*')]
        count += [0, 1][+(store[i - 1]?.[j + 1] === '*')]
        count += [0, 1][+(store[i + 1]?.[j - 1] === '*')]
        count += [0, 1][+(store[i + 1]?.[j] === '*')]
        count += [0, 1][+(store[i + 1]?.[j + 1] === '*')]
  
        store[i][j] = [`${count}`, ' '][+(count === 0)]
  
        //para quitar el if y restar complejidad cognitiva
        // store[i][j] = [
        //   [`${count}`, ' '][+(count === 0)], '*'
        //   ][+(store[i][j] === '*')]
      }
    }
    return store
  }
  
  console.log(revealSabotage([
    ['*', ' ', ' ', ' '],
    [' ', ' ', '*', ' '],
    [' ', ' ', ' ', ' '],
    ['*', ' ', ' ', ' ']
  ]))
  
  
  // sustituyendo for normal por for of para reducir complejidad cognitiva
  function revealSabotage(store) {
  
    for (const [i, row] of store.entries()) {
      for (const [j, toy] of row.entries()) {
        let count = 0
  
        count += [0, 1][+(store[i][j + 1] === '*')]
        count += [0, 1][+(store[i][j - 1] === '*')]
        count += [0, 1][+(store[i - 1]?.[j - 1] === '*')]
        count += [0, 1][+(store[i - 1]?.[j] === '*')]
        count += [0, 1][+(store[i - 1]?.[j + 1] === '*')]
        count += [0, 1][+(store[i + 1]?.[j - 1] === '*')]
        count += [0, 1][+(store[i + 1]?.[j] === '*')]
        count += [0, 1][+(store[i + 1]?.[j + 1] === '*')]
  
        store[i][j] = [
          [`${count}`, ' '][+(count === 0)], '*'
          ][+(store[i][j] === '*')]
      }
    }
    return store
  }