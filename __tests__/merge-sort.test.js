const mergeSort = require('../merge-sort');

describe('Tests mergeSort', () => {
  it.only('Sorts an array of integers', () => {
    let arr = [4, 3, 5, 1, 2];
    expect(mergeSort(arr)).toEqual([1, 2, 3, 4, 5]);  
  });
});