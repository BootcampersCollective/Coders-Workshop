
def spiral(array):
        global counter
        counter = 0

        def iterateRight(array, startY, startX, steps):
                end = startX + steps
                global counter
                if not checkZero(steps, array, startY, startX):
                        while startX < end:
                                print(array[startY][startX])
                                counter += 1
                                startX += 1
                return [startY, startX]

        def iterateDown(array, startY, startX, steps):
                end = startY + steps
                global counter
                if not checkZero(steps, array, startY, startX):
                        while startY < end:
                                print(array[startY][startX])
                                counter += 1
                                startY += 1

                return [startY, startX]

        def iterateLeft(array, startY, startX, steps):
                end = startX - steps
                global counter
                if not checkZero(steps, array, startY, startX):
                        while startX > end:
                                print(array[startY][startX])
                                counter += 1
                                startX -= 1
                return [startY, startX]

        def iterateUp(array, startY, startX, steps):
                end = startY - steps
                global counter
                if not checkZero(steps, array, startY, startX):
                        while startY > end:
                                print(array[startY][startX])
                                counter += 1
                                startY -= 1

                return [startY, startX]
        
        def checkZero(steps, array, startY, startX):
                global counter
                if steps == 0:
                        print(array[startY][startX])
                        counter += 1
                        return True
                else:
                        return False

        height = len(array)
        width = len(array[0])
        fullLength = height * width
        
        #This iteration start us out
        cur_loc = iterateRight(myArray, 0, 0, width - 1)
        #Now we can begin the loop
        while counter < fullLength:
                height -= 1
                width -= 1
                if counter < fullLength:
                        cur_loc = iterateDown(myArray, cur_loc[0], cur_loc[1], height)
                if counter < fullLength:
                        cur_loc = iterateLeft(myArray, cur_loc[0], cur_loc[1], width)
                height -= 1
                width -= 1
                if counter < fullLength:
                        cur_loc = iterateUp(myArray, cur_loc[0], cur_loc[1], height)
                if counter < fullLength:
                        cur_loc = iterateRight(myArray, cur_loc[0], cur_loc[1], width)

myArray = []

# myArray.append([1, 2, 3, 4, 5])
# myArray.append([12, 13, 14, 15, 6])
# myArray.append([11, 10, 9, 8, 7])

# myArray.append([1, 2, 3, 4, 5])
# myArray.append([14, 15, 16, 17, 6])
# myArray.append([13, 20, 19, 18, 7])
# myArray.append([12, 11, 10, 9, 8])

myArray.append([1, 2, 3, 4, 5])
myArray.append([16, 17, 18, 19, 6])
myArray.append([15, 24, 25, 20, 7])
myArray.append([14, 23, 22, 21, 8])
myArray.append([13, 12, 11, 10, 9])


spiral(myArray)