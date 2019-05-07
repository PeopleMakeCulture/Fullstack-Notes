FS-Intro-to-React

# Pre-Reading

0. Requirements (What do we import?)

```
 	import React from "react";
 	import ReactDOM from "react-dom";
```
 Why both 'react' and 'react-dom'? 
 	- React is the core library that provides the ability to write components, and ReactDOM is a helper that gives us the ability to take a React component and transform it into real DOM elements. 
Why are they separate libraries?
 	- the DOM isn't the only environment where we could use React to write a UI! For example, we could use React to describe a native mobile UI for iOS or Android using 'react-native'! 


1. Components
	- a react component is a JS function
	- component names start with a capital letter
	- lower case names reserved for html & React components
	- like html elements, each component has attributes
	```
	function Component(){
		return <h1>Hi!</hi>
	}
	```
	- I think we call components like this:
		 ```ReactDOM.render(<Component />, rootElement)```
	- Alternatively:
		- Can create classes 

## 1.2. Components with Classes
	- All class components extend the `React.Component` class

2. JSX

	- React's HTML-like syntax
	- Looks like JS and HTML pushed together
	- React allows us to write html directly into our component, instead of writing JS, b/c the library takes care of translating our html into JS function calls for us
	- the Component above is translated into the following React code: 
	```React.createElement("h1", null, "Hi!")
	```
	- In JSX, use a single pair of curly braces `{}` to evaluate a JavaScript expression.

3. State and Props
	- Parents pass data down to children via props; children pass data up to parents via state
	- Props are JSX for HTML attributes (eg class, )
	- Props are read only things we give to a component; states are things we can change
	- Props and State allow up to build reusable 
	- "Props are how components talk to each other"
	- Props are properties of the class declared in the constructor function
	- Most things will be props
	- States are only used to respond to input from user
	- `setState` is called inside an event handler
	- Eg:
	```
	constructor(proprs){
		super(props);
		this.state = {favoriteTopping}
	}
	```

4. How do we decide what should go in this.state?
	- Ask: what needs to change?
	- Ask: what methods will I need for the component 


#Handling Clicks
```
	class MyComponent extends React.Component {
  handleClick = (e) => {
    this.setState({clicked: true});
  }
  render() {
    return <a href="#" onClick={this.handleClick}>Click me</a>;
  }
}
```
#Another Rule of Thumb
	- seperate view and state components
	- first, a state component should load the data
	- then, a view component will change the outputting of HTML markup and local state changes

#Higher-Order Components (HoCs)
	- components you can whrap around another component, which can pass it special props


4. The Component API

5. Component Types

## Leacture Notes - Brian

React demos love to-do lists!

1. Problem: There's a lot to remember

3. State and View

		- Changes in the view of a React component are always described by state. This forces us to think about about our UI in terms of the data it presents. 

		2. State and View
		- state is raw data (eg complete or imcomplete on a to-do list)
		- view is presentation (eg ticking off a radio button when a task is complete)
		- Ex: To add a new task to our to-do list. We need to:
			1. Push to-dos to our array (in data)
			2. Append a new element to the DOM (this is presentation)
		- React condenses these two things into one thing:
			- If we change the data (state), React re-renders the view for you!!!
		- **Note** State is always a JavaScript object
			- Information about state is stored as a key-value pair on the State object (this.state)
			- State is immutable - we cannot modify it directly
			- Instad, use this.setState() method to change state
		```
		this.setState({showStatus:all})
		```

		3. Ask : If the app looks like this, can I ask what the data structure (the state) is?

##Example Code

HTML
<body>
	<div id="root"></div>
</body>

ReactDOM.render(compoenent, dom_address)
	
Render!
	- method on class React.Component, whcih is the parent of all React class components
	- Render( returns JSX describing our view)

##Component Life Cycle 
	- important so we can freeze and do stuff between one life cycle stage and another
	- Usually, an async function
	- Like hooks in Sequelize
	1. ReactDOM.render() => Initial Render => mounted component => componentDidMount

##The Virtual DOM
	- React makes websites more performant 
	- Compares the JSX output with a virtual DOM stored in memory
	- Only changes what actually needs to be changed
##Mounting
	- Component JSX is turned into real live DOM nodes 

##Component Did Mount
	- only fires on initial rendering
	-not on state manipulation
	- good place for AJAX fetch requests
	- Good place for event listeneres 