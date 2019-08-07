# Intro to UseEffect in React 2

## Docs
	- Fetching Data: https://www.robinwieruch.de/react-hooks-fetch-data/
	- Complete Guide: 


## Functional Components, Revisted

- functional components capture rendered values

## Fetching Data

## Use effect
 - Takes a callback function and an array of variables as arguments
 - Should return nothing or a cleanup function
 - Should only change state/props by creating side effects

## The []
	- The second (optional) parameter for useEffect is an array of variables to watch
	- Not including it can trigger an infinite loop of re-rendering
	- That is because the effect hook runs when the component mounts or updates, and because every fetch re-sets state, that triggers a re-render, which triggers another re-set of state 

## Use state
	- Use state is itself a hook
