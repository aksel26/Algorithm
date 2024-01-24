def solution(numbers):
    result = sorted(numbers, reverse=True)[:2]
    return result[0] * result[1]