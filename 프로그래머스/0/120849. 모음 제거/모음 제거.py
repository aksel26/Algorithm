vowels=['a', 'e', 'i', 'o', 'u']
def solution(my_string):
    answer=my_string
    for x in vowels :
        answer = answer.replace(x, "")
    return answer