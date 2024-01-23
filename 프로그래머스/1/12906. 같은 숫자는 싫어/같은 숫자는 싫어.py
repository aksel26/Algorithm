

def solution(arr):
    answer = []
    # [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    
    now = 0

    for idx,val in  enumerate(arr):
        if idx == 0 : answer.append(val)
        if arr[now] != arr[idx] :
            answer.append(val)
            now = idx

    return answer


solution([1,1,3,3,0,1,1])