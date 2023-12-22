function organizeGifts(gifts) {
    const giftsArr = gifts.split(/(\D)/)
    let result = ''
  
    for (let i = 0; i < giftsArr.length - 1; i += 2) {
      let cajas = Math.floor(giftsArr[i] / 10)
      let pales = Math.floor(cajas / 5)
  
      let palesStr = `[${giftsArr[i+1]}]`.repeat(pales)
      let cajasStr = `{${giftsArr[i+1]}}`.repeat(cajas - (pales * 5))
      let giftsLeft = `(${giftsArr[i+1].repeat(giftsArr[i] - (cajas * 10))})` 
  
      result += palesStr + cajasStr + giftsLeft
      
    }
    return result.replaceAll(/\(\)|\{\}|\[\]/g, '')
  }
  
//   console.log(organizeGifts("70b120a4c"))