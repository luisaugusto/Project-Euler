import math
from timer import Timer

timer = Timer()
limit = 28123


def total_sum(num):
    return (num * (num + 1)) / 2


def is_abundant(num):
    total = 1
    lim = math.ceil(math.sqrt(num))
    total += lim if lim**2 == num else 0
    for i in range(2, lim):
        if num % i == 0:
            divisor = num // i
            total += i
            total += divisor
    return total > num


def possible_sums(num_array):
    sum_arr = []
    for index, i in enumerate(num_array):
        for j in num_array[index::]:
            total = i + j
            if total <= limit:
                sum_arr.append(i + j)
    return set(sum_arr)


abundant_numbers = [x for x in range(12, limit) if is_abundant(x)]
abundant_sums = possible_sums(abundant_numbers)
sum_of_sums = sum(abundant_sums)
print(total_sum(limit) - sum_of_sums)
timer.end()
