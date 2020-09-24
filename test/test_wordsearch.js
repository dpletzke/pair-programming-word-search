const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js')

describe("#wordSearch()", function() {
  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK');

    assert.isFalse(result);
  });

  it("should return true if the word is present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'S', 'E', 'I', 'N'],
      ['F', 'E', 'L', 'D', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'E', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'N', 'L'],
    ], 'SEINFELD')

    assert.isTrue(result);
  });

  it("should return true if the word is present vertically", function() {
    const result = wordSearch([
      ['S', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['E', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['I', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['N', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['F', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['E', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['L', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['D', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD')

    assert.isTrue(result);
  });

  it("should return false if array is empty", function() {
    const result = wordSearch([], 'testword');

    assert.isFalse(result);
  });
  it("should return true if the word is present and backwards", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'DLEFNIES')

    assert.isTrue(result);
  });

  it("should return true if the word is present and backwards vertically", function() {
    const result = wordSearch([
      ['D', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['L', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['E', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['F', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['N', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['I', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['E', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['S', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'DLEFNIES')

    assert.isTrue(result);
  });

  it("should return true if the word is present and backwards diagonally", function() {
    const result = wordSearch([
      ['D', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['L', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['E', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['F', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['N', 'H', 'K', 'S', 'Y', 'E', 'R', 'L'],
      ['I', 'F', 'R', 'N', 'N', 'E', 'Y', 'B'],
      ['E', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['F', 'D', 'C', 'A', 'K', 'R', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'F', 'L'],
    ], 'FRANK')

    assert.isTrue(result);
  });

});
