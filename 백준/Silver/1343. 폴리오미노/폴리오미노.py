import sys

WORD =sys.stdin.readline().rstrip()

WORD = WORD.replace('XXXX','AAAA')
WORD =  WORD.replace('XX','BB')

if('X' in WORD):
    print('-1')
else:
    print(WORD)