from timer import Timer

timer = Timer()


def sort_ints(n):
    return ''.join(sorted(str(n)))


for i in range(1, 1000000):
    all_equal = [sort_ints(i) == sort_ints(i * (x + 1)) for x in range(6)]
    if all(all_equal):
        print(i)
        break

timer.end()
