Describe how you would implement an API for an elevator.

Clarifying questions
Authorization? - No
Number of elevators? - 1
How many buttons? Always up and down
What interface are we talking about? Both inside and outside the elevators

Idle: go to floor that's requested
if going down, pick up passengers going down
if going up, pick up passengers going up

- Machine learning?????

Elevator needs to know:

- Current position
- Where it needs to go
- Its direction

requestRide endpoint:
RequestFromFloor {
floor
upOrDown
}

response: affirmative or negative
requestDestination endpoint:
RequestFromCar {
targetFloor
}

Store requests as key-value pairs with key being floor, values being requests

Create two queues. Not traditional FIFO queue

Before each floor, check queue to see if elevator should stop. Queue includes both request types

After door closes on floor, remove all requests involving for that floor going in same direction as elevator.

Validation

- Before each request, check
  if firefighter's key;
  if firefighters key && down, move down;
  if firefighters key && up, up;
  if firefighters key && middle, stop
  else:
  if not alarm
  Do all the other logic we've been talking about
  else
  disable all user input
- Before each request is made, check weight, check doors are closed
- Distance between each floor
