if __name__ == '__main__':
    n = int(input())
    student_marks = {}
    for _ in range(n):
        name, *line = input().split()
        scores = list(map(float, line))
        student_marks[name] = sum(scores) / len(scores)
    query_name = input()
    s = str(student_marks[query_name])
    b = len(s[s.find('.') + 1:])
    if len(s[s.find('.') + 1:]) == 1:
        print(s + '0')
    else:
        print(s[:5])