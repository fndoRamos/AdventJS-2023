function findBalancedSegment(message) {
    let indexArr = []
    let messageArr = []
    for (let i = 0; i < message.length; i++) {
      const tempMessageArr = [message[i]]
      for (let j = i + 1; j < message.length; j++) {
        tempMessageArr.push(message[j])
        const sum0 = tempMessageArr.filter(n => n === 0).length
        const sum1 = tempMessageArr.filter(n => n === 1).length
        if (sum0 === sum1 && tempMessageArr.length > messageArr.length) {
          indexArr = [i, j]
          messageArr = [...tempMessageArr]
        }
      }
    }
    return indexArr
  }
  
  // console.log(findBalancedSegment([1, 1, 0]))
  
  
  
  //quitar los filter para reducir complejidad cognitiva y aumentar ops
  function findBalancedSegment2(message) {
    let indexArr = []
    let messageArr = []
    for (let i = 0; i < message.length; i++) {
      const tempMessageArr = [message[i]]
      let sum0 = 0
      let sum1 = 0
      sum0 += [0, 1][+(message[i] === 0)]
      sum1 += [0, 1][+(message[i] === 1)]
      for (let j = i + 1; j < message.length; j++) {
        sum0 += [0, 1][+(message[j] === 0)]
        sum1 += [0, 1][+(message[j] === 1)]
        tempMessageArr.push(message[j])
        if (sum0 === sum1 && tempMessageArr.length > messageArr.length) {
          indexArr = [i, j]
          messageArr = [...tempMessageArr]
        }
      }
    }
    return indexArr
  }
  
  
  // cambiar for normal por for of
  function findBalancedSegment3(message) {
    let indexArr = []
    let messageArr = []
    let i = 0
    for (const m1 of message) {
      const tempMessageArr = [message[i]]
      const message2 = message.slice(i + 1)
      let sum0 = 0
      let sum1 = 0
      let j = 0
      sum0 += [0, 1][+(message[i] === 0)]
      sum1 += [0, 1][+(message[i] === 1)]
      for (const m2 of message2) {
        sum0 += [0, 1][+(message2[j] === 0)]
        sum1 += [0, 1][+(message2[j] === 1)]
        tempMessageArr.push(message2[j])
        if (sum0 === sum1 && tempMessageArr.length > messageArr.length) {
          indexArr = [i, j + (message.length - message2.length)]
          messageArr = [...tempMessageArr]
        }
        [j++, j - j][+(j === message2.length - 1)]
      }
      i++
    }
    return indexArr
  }
  
  console.log(findBalancedSegment3([1, 1, 0, 1, 1, 0, 1, 1]))