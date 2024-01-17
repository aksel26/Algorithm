import sys


WORD = list(sys.stdin.readline().rstrip())

arr =[]
for i in range(1, len(WORD)-1):
    for j in range(i + 1, len(WORD)):
        first = WORD[:i]
        second = WORD[i:j]
        third  = WORD[j:]

        first.reverse()
        second.reverse()
        third.reverse()
        arr.append("".join(first+ second+ third))

print(min(arr))




