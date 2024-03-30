from timer import Timer

timer = Timer()

index = 1
prev_fib = "0"
current_fib = "1"

while len(current_fib) < 1000:
    index += 1
    new_fib = ""
    carry = 0

    for i, digit in enumerate(current_fib[::-1]):
        digit_int = int(digit)
        prev_digit_int = int(prev_fib[len(prev_fib) - 1 - i])
        digit_sum = digit_int + prev_digit_int + carry

        if digit_sum >= 10:
            carry = digit_sum // 10
            digit_sum = digit_sum % 10
        else:
            carry = 0

        new_fib = str(digit_sum) + new_fib

    new_fib = str(carry) + new_fib if carry > 0 else new_fib
    prev_fib = current_fib.zfill(len(new_fib))
    current_fib = new_fib

print('index', index)


timer.end()
