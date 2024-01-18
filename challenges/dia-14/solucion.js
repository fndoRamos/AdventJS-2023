function maxGifts(houses) {
    let count = 0
    let housesCopy = [...houses]
    const regex = /^[1-9]\d*$/
    
    while (housesCopy.some(n => regex.test(n.toString()))) {
      const maxN = Math.max(...housesCopy)
      count += maxN
      housesCopy[housesCopy.indexOf(maxN) + 1] = 0
      housesCopy[housesCopy.indexOf(maxN) - 1] = 0
      housesCopy[housesCopy.indexOf(maxN)] = 0
    }
    return count
  }
  
  console.log(maxGifts([3, 5, 4]))
  
  function maxGifts2(houses) {
    let tempCount = 0
    let finalCount = 0
    for(let i = 0; i < houses.length; i++) {
      tempCount = houses[i] + Math.max(...houses.slice(i + 2))
      if (tempCount > finalCount) {
        finalCount = tempCount
      }
      
    }
    return finalCount
  }
  
  console.log(maxGifts2([1000, 1, 1, 1, 1, 5000, 1, 1, 1]))
  
  function maxGifts3(houses) {
    let prevMax = 0
    let currentMax = 0
  
    for(let i = 0; i < houses.length; i++) {
      let newMax = currentMax > prevMax + houses[i]
      ? currentMax : prevMax + houses[i]
      prevMax = currentMax
      currentMax = newMax
    }
    return currentMax
  }
  
  console.log(maxGifts3([4, 1, 1, 4, 2, 1]))