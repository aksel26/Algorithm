def solution(arr):
    answer = []
    
    
    [answer.append(str(x) * x) for x in arr ]
    return list(map(int, list(''.join(answer))))

