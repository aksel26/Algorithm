import sys
import heapq as hq

T = int(sys.stdin.readline())

heap= []
for x in range(T):
    num  = int(sys.stdin.readline())

    if(num!=0):
        hq.heappush(heap,num)
    else:
        if len(heap)>=1:
            print(hq.heappop(heap))
        else:
            print(0)
            

