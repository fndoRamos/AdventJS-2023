function getStaircasePaths(steps, maxJump) {
  const paths = [];
  const queue = [];

  queue.push({ steps, path: [] });

  while (queue.length > 0) {
    const current = queue.shift();
    const currentSteps = current.steps;
    const currentPath = current.path;

    if (currentSteps === 0) {
      paths.push(currentPath);
    } else {
      let i = Math.min(maxJump, currentSteps);
      while (i > 0) {
        queue.push({
          steps: currentSteps - i,
          path: [...currentPath, i],
        });
        i--;
      }
    }
  }

  return paths.sort((a, b) => {
    const tmpa =
      a.reduce((acc, cur) => acc + cur, "") + "0".repeat(steps - a.length);
    const tmpb =
      b.reduce((acc, cur) => acc + cur, "") + "0".repeat(steps - b.length);
    return tmpa > tmpb ? 1 : -1;
  });
}

console.log(getStaircasePaths(5, 2));

// de forma recursiva

function getStaircasePaths2(steps, maxJump) {
  const arr = [];
  const f = (s, g) => {
    if (s == 0) {
      return arr.push(g);
    }
    for (let i = 1; i <= Math.min(s, maxJump); i++) {
      if (s > 0) {
        f(s - i, g.concat([i]));
      }
    }
  };
  f(steps, []);
  return arr;
}

console.log(getStaircasePaths2(5, 2));
