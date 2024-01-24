import math

def solution(n):
    answer = 0
    
    for x in range(n) :
        if  n % (x+1)  == 0:
            answer +=1
         
    return answer


