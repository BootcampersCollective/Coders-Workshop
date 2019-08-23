"""By Ian Davis for Bootcampers Collective Coders Workshop on 8/21/19"""
""" This program traverses a matrix in a clockwise inward spiral """

import copy

testArray = [[1,2,3,4],
            [5,6,7,8],
            [9,10,11,12],
            [13,14,15,16]]

def main():
    #create object of type Matrix_Spiral
    position = Matrix_Spiral()

    #print starting position
    print(testArray[position.currentRow][position.currentCol], end=",")

    #number of moves is determined by the number of elements in the given array
    for i in range(len(testArray)**2 - 1):

        #Store the current location in past postitions list
        position.storePastPostiion()

        #check to see if a forward move would be invalid, and turn if it is
        if position.detectNeedToTurn(len(testArray)-1):
            position.turnRight()

        #move one space forward in current direction
        position.moveForward()

        print(testArray[position.currentRow][position.currentCol], end=",")
    print()
    
class Matrix_Spiral:

    #initialize starting position, direction, and list to track past positions
    def __init__(self):
        self.currentRow = 0
        self.currentCol = 0
        self.currentDirection = 'right'
        self.pastPositions = []    

    #moves one position in the current direction
    def moveForward(self):
        if self.currentDirection == 'right':
            self.currentCol += 1
        elif self.currentDirection == 'down':
            self.currentRow += 1
        elif self.currentDirection == 'left':
            self.currentCol -= 1
        else:
            self.currentRow -= 1
        
    #turns right
    def turnRight(self):
        if self.currentDirection == 'right':
            self.currentDirection = 'down'
        elif self.currentDirection == 'down':
            self.currentDirection = 'left'
        elif self.currentDirection == 'left':
            self.currentDirection = 'up'
        else:
            self.currentDirection = 'right'

    #stores all positions already visited in list
    def storePastPostiion(self):
        self.pastPositions.append((self.currentRow, self.currentCol))


    #detects need to trun based on past positions and array bounds
    def detectNeedToTurn(self, arrayLength):
        check = copy.deepcopy(self)
        #look ahead to next postion
        check.moveForward()
        #check if within bounds of array
        if check.currentRow > arrayLength or check.currentRow < 0 or check.currentCol > arrayLength or check.currentCol < 0:
            return True
        #check if position has already been visited
        elif (check.currentRow, check.currentCol) in self.pastPositions:
            return True
        else:
            return False
            


if __name__ == main():
    main()
