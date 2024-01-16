import sys
T = int(input())

for x in range(1,T + 1):
    a,b = [int(x) for x in sys.stdin.readline().split()]
    print(a + b)
