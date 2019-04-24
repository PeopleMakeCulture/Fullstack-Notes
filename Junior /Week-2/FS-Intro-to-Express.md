FS-Intro-to-Express

1. What is Express? 
	- A web application framework for Node.js
	- A third-party library for Node.js
	- Used to create APIs (Application Programming Interface)
	- A library for request handling in Node
	- Runs on Chrome’s V8 JavaScript engine (fast)
	- Allows one url to handle multiple http requests
	- light abstraction over `http` module
	- creates an application instance
	- Really good for "Restful APIs"

2. What is npm init?
	- It creates a new app(?)

3. What is app.use good for?
	- verb agnostic actions - doesn't care if it's app.get or app.send whatever
	- also does fuzzy matching for string, NOT an exact match

```
app.get("/:id", (req, res, next) => {
	const id = Number(req.params.id)
	const person = db.find(e => e.id ===id)
	rec.send(`${person.name} is great at ${person.hobby})
})
```

4. What about 404 Error Messages? 
	- To get a route handler that hits every possible route:
		- `app.use("*", (req, res, next)=> {
			do something
		})`

5. What is middleware?
	- callback functions between between client and server
	- handles responding requests
	- uses the synat with (req, res, next)

6. Other stuff to check out:
	- express.static (send an image or style)
	- Ex:
	` const staticMiddleware = express.static(path.join(__dirname, 'public')).app.use(staticMiddleware)`

7. What is a URI?
	- Universal Resource Identifier
	- Can give a name, a location, or both
	- URLS are a subset of URIs (Universal Resource Locator)
	- Can be thought of as a *route* (thus, routers)

8. How are requests and responses formatted?
	- *Requests* have: 
	```
	Verb, URI (route), headers, body
	```
	- *Responses* have: 
	```
	Headers, payload, status
	```

9. TCP
	- Transmission Control Protocol
	- Lower-level than HTTP; HTTP uses TCP

Misc
- Dan says Lyft just created a special hiring path for boot camp grads
- app.js is a server?
- How do I get my terminal to say how long a process took to run (like guy from lunch yesterday)
