FS-React-Redux

1.  Provider
    -   A react component from the r-r library that serves the single purpose of providing state to child components

```
    <Provider store={store}>
        <App />
    </Provider>
```

2. connect()
    - import from r-r library
    - maps redux store's state and dispatch to react props
    - mapStateToProps replaces store.getState() and passes state as props
    - mapDipatch to props replaces store.subscribe(listener) and maps Redux actions to functions that React can pass with props

```
    function mapStateToProps(state){
        return {todo: state.todos[0]}
    }
```

```
    function mapDispatchToProps(dispatch){
        return{
            //action
        }
    }
```
