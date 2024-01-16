import sys

answer =0
T = int(sys.stdin.readline().rstrip())
arr = list(map(int,sys.stdin.readline().split()))
NUM = int(sys.stdin.readline().rstrip())



for x in arr :
    if(x == NUM): answer +=1

print(answer)



