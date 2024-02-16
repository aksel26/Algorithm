def solution(box, n):
    answer = 1
    
    
    divided = list(map(lambda x : x // n , box))
    for i in divided :
        answer *= i
    

    return answer