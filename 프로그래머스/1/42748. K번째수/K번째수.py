def solution(array, commands):
    answer = []
    
    for x in range(len(commands)):
        i,j,k = commands[x]
        temp = sorted(array[i-1:j])
        answer.append(temp[k-1])
    return answer


solution([1, 5, 2, 6, 3, 7, 4],	[[2, 5, 3], [4, 4, 1], [1, 7, 3]])