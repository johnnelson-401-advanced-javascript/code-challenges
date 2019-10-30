const mergeSort = require('../merge-sort');

describe('Tests mergeSort', () => {
  it('Sorts an array of integers', () => {
    let arr = [4, 3, 5, 1, 2];
    expect(mergeSort(arr)).toBe([1, 2, 3, 4, 5]);  
  });
});