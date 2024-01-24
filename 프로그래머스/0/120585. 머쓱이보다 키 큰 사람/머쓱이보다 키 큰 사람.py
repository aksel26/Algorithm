def solution(array, height):
    answer = 0
    for x in array :
        answer +=1 if x > height else answer
    return answer