object CountWords {

  def countWords(s: String): Map[String, Int] =
    s.split(' ').groupBy(identity).mapValues(_.length)

}

