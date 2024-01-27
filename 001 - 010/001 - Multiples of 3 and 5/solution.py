import time

start = time.time()

count = 0
for i in range(1000):
    count += i if i % 3 == 0 or i % 5 == 0 else 0

print(count)
print((time.time() - start) * 1000, "ms")
