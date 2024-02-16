def solution(my_strings, parts):
    answer =''
    for index in range(len(parts)):
        a,b = parts[index]
        answer  += my_strings[index][a:b+1]

        
    return answer