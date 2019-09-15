import scala.annotation.tailrec

object CollatzSequence {

  def collatzSequence(n: Int): Int = {
    @tailrec
    def run(last: Int, count: Int): Int = last match {
      case 1 => count
      case n if n % 2 == 0 => run(last / 2, count + 1)
      case n => run(last * 3 + 1, count + 1)
    }
    run(n, 0)
  }

}

