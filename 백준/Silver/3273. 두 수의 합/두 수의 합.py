import sys

n = int(input())
numbers = set(map(int, sys.stdin.readline().split()))
x = int(input())

answer = 0

for i in numbers:
    if x - i in numbers :
        answer+=1
        
print(answer // 2)