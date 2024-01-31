def solution(arr, delete_list):
    [arr.remove(x) if x in arr else x for x in delete_list]
    return arr