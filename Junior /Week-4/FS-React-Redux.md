FS-React-Redux

1.  Provider
    -   A react component from the r-r library that serves the single purpose of providing state to child components

```
    <Provider store={store}>
        <App />
    </Provider>
```

2. Connect
   import from r-r library
   maps redux store's state and dispatch to react props


    //  maps
    // replaces store.getState()?

```
    function mapStateToProps(state){
        return {todo: state.todos[0]}
    }
```

    // this one maps Redux actions to functions that React can pass with props
    // replaces store.subscribe(listener)?

```
    function mapDispatchToProps(dispatch){
        return{
            //actions
        }
    }
```
