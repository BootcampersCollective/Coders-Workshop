const recursionExercise = () => {
  const getLength = arr => {
    return arr.length ? 1 + getLength(tail(arr)) : 0;
  };

  /*
   * One-liners like this are usually a bad idea, but if you're just defining
   * some syntactic sugar (as I am here) it's probably fine.
   *
   * If your function isn't OBVIOUSLY syntactic sugar, put the code into a
   * code block, add back the return keyword, and make the logic clear.
   */
  const getLengthOptimized = arr => getLengthTail(arr, 0);

  const getLengthTail = (arr, accum) => {
    return arr.length ? getLengthTail(tail(arr), accum + 1) : accum;
  };

  // this is effectively a private function
  const tail = arr => arr.slice(1);

  // this is why it's nice that functions are first-class objects
  return {
    getLength,
    getLengthOptimized,
    getLengthTail
  };
};

module.exports = recursionExercise();
