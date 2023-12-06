function findFirstRepeated(gifts) {
    const seen = {};
  
    for (const id of gifts) {
      if (seen[id]) return id;
      seen[id] = 1;
    }
  
    return -1;
  }

console.log(findFirstRepeated([2, 1, 3, 5, 3, 2]))