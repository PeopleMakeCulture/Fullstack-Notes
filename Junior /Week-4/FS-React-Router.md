FS React Router

-   declarative routing
-   when the url changes the router component changes its state; therefore, the router needs to be a parent of almost everything

import {BrowserRouter as Router} from 'react-router-dom'

```
const Main = ()=> {
	return (
		<Router>
			**Everything Else**
		</Router>
		)
}
```

## Links

    - link is like an `<a>` tag

## A route is path + a compenent

    `<Route path = '/somePath' component={SomeComponent} />`

###Route Props

    - `.match`
    	- Useful when working with urls with props (eg path='/puppies/:puppyId')
    	- contaims params key (like express)

```
< Route path='/puppies/:puppyId' compoennt={Puppy}/>

const Puppy = (props) => {
	return div {props.match.params.puppyId} div
}
```

    - `.history`

    	- props.history allows us to manipulate the history
    	- we create a stack pages visited using the method `history.push()` (which is not the array.prototype.push but a unique method of the history prop)
    		- .push() actually updates the URL and changes the view
    	- history.goBack(), history.goForward()
    	- browser history behaves like a stack


    - location
    	- where the app is now

###Custom props - use Route path + render instead of Route path + component - `render={ ()=> <Puppies user={this.state.user} /> }` instead of component={Puppies}`- to pass all props with our custom props use:`render= {routeProps=> Puppies{...routeProps, customProp} />}`

##exclusive routes: - if error: a <router> may have only one child element => wrap the routes with a <switch />
