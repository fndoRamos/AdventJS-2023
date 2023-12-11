function findNaughtyStep(original, modified) {
    const biggerStr = original.length > modified.length 
    ? original 
    : modified 
    for (let i = 0; i < biggerStr.length; i++) {
      if (original[i] != modified[i]) return biggerStr[i]
    }
    return ''
  }