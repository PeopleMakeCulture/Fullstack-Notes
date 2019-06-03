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
	event.preventDefault()
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
		<input type='text' name='username' onChange={this.handleChange} />
			<button type='submit'>SUBMIT</button>
	</form>
}
```

_Make sure to name your inputs_ otherwise you will not be able to access its value with event.target.<Name of Field>.value


