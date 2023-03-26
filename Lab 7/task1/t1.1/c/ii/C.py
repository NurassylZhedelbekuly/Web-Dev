n = int(input())
i = 0
while True:
    num = 2 ** i
    if num <= n:
        print(num, end=' ')
    else:
        break
    i += 1
