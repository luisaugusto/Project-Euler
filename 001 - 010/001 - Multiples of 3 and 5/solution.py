import time

start = time.time()


def divisible(num):
    return num % 3 == 0 or num % 5 == 0


count = 0
for i in range(1000):
    if divisible(i):
        count += i

print(count)
print((time.time() - start) * 1000, "ms")
