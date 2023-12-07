function manufacture(gifts, materials) {
    let result = []
    for (let i = 0; i < gifts.length; i++) {
      const gift = gifts[i]
      let isPossible = false
      for (let j = 0; j < gift.length; j++) {
       if (!materials.includes(gifts[i][j])) {
         isPossible = false
        break
       } else {
        isPossible = true
       }
      }
      if (isPossible) {
        result.push(gifts[i])
      }
    }
    return result
  }
  
  function manufacture(gifts, materials) {
    return gifts
      .map((gift) =>
        gift
          .split('')
          .filter((char) => materials.includes(char))
          .join('')
      )
      .filter((gift) => gifts.includes(gift));
  }
  
  console.log(manufacture(['tren', 'oso', 'pelota'], 'tronesa'));