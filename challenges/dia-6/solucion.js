function maxDistance(movements) {
    const mLength = movements.length;
    const starMoves = movements.replaceAll('*', '');
    const movesLeft = movements.replaceAll('<', '');
    const movesRight = movements.replaceAll('>', '');
  
    return (
      Math.abs((mLength - movesRight.length) - (mLength - movesLeft.length)) +
      (mLength - starMoves.length)
    );
  }