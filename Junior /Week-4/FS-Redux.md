Intro to Redux

What is Redux: - A state management library; - A 'predictable state container'
Why use Redux: - Larger apps need better state management

1. Principles

    1. Single source of truth
    2. Data is read-only
    3. Changes are requested through action objects & made with pure functions

2. Actions

3. Reducers

    - Part of the store
    - Determines new state
    - Turns a series of actions into a single outcome
    - Creates new states per action, instead of modifying previous state
    - eg:
      `const reducer = (state = {balance: 0}, action) => { if(action.type === 'DEPOSIT'){ return { balance: state.balance + action.amount } else { return state } } }`
    - Case-Switch syntax might be useful here

4. Stores

    - container for state
    - no setter method => read-only from POV of app
    - provides methods of getting the state and _subscribing_ to state changes

        2.1 Store.dispatch(action) - Dispatches actions that produce a new state - Similar to React's this.setState() - Redux's way to affect state - Triggers a reducer to produce a new state - In plain JS, an action is a JS object with a 'type'
        eg: - `store.dispatch({type: 'DEPOSIT', amount: 100})` - `store.getState()`

        2.2 Store.subscribe(listener) - registers listeners - usually in react methods - called any time an action is dispatched and some part of state may have changed - often calls store.getState() to read new state inside a callback

Lecture - Dan

1. Global v Local State

2. The react-redux API will make it easier to integrate these two libraries (view an state) by offering new methods with some boilerplate code

3. Allows us to rewind states - easier to debug - however, we will need redux logging middleware (similar to morgan and volleyball for express)

# 3 Design Questions

1. What actions can the user take in our app?
2. How can we represent the state of our app?
3. How doe sour state change in response to user actions?

# Code

New Store:

```
import { createStore } from 'redux'

const reducer = (state, action) => {
    // check the action & maybe produce a new state
    return state;
}

const store = createStore(reducer)
```

-   Notice a reducer is required to create a store
