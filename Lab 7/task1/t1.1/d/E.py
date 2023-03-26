n = int(input())
ls = list(map(int, input().split()))
cnt = 0
if len(ls) > 1:
    for i in range(1, len(ls)):
        if ls[i] == ls[i - 1]:
            print("YES")
            exit()
    print("NO")
else:
    print("YES")