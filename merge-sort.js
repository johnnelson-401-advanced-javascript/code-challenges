const merge = (right, left, arr) => {
  let i = 0;
  let j = 0;
  let k = 0;
  while(i < left.length && j < right.length) {
    if(left[i] <= right[j]) {
      arr[k] = left[i];
    } else {
      arr[k] = arr[j];
      j++;
    }
    k++;
  }
  if(i === left.length) {
    while(j < right.length) {
      arr[k] = right[j];
      k++;
      j++;
    }
  }
  return arr;
};
const mergeSort = (arr) => {
  let n = arr.length;
  let result;
  
  if(n < 2) {
    return arr;
  } else {
    const mid = parseInt(n / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid, n);
    mergeSort(left);
    mergeSort(right);
    result = merge(left, right, arr);
  }
  return result;
};
module.exports = mergeSort;