#!/usr/bin/env python3

def hourHand(hour, minutes):
    return hour * 30 + minutes * 0.5


def minuteHand(minutes):
    if minutes == 0:
        return 360
    else:
        return minutes * 6

def hourMinuteDegreeDifference(hour, minutes):
    pos_hour = hourHand(hour, minutes)
    pos_minute = minuteHand(minutes)

    if pos_hour > pos_minute:
        return pos_hour - pos_minute
    else:
        return pos_minute - pos_hour

def main():
    """
    there are 360/12 = 30 degrees per hour
    hour hand moves 30 degrees / 60 minutes = 1/2 degree per minute
    so starting from hour * 30 + minutes * 0.5 = pos1 (hour hand)

    360 / 60 = 6 degrees per minute
    minutes * 6 = pos2 (minute hand)
    """

    # 09:00 == 90 degrees
    """
    9 * 30 + 0 * 0.5 = 270 = pos1
    00 * 6 = 0 (convert to 360) = pos2
    if pos2 > pos1: pos2 - pos1 = 90 else pos1-pos2
    """
    # 06:00 == 180 degrees
    """
    6 * 30 + 0 * 0.5 = 180 = pos1
    00 * 6 = 0 (convert to 360) = pos2
    if pos2 > pos1: pos2 - pos1 = 180 else pos1-pos2
    """
    # 03:15 == 7.5
    """
    pos1 = 3 * 30 + 15 * 0.5 = 97.5
    pos2 = 15 * 6 = 90
    if pos2 > pos1: pos2 - pos1 else pos1-pos2
    97.5
    """

if __name__ == "__main__":
    main()