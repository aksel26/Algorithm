import sys
import heapq as hq

T = int(sys.stdin.readline())

arr = []
for x in range(T):
    num = int(sys.stdin.readline().rstrip())
    if num == 0 :
        # 절댓값이 가장 작은 값을 출력하고 제거
        try :
            print(hq.heappop(arr)[1])
        except :
            print(0)       
    else:
        # 값 추가
        hq.heappush(arr,(abs(num),num))
