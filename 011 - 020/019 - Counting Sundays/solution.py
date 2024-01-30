from timer import Timer

timer = Timer()


def get_feb_days(yr):
    if yr % 100 == 0 and yr % 400 == 0:
        return 29
    elif yr % 4 == 0:
        return 29
    else:
        return 28


months_to_days = {
    0: 31,
    1: 0,
    2: 31,
    3: 30,
    4: 31,
    5: 30,
    6: 31,
    7: 31,
    8: 30,
    9: 31,
    10: 30,
    11: 31
}
day_count = 0
num_sundays = 0

for year in range(100):
    current_year = 1901 + year
    for month in range(12):
        num_days = get_feb_days(current_year) if month == 1 else months_to_days[month]
        if day_count % 7 == 0:
            num_sundays += 1
        day_count += num_days

print(num_sundays)
timer.end()
