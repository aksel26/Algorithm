

N = int(input())

students = list(map(int, input().split())) 
now_turn = 1
stack = []
for student in students :
    stack.append(student)
    
    while stack and stack[-1]== now_turn :
        stack.pop()
        now_turn += 1
        
if stack :
    print('Sad')
else :
    print('Nice')
    