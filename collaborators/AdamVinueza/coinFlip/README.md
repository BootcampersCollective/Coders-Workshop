# Coin Flip

The program is pretty self-explanatory, but I thought it worth briefly
discussing one way of solving the problem recursively: bit shifting.
In Python, negative integers are represented in two's-complement format,
meaning the leftmost bit is 1 precisely when the number is negative. So if we
restrict ourselves to non-negative numbers, shifting an integer one bit to the
right is the same as dividing by two (if the number is even) or dividing by
two and taking the floor (if the number is odd).

If we use bit shifting, we would need to have the opposite intuition about the
expected number of flips to reach a single coin. (If there are three coins,
expect one flip to reach a single coin instead of two, for example.) There is
no special reason we should take the floor instead of the ceiling when the
number of flips is affected, so using bit shifting is an equally valid way of
solving the coin-flip puzzle:
```python
def expected_flips(n):
    return 1 + expected_flips(n >> 1) if n else 0

# the tail-recursive version
def expected_flips_tail(n, accum):
    return expected_flips(n >> 1, accum + 1) if n else accum
```
So is shifting bits "better" than dividing in general? This is a question
lots of engineers have been hashing over for a long time, but in general the
answer is, or ought to be: *don't think you're better at optimizing code than
your language's compiler or interpreter*. Modern compilers and interpreters
are very, very good at optimizing operations, because they're built by people
who know far more about optimizing operations than you ever will, unless you
write compilers for a living.

In addition, what meaningful advantage does bit shifting actually give you?
Let's say your function now runs in 2 milliseconds instead of 4 milliseconds:
does that matter? For example, in the context of a web service that typically
imposes latencies of 20-50 milliseconds just to get packets across the wire,
saving 2 milliseconds is just noise. It's those sorts of considerations worth
keeping clearly in focus when you're thinking about what to optimize and how.
