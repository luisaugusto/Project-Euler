from timer import Timer
from math import perm

timer = Timer()

"""
if there are 4 digits, there are 24 permutations 4!
The first digit can be of any 4 numbers (6 start with 0, 6 start with 1, etc)

If we are looking for the 10th item, we know it starts with 1
because the first 6 start with 0 and the next 6 start with 1

We just keep repeating this, reducing the length of the available digits,
thus reducing the permutation size
"""

length = 10
digits = list(range(0, length))
look_for_position = 1000000
string = ''

while len(digits) > 0:
    positions_per_digit = perm(len(digits) - 1)
    index_for_digit = (look_for_position - 1) // positions_per_digit
    string += str(digits[index_for_digit])
    digits.remove(digits[index_for_digit])
    look_for_position = look_for_position % positions_per_digit

timer.end()
