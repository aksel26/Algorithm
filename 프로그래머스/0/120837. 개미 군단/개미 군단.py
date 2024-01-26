div = [5, 3,1]
def solution(hp):
    answer = 0
    
    for x in div :
        answer += hp // x
        hp = hp % x
    return answer

    