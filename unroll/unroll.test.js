const unroll = require('./unroll');
const { expect } = require('chai');

describe('unroll', function() {
  it('is a function', function() {
    expect(typeof unroll).to.equal('function');
  });

  it('should correctly unroll a 4x4 square', function() {
    const square = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16]
    ];
    const expected = [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10];
    expect(unroll(square)).to.deep.equal(expected);
  });

  it('should correctly unroll a 3x3 square', function() {
    const smallerSquare = [
      ["a", "b", "c"],
      ["d", "e", "f"],
      ["g", "h", "i"]
    ];
    const expected = ["a", "b", "c", "f", "i", "h", "g", "d", "e"];
    expect(unroll(smallerSquare)).to.deep.equal(expected);
  });

  it('should handle a 1x1 square', function() {
    const oneByOneSquare = [["x"]];
    expect(unroll(oneByOneSquare)).to.deep.equal(["x"]);
  });

  it('should handle a 2x2 square', function() {
    const twoByTwoSquare = [
      [1, 2],
      [3, 4]
    ];
    expect(unroll(twoByTwoSquare)).to.deep.equal([1, 2, 4, 3]);
  });

  it('should handle a 3x2 rectangular shape', function() {
    const rectangularSquare = [
      [1, 2],
      [3, 4],
      [5, 6]
    ];
    expect(unroll(rectangularSquare)).to.deep.equal([1, 2, 4, 6, 5, 3]);
  });

  it('should handle an empty square', function() {
    const emptySquare = [];
    expect(unroll(emptySquare)).to.deep.equal([]);
  });

  it('should handle a square with one row and multiple columns', function() {
    const oneRowSquare = [[1, 2, 3, 4]];
    expect(unroll(oneRowSquare)).to.deep.equal([1, 2, 3, 4]);
  });

  it('should handle a square with one column and multiple rows', function() {
    const oneColumnSquare = [
      [1],
      [2],
      [3],
      [4]
    ];
    expect(unroll(oneColumnSquare)).to.deep.equal([1, 2, 3, 4]);
  });
});
