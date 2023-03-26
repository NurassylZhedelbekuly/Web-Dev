n = int(input())
ls = list(map(int, input().split()))
for i in range(len(ls)):
    if i % 2 == 0:
        print(ls[i], end=' ')