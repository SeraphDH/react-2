function unroll(squareArray) {
    const unrolledArray = [];
    
    while (squareArray.length > 0) {
      // Traverse top row from left to right
      unrolledArray.push(...squareArray.shift());
      
      // Traverse right column from top to bottom
      for (let i = 0; i < squareArray.length; i++) {
        unrolledArray.push(squareArray[i].pop());
      }
      
      // Traverse bottom row from right to left
      if (squareArray.length > 0) {
        unrolledArray.push(...squareArray.pop().reverse());
      }
      
      // Traverse left column from bottom to top
      for (let i = squareArray.length - 1; i >= 0; i--) {
        unrolledArray.push(squareArray[i].shift());
      }
    }
    
    return unrolledArray;
  }
  
  module.exports = unroll;
  