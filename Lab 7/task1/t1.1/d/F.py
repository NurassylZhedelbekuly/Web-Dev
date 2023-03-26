n = int(input())
ls = list(map(int, input().split()))
cnt = 0
if len(ls) > 2:
    for i in range(1, len(ls) - 1):
        if ls[i] > ls[i - 1] and ls[i] > ls[i + 1]:
            cnt += 1
print(cnt)