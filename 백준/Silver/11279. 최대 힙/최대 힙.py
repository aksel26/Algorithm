import sys
from heapq import heappush, heappop
heap = []
[
    heappush(heap, -i) if i
    else print(-heappop(heap) if heap else 0)
    for i in map(int, sys.stdin.read().split()[1:])
]