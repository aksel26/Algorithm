import sys
A,B = map(int, sys.stdin.readline().split())
answer = ' '.join([x for x in sys.stdin.readline().split() if(int(x) < B)])
print(answer, end ='')