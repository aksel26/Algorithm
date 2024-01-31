def solution(arr):
    answer = []
    
    for x in arr:
        answer = answer + [x for i in range(x)]
    
    return answer

