def solution(num):
    answer = 0
    for x in range(num):
        if (x+1) % 2 == 0:
            answer += x+1
        
    return answer

