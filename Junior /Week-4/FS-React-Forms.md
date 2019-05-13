FS React Forms

Problem: Wouldn't it be nice if after typing in a user password, the form dynamically told you that the password needed to have a symbol

Synchronous HTML replaced by Asynchronous JS

Ajax Forms - Use JS rather than default HTML behavior - Remember to use `preventDefault`

React Forms

```
constructor(){
	super()
	this.state = {
		username: ''
	}
	this.handleChange = this.handleChange.bind(this)
}


handleChange(event){
	this.setState({
		username:event.target.value
		})
}

handleSubmit(event){
	event.preventDefault() //defaults to a refresh
	console.log('doing something') //usually this would be sending it to a database, similar to a post/put request
}

render(){
	<form onSubmit={this.handleSubmit}>
		<input type='text' name='username' onChange={this.handleChange />
			<button type='submit'>SUBMIT</button>
	</form>
}
```

_Make sure to name your inputs_ otherwise you will not be able to access its value with event.target.<Name of Field>.value

## Controlled vs. Uncontrolled Components

    - Controlled compoent: Form data controlled by a React component
    - Uncontrolled component: data is controlled by the DOM itself (less useful)
    Uncontrolled:
    	- doesn't interact w/ state using value={this.state.keyname}
    	- changes to the form update the state, but changes to state doesn't change the form

## Where does the form state belong?

Misc: - Redux will make state completely seperate from the components
