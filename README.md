# code-challenges


## Challenge Summary
Create a insert sort function in JavaScript that works on an array of integers and sorts them using the Insert Sort method.


## Challenge Description

### Insert Sort
  InsertionSort(int[] arr)
  
    FOR i = 1 to arr.length
    
      int j <-- i - 1
      int temp <-- arr[i]
      
      WHILE j >= 0 AND temp < arr[j]
        arr[j + 1] <-- arr[j]
        j <-- j - 1
        
      arr[j + 1] <-- temp

## Approach 
Using two loops, it will be a 0^N with this approach as it requires a nested loop.
The longer the array gets the cost will increase by 0^N.


## Solution
* insertionSort takes an Array of Integers;
* loop through the array 
* if index i is less than the first item, add to beginning of array
* else loop through the rest of the array and find where index [i -1] < [i] < [i + 1]
* insert index i into its proper index position
* continue for next index i.
* return sorted array.

### Merge Sort
ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length
           
    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1
            
        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left
## Approach 
This will be a recursive algorithm, and it uses multiple arrays. However it will be the "phonebook" method. Splitting the array into two halves, and comparing the added integer to either half. This will keep operating cost low as it is linear. The longer the array will scale up the big O cost linear instead of exponentially like our insertSort function.
## Solution
* Find the middle of the array,
* Split the array in half,
* Take each Index and compare it against its neighbor.



