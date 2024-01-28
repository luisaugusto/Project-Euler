from timer import Timer

timer = Timer()
max_value = 4_000_000

sum_of_values = 0
prev_value = 0
current_value = 0

while current_value < max_value:
    if current_value == 0:
        current_value += 1
    else:
        next_value = prev_value + current_value
        prev_value = current_value
        current_value = next_value
        sum_of_values += current_value if current_value % 2 == 0 else 0

print(sum_of_values)
timer.end()
