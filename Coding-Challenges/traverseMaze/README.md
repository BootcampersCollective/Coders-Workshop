# Traverse Maze

Given a Maze (represented as a string), find the shortest distance from start ("S") to end ("E").

A maze is inputted as a string, eg: 
`"###...##..\n....#....#\n#..###.#.#\nS#.#.#.#..\n...#...E#."`

represents

`###...##..`<br/>
`....#....#`<br/>
`#..###.#.#`<br/>
`S#.#.#.#..`<br/>
`...#...E#.`<br/>

* `"S"` is the **Start**
* `"E"` is the **End**
* `"#"` is a **wall**
* `"."` is a **clear cell**
* I can only move up/down/left/right (**no diagonals**)


Return the shortest path from Start to End, drawing out the path using `"*"`s to replace `"."`s for traveled cells.  
Return in form of a string, *similar to the format of the input*.

If there's no solution, return the original input.

***

## EXAMPLE:<br/>
Input:  `"###...##..\n....#....#\n#..###.#.#\nS#.#.#.#..\n...#...E#."`<br/>
Output: `"###***##..\n..**#**..#\n#.*###*#.#\nS#*#.#*#..\n***#..*E#."`

Input<br/>
`###...##..`<br/>
`....#....#`<br/>
`#..###.#.#`<br/>
`S#.#.#.#..`<br/>
`...#...E#.`<br/>

Output<br/>
`###***##..`<br/>
`..**#**..#`<br/>
`#.*###*#.#`<br/>
`S#*#.#*#..`<br/>
`***#..*E#.`<br/>