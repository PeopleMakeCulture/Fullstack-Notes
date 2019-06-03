FS-Thunks

What is Thunk? - middleware - if action is a regular action object => do nothing and pass it on - if the action is a function

THUNK WORK FLOW

In your Redux Files...

1. Create an action & update reducer

2. Create a thunk creator

In your React Component...

3. Create a mapDispatchToProps

4. Invoke that function in componentDidMount

5. Use that prop to do whatever you need (in render())

## Code

```
    function mapDispatchToProps(dispatch){
        return{
            gettingCandy : () => dispatch(gettingCandy())
        }
    }
```
