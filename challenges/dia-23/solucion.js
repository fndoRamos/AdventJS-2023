function organizeChristmasDinner(dishes) {
    const ingredients = {}
    let result = []
  
    for(let i = 0; i < dishes.length; i++) {
      for (let j = 0; j < dishes[i].length; j++) {
        if (ingredients[dishes[i][j]]) {
          ingredients[dishes[i][j]].push(dishes[i][0])
        } else {
          ingredients[dishes[i][j]] = [dishes[i][0]]
        }
      }
    }
  
    for(const ing of Object.entries(ingredients)) {
      if (ing[1].length > 1) {
        result.push(ing.flat())
      }
    }
    result = result.sort((a, b) => a[0].localeCompare(b[0]))
    result = result.map(e => [e[0], e.slice(1).sort((a, b) => a.localeCompare(b))].flat())
    return result
  }
  
  console.log(organizeChristmasDinner([
    ["christmas turkey", "turkey", "sauce", "herbs"],
    ["cake", "flour", "sugar", "egg"],
    ["hot chocolate", "chocolate", "milk", "sugar"],
    ["pizza", "sauce", "tomato", "cheese", "ham"],
  ]))
  
  //bajar complejidad cognitiva
  
  function organizeChristmasDinner2(dishes) {
    const ingredients = {}
    let result = []
  
    for(const [i, dish] of dishes.entries()) {
      for (const [j, d] of dish.entries()) {
        if (ingredients[dishes[i][j]]) {
          ingredients[dishes[i][j]].push(dishes[i][0])
        } else {
          ingredients[dishes[i][j]] = [dishes[i][0]]
        }
      }
    }
    console.log(Object.entries(ingredients))
  
    for(const ing of Object.entries(ingredients)) {
      if (ing[1].length > 1) {
        result.push(ing.flat())
      }
    }
    result = result.sort((a, b) => a[0].localeCompare(b[0]))
    result = result.map(e => [e[0], e.slice(1).sort((a, b) => a.localeCompare(b))].flat())
    return result
  }
  
  console.log(organizeChristmasDinner2([
    ["christmas turkey", "turkey", "sauce", "herbs"],
    ["cake", "flour", "sugar", "egg"],
    ["hot chocolate", "chocolate", "milk", "sugar"],
    ["pizza", "sauce", "tomato", "cheese", "ham"],
  ]))