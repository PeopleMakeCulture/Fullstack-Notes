# React II

## Lifecycle Methods
	- in addition to `componentDidMount` and `componentWillUnmount` we have...
	
### `shouldComponentUpdate`
	- takes next props/state as arguments
	- compares current props and state w/ new props and state
	- returns a Boolean true/false
	- Ex:
	```
	shouldComponentUpdate(nextProps, nextState){
		return (nextProps.name !== this.props.name) 
	}
	```

### `componentDidUpdate`
	- Does NOT fire after initial render
	- Fires only when component is updated 
	- takes previous props/state as arguments

## React Prop Patterms

	- For component composition
	- Not the same as state!!
	- Props = read-only, cannot be changes from inside
	- Think of props as component config

### Default Props
	- declare default props outside the scope of the (class or functional) component
	```Component.defaultProps = {
		prop1 : defaultValue,
		prop2: defaultValue
	}	

### `React.Children`
	- automatically assigned to content btwn opening and closing tags for a child component
	- allows us to use array methods for props.children


## Higher Order Components