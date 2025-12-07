Date Input

- language react
- should behave like native input type date
- segments: day, month, year
- add proper aria attributes
- use div with contenteditable for each segment
- keyboard navigation: left, right, up, down, home and end

  - left for previous segment
  - right for next segment
  - up for increment
  - down for decrement
  - home for setting the value of active segment to minimum
  - end for setting the value of active segment to maximum
- auto focus next segment on complete its value like on day complete, focus on month, and so on
- also on input 3-9 it just set the month to it and move to year
- and on input day if the 1st digit is greater than max day in that month it set the value to input and move to month
like if month is select august and user input 4 because it can't have days like 40 41 it move to month segment
- if there will be need of a day library use date-fns

** it should fulfill all the requirements of date input same as <input type="date" />
