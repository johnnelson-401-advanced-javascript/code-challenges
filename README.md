# code-challenges


## Challenge Summary
Create a insert sort function in JavaScript that works on an array of integers and sorts them using the Insert Sort method.


## Challenge Description
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


