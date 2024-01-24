def solution(my_string, n):
    return  ''.join(map(lambda x:x * n , list(my_string)))