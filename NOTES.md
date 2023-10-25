- Each commit messages aims to outline the changes we made.
- Changed variable names to be more clear about their intention
- Aimed to keep variables as consts
- Removed unnecessary variables as we refactored

- Debated whether to chain .map() onto Object.entries().sort() and immediately return, instead of assigning to sortByAmountThenName.
  Decided to keep variable assignment to aid with readability.

```
const sortByAmountThenName = Object.entries(transactionCountObj).sort(
    (a, b) => {
      return b[1] - a[1] || a[0] > b[0] || -(a[0] < b[0]);
    }
  );

  return sortByAmountThenName.map((arr) => arr.join(" "));


```

- We didn't fully understand how the compare function used in the sort method was working.
  We understood the sorting by count part, but the alphabetical part confused us, specifically the `a[0] > b[0] || -(a[0] < b[0])`.
  We decide to accept it worked but would appreciated an understanding of why.
