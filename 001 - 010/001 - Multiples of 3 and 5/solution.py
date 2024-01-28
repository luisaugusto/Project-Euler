from timer import Timer

timer = Timer()
limit = 1000


def sum_of_multiples(multiples):
    val = 0
    for num in range(limit)[::multiples]:
        val += num

    return val


print(sum_of_multiples(3) + sum_of_multiples(5) - sum_of_multiples(15))
timer.end()
