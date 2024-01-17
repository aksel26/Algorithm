import sys
import heapq as hq

T = int(sys.stdin.readline())

heap= []
for i in range(T):
    num = int(sys.stdin.readline())
    if num:
        hq.heappush(heap, (-num, num))
    else:
        if len(heap) >= 1:
            print(hq.heappop(heap)[1])
        else:
            print(0)


