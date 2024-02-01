from timer import Timer

timer = Timer()

with open('triangle.txt') as file:
    triangle = [[int(number) for number in row.split()] for row in file]

    """
    This is a top down approach where we loop through each row
    in the triangle, then find the max value between two
    adjacent numbers and add it to the numbers in the following
    row, making the triangle smaller and a time complexity of O(n)
    """
    for rowIndex in range(len(triangle) - 1):
        for colIndex in range(len(triangle[rowIndex])):
            current_num = triangle[rowIndex][colIndex]
            if colIndex == 0:
                triangle[rowIndex + 1][0] += current_num
            else:
                prev_num = triangle[rowIndex][colIndex - 1]
                max_num = max(current_num, prev_num)
                triangle[rowIndex + 1][colIndex] += max_num

            if colIndex == len(triangle[rowIndex]) - 1:
                triangle[rowIndex + 1][colIndex + 1] += current_num

    print(max(triangle[-1]))

timer.end()
