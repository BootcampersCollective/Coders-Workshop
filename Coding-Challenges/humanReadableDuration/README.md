# Human Readable Duration

Write a function that formats a duration, given as a number of seconds, in a human-friendly way.

Otherwise, the duration is expressed as a combination of `years`, `days`, `hours`, `minutes` and `seconds`.

For example, given `60`, your function should return `1 minute`. Given `3662`, it should return `1 hour, 1 minute and 2 seconds` (Note the lack of Oxford comma.)

More significant units should precede less significant ones, so `1 day and 1 year` is not correct while `1 year and 1 day` is.

Larger units should always be used if possible, so `61 minutes` is incorrect while `1 hour 1 minute` is.

Finally, a value should never be 0. If the input is zero, the function should return `now`.

