# code-challenges

  InsertionSort(int[] arr)
  
    FOR i = 1 to arr.length
    
      int j <-- i - 1
      int temp <-- arr[i]
      
      WHILE j >= 0 AND temp < arr[j]
        arr[j + 1] <-- arr[j]
        j <-- j - 1
        
      arr[j + 1] <-- temp

* insertionSort takes an Array of Integers;
* loop through the array 
* if index i is less than the first item, add to beginning of array
* else loop through the rest of the array and find where index [i -1] < [i] < [i + 1]
* insert index i into its proper index position
* continue for next index i.
* return sorted array.