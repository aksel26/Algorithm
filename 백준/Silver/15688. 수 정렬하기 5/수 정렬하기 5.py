import sys

n = int(sys.stdin.readline())

tempList =sorted([int(sys.stdin.readline()) for x in range(n)])
for x in tempList:
    print(x)

