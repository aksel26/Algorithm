def rspFunc (input):
    if input == "2":
        return "0"
    elif input == "0":
        return "5"
    else :
        return "2"

def solution(rsp):

    return  ''.join(list(map(rspFunc , rsp)))