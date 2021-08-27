import unittest
import clock_hand_angle as angle

class TestMethods(unittest.TestCase):
    # if 06:00, degree == 180
    def test_sixOclock(self):
        self.assertEqual(angle.hourMinuteDegreeDifference(6, 0), 180)

    # if 12:00, degree == 0 or 360
    def test_twelveOclock(self):
        self.assertEqual(angle.hourMinuteDegreeDifference(12, 0), 0)

    # if 3:15, degree == 7.5
    def test_threeFifteen(self):
        self.assertEqual(angle.hourMinuteDegreeDifference(3, 15), 7.5)

    # if 09:00, degree == 90
    def test_nineOclock(self):
        self.assertEqual(angle.hourMinuteDegreeDifference(9, 0), 90)

    # if 08:15, degree == 157.5
    def test_eightFifteen(self):
        self.assertEqual(angle.hourMinuteDegreeDifference(8, 15), 157.5)

if __name__ == "__main__":
    unittest.main()