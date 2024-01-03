function createChristmasTree(ornaments, height) {
    let tree = '';
    let count = 0;
  
    for (let i = 1; i <= height; i++) {
      let strToAdd = [];
      for (let j = 0; j < i; j++) {
        if (count === ornaments.length) {
          count = 0;
        }
        strToAdd.push(ornaments[count]);
        count++;
      }
      tree += `${' '.repeat(height - i)}${strToAdd.join(' ')}\n`;
    }
    return tree + `${' '.repeat(height - 1)}|\n`;
  }
  
//   console.log(createChristmasTree('123', 4));