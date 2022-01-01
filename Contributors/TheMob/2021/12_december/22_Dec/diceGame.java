import java.util.Random;

class Main {
  public static final Random RAND = new Random();

  public static void main(String[] args) {
    long sum1 = 0, sum2 = 0;
    for (int i = 0; i < 10000; i++) {
      sum1 += playGame(5,6);
      sum2 += playGame(5,5);
    }

    System.out.println("Answer: " + sum1);
    System.out.println("Answer: " + sum2);
  }

  public static int playGame(int v1, int v2) {
    int counter = 0;
    int prevVal = 0;

    boolean keepGoing = true;
    while (keepGoing) {
      counter++;
      int currentRoll = roll();
      if (prevVal == v1 && currentRoll == v2) return counter;
      prevVal = currentRoll;
    }
    return counter;
  }

  public static int roll() {
    return RAND.nextInt(6) + 1;
  }
}
