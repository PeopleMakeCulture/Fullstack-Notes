# Optimization

## DON"T OPTIMIZE BEFORE YOU NEED TO!
- Only optimize if you have a good evidence-based reason to do it
- Ask about how your program is going to be used (input size, rate of requests, number and age of dependencies, etc)
- Use 'benchmarking' to determine if it's necessary


## You might be prematurely optimizing if...
- You haven't brute forced it yet (or put out 2-3 ways you can do it)
- You haven't asked the interviewer yet what their constraints are
- You haven't considered what you're optimizing for (time to market or efficiency of process?)

## Ask Questions
- Should I worry about optimization?
- What enviornment am I in? What are the constraints?
- Will this run once or many times?
- Is the input sorted?
- Consider: 
	- What is the best possible runtime?
	- Can you do some pre-computation up front to save time later? (Eg Boyer-Moore string search algo)
	- Binet's formula for fibonacci 

## Things to optimize for:
- Time, space, money, electiricity, human resources, etc
- Of these time is the only one that's unidirectional and limited
- That said, you should optimize for whatever the bottleneck is

## How do we save time at the expense of space?
- caching!
- data structures!
	- hash tables!
	- binary search
- dynamic programming!

## Dynamic programming
- annoyingly doesn't mean what the words within it means, :(

## Memoization 
- Storing answers from previous function
- Implement a layer of caching at the function level
- Classic example: fibannoci numbers



