def solution(my_string):
        return sum(map(int,(list(filter(str.isdigit, my_string)))))