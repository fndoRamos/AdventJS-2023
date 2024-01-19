function distributeGifts(weights) {
    const result = []
  
    for (const [i, gifts] of weights.entries()) {
      result.push([])
      for (const [j, gift] of gifts.entries()) {
        let prom = [weights[i][j], 0][+(weights[i][j] === null)]
        let nullSum = 5
  
        prom += [weights[i][j + 1], 0][+(weights[i][j + 1] == null)]
        prom += [weights[i][j - 1], 0][+(weights[i][j - 1] == null)]
        prom += [weights[i - 1]?.[j], 0][+(weights[i - 1]?.[j] == null)]
        prom += [weights[i + 1]?.[j], 0][+(weights[i + 1]?.[j] == null)]
  
        nullSum -= [0, 1][+(weights[i][j] == null)]
        nullSum -= [0, 1][+(weights[i][j + 1] == null)]
        nullSum -= [0, 1][+(weights[i][j - 1] == null)]
        nullSum -= [0, 1][+(weights[i + 1]?.[j] == null)]
        nullSum -= [0, 1][+(weights[i - 1]?.[j] == null)]
  
        result[i].push(Math.round(prom / nullSum))
      }
    }
    return result
  }
  
  console.log(distributeGifts([
    [4, 5, 1],
    [6, null, 3],
    [8, null, 4]
  ]))