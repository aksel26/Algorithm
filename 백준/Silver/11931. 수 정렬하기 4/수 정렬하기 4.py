import sys

n = int(sys.stdin.readline())

tempList =sorted([int(sys.stdin.readline()) for x in range(n)], reverse=True)
for x in tempList:
    print(x)



