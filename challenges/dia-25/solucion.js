function travelDistance(map) {
    const mapArr = map.split('\n')
    let sX = mapArr.findIndex(s => s.includes('S'))
    let sY = mapArr[sX].indexOf('S')
    let giftsIndex = []
    let result = 0
  
    for (let i = 0; i < mapArr.length; i++) {
      for (let j = 0; j < mapArr[i].length; j++) {
        if (mapArr[i][j].match(/[1-9]/)) {
          giftsIndex.push([mapArr[i][j], i, j])
        }
      }
    }
    giftsIndex = giftsIndex.sort()
    for (const g of giftsIndex) {
      result += Math.abs(sX - g[1]) + Math.abs(sY - g[2])
      sY = g[2]
      sX = g[1]
    }
    return result
  }
  
  console.log(travelDistance(
    `.....1....
  ..S.......
  ..........
  ....3.....
  ......2...`
  ))