function mergeSort(arr) {
  let n = arr.length;
  
  if(n === 1) {
    return arr;
  }
  const mid = Math.floor(n / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  return merge(
    mergeSort(left),
    mergeSort(right)
  );
}


function merge(right, left) {
  let i = 0;
  let j = 0;
  let result = [];
  while(i < left.length && j < right.length) {
    if(left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  return result.concat(left.slice(i)).concat(right.slice(j));
}



module.exports = mergeSort;