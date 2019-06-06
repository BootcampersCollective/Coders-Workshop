class subscriber():
    
    def __init__(self, myArray):
        self.myArray = myArray
    
    def update(self, hour, value):
        if hour < 0 or hour > 23:
            print("Please enter a value between 0 and 23 for your update.")
        else:
            self.myArray[hour] += value

    def query(self, start, end):
        result = 0
        if start > 23 or end > 23:
            print("Please enter a value between 0 and 23 for your query.")
        else:
            end = 1 + end
            for index in range(start, end):
                result += self.myArray[index]
            print(result)

test = [1, 1, 2, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0]
mySubscriber = subscriber(test)
mySubscriber.update(7, 7)
mySubscriber.query(0, 4)