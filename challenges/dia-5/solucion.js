function cyberReindeer(road, time) {
    let result = [road];
    let sInBarrier = false;
    let roadCopy = road.split('');
  
    for (let i = 1; i < time; i++) {
      const sIndex = roadCopy.indexOf('S');
      if (i === 5) {
        roadCopy = roadCopy.join('').replaceAll('|', '*').split('')
      }
      if (sInBarrier) {
        sInBarrier = false;
        roadCopy.splice(sIndex, 2, '*', roadCopy[sIndex]);
        result.push(roadCopy.join(''));
      } else if (roadCopy[sIndex + 1] === '*') {
        sInBarrier = true;
        roadCopy.splice(sIndex, 2, '.', roadCopy[sIndex]);
        result.push(roadCopy.join(''));
      } else if (roadCopy[sIndex + 1] !== '|') {
        roadCopy.splice(sIndex, 2, roadCopy[sIndex + 1], roadCopy[sIndex]);
        result.push(roadCopy.join(''));
      } else {
        result.push(roadCopy.join(''));
      }
    }
    return result;
  }