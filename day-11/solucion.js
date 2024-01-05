function getIndexsForPalindrome(word) {
    let result = null;
    if (word === word.split('').reverse().join('')) {
      return [];
    }
  
    for (let i = 0; i < word.length; i++) {
      for (let j = i + 1; j < word.length; j++) {
        const wordArr = [...word];
        let temp = wordArr[i];
        wordArr[i] = wordArr[j];
        wordArr[j] = temp;
  
        if (wordArr.join('') === wordArr.reverse().join('')) {
          return [i, j];
        }
      }
    }
    return result;
  }
  
  console.log(getIndexsForPalindrome('abab'));
  
  function getIndexsForPalindrome2(word) {
    if (word === [...word].reverse().join('')) return []
    let result = null
  
    for (let i = 0; i < word.length / 2; i++) {
      const wordArr = [...word]
      
    }
    
  
    return result
  }
  
  console.log(getIndexsForPalindrome2('abab'))