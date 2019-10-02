import scala.annotation.tailrec

object CoinFlip {

  def coinFlip(coins: Int): Int = {
    @tailrec
    def run(rest: Double, rounds: Int): Int = math.round(rest) match {
      case 1 => rounds
      case n => run(rest / 2, rounds + 1)
    }
    run(coins, 0)
  }

}

