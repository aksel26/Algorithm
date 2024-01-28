def solution(arr, n):


    isOdd = True if len(arr) % 2 != 0 else False
    if isOdd :
        for x in range(len(arr)):
            if x % 2 == 0 :
                arr[x] = arr[x] + n
            
    else:
        for x in range(len(arr)):
            if x % 2 != 0 :
                arr[x] =  arr[x] + n
            
        
        
    return arr
    
