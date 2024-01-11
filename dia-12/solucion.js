function checkIsValidCopy(original, copy) {
    for (let i = 0; i < copy.length; i++) {
      if (copy[i] !== original[i].toLowerCase() 
      && copy[i] !== '#' && copy[i] !== '+' 
      && copy[i] !== ':' && copy[i] !== '.' && copy[i] !== ' ') {
        return false
      }
      if(original[i] === ' ' && copy[i] !== ' ') {
        return false
      }
    }
    return true
  }
  
  // console.log(checkIsValidCopy('Santa Claus', 'SantA ClauS'))
  
  
  function checkIsValidCopy2(original, copy) {
    for (let i = 0; i < copy.length; i++) {
      if (copy[i] !== original[i]?.toLowerCase() 
      && !/[#+:. ]/.test(copy[i])) {
        return false
      }
      if(original[i] === ' ' && copy[i] !== ' ') {
        return false
      }
    }
    return true
  }
  
  // console.log(checkIsValidCopy2('Santa Claus', 'SantA ClauS'))
  
  function checkIsValidCopy3(original, copy) {
    
    return true
  }
  
  // console.log(checkIsValidCopy3('Santa Claus', 'SantA ClauS'))
  
  
  function checkIsValidCopy4(original, copy) {
    for (let i = 0; i < copy.length; i++) {
      const regex = new RegExp(`[${original[i].toLowerCase()}#+:. ]`)
      if ( !regex.test(copy[i])) {
        return false
      }
      if(original[i] === ' ' && copy[i] !== ' ') {
        return false
      }
    }
    return true
  }
  // console.log(checkIsValidCopy4('Santa Claus', 'SantA ClauS'))
  
  function checkIsValidCopy(original, copy) {
    const copyL = copy.length - 1
    for (let i = 0; i < copyL; i++) {
      const p = `${original[i].toLowerCase()}#+:. `
      if (!p.includes(copy[i])
      || (original[i] === ' ' && copy[i] !== ' ')) {
        return false
      }
    }
    return true
  }
  
  
  function checkIsValidCopy(original, copy) {
    const symbols = '#+:. '
    const copyL = copy.length
  
    for (let i = 0; i < copyL; i++) {
      const originalChar = original[i]
      const copyChar = copy[i]
  
      if(!/[A-Za-z0-9]/.test(originalChar)) {
        const indexSymbol = symbols.indexOf(originalChar)
        const subSymbols = symbols.slice(indexSymbol)
        if(!subSymbols.includes(copyChar)) {
          return false
        }
      }else if (!`${originalChar.toLowerCase()}${originalChar}${symbols}`
      .includes(copyChar)) {
        return false
      }
    }
    return true
  }
  
  console.log(checkIsValidCopy('3 regalos 3', '3 .+:# #: 3'))
  