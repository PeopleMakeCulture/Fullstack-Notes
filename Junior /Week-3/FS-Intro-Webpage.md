1. EF6 Import Export Syntax
	- `export default module` (instead of `module.exports(module)`)
	- `import` module `from` path (instead of `const module = require(path)`)

2. Why use Import/Expore?
	- More flexible

3. AJAX
	- Abbrev for Asynchronous Javascript and XML
	- Requests 
	- Allows us to build single page applications (SPAs)~!
	- Dynamically updates the DOM for a single http address
	- Networks in ConsoleLog shows us all these requests
	- window.fetch() replaces app.get()
	- is asynchronous
	- can use `.then()` promise chaininggit 
	- works over `http`
4. What is fetch?
	- lets us request from the browser (front-end) stuff from the back-end(server)
	- allows us to get things w/o refreshing
	- Cannot 'fetch' directly from database, b/c it 'talks http' (uses http protocall)  which uses pg database
	- When we use express, we need to specify a Data Serialization format (text, json), even if express/middleware is already giving us a stream formatted in that format (JSON)

Misc.
	//ask nick! Why is nytimes not a SPA? Is every page treated like its own app?
	//another example - Uber - a microservice architecture - a collection of small apps, eg one for driver, one for rider, one for payments, etc