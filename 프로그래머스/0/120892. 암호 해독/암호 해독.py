def solution(cipher, code):
    return ''.join([cipher[x] if (x+1) % code == 0 else '' for x in  range(len(list(cipher))) ])