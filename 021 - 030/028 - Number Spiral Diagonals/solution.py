from timer import Timer

"""
43 44 45 46 47 48 49
42 21 22 23 24 25 26
41 20  7  8  9 10 27
40 19  6  1  2 11 28
39 18  5  4  3 12 29
38 17 16 15 14 13 30
37 36 35 34 33 32 31
"""

timer = Timer()

integer = 1
position = 3
space_between = 0
total_sum = 0

while integer <= 1001 * 1001:
    total_sum += integer
    position = (position + 1) % 4
    if position == 0:
        space_between += 2

    integer += space_between

print(total_sum)

timer.end()
