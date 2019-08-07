FS RESTful APIs

-   Delete Routes

1. Write the backend route
    ```
    router.delete('api/todo/:id', (req, res, next) => {
        ToDo.destroy({
            where: {
                id : req.params.id
            }
            })
            .then(()=> res.status(204).end())
            .catch(next)
        })
    ```
2. Front End
   2.1 Create Delete Button (on List)
   2.2 Connect Delete Button to an onClick={this.handleClick}
   2.3 Write handleClick function - this makes an async axios.delete call, so it should be in a thunk

```
        removeItem(itemId){
            axios.delete(`api/todos/${itemId}`)
            axios.get('/api/todos')
            .then(res=>(this.setState(todos: res.data)))
        }
```

3. Redux Store
    - Connect the React Compenent
    - Set up MapDispatchToProps
    - Write Thunk Creator
    - Write Action Creator
    - Update Reducer
