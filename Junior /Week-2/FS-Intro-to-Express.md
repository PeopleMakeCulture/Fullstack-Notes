FS-Intro-to-Express

(alt: python simple server?)

1. What is Express?

    - A Node.js framework (easier than writing node code to set up a server, though node can also do that (eg it has a Server obj too))
    - Good for:
        - hosting files
        - setting up routes
        - minimalist, but still easier than straight up Node
    - A web application framework for Node.js
    - A third-party library for Node.js
    - Used to create APIs (Application Programming Interface)
    - A library for request handling in Node
    - Runs on Chrome’s V8 JavaScript engine (fast)
    - Allows one url to handle multiple http requests
    - light abstraction over `http` module
    - creates an application instance
    - Really good for "Restful APIs"

2. What is app?

    - Dude...it's a function! More specifically, it's a function passed to Node's HTTP servers as a calback

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

    - To get a route handler that hits every possible route: - `app.use("*", (req, res, next)=> { do something })`

5. What is middleware?

    - callback functions between between client and server
    - handles responding requests
    - uses the synat with (req, res, next)

6. What is `express.static()`?
   \*\*NOT SURE

7. Other stuff to check out:

    - express.static (send an image or style)
    - Ex:
      `const staticMiddleware = express.static(path.join(__dirname, 'public')).app.use(staticMiddleware)`

8. What is a URI?

    - Universal Resource Identifier
    - Can give a name, a location, or both
    - URLS are a subset of URIs (Universal Resource Locator)
    - Can be thought of as a _route_ (thus, routers)

9. How are requests and responses formatted?

    - Both are long strings?
    - _Requests_ have:

    ```
    Verb, URI (route), headers, body
    ```

    - _Responses_ have:

    ```
    Headers, payload, status
    ```

10. TCP

    - Transmission Control Protocol
    - Lower-level than HTTP; HTTP uses TCP

11. REST again
    - architecture for designing backend urls - paths are nouns - http methods are verbs

# New Notes

1. express.Router

    - 'the `express.Router` class creates modular, mountable route handlers'
    - a `Router` instance is a complete middleware and routing system, eg a 'mini-app'
    - a tool for modularization
    - router modules must be imported into main app, or into an intermediary router instance

2. What is middleware?

    - Middleware are functions!
    - These functions have access to the request object and the response object, as well as the `next` function in the app's request-response cycle
    - the `next` function is a method of the Express router, which exectures the middleware
    - middleware executes code to make changes to request and response objects
    - any `function(req, res, next)` or `(req, res) => {}` is a middleware function

3. Req and Res Objects
    - Both extend Node.js Req/Res objects: https://nodejs.org/api/http.html#http_class_http_serverresponse
    - Objects are created internally by an HTTP server
    - An instance of a `stream` object
      3.1 Req Object: https://expressjs.com/en/4x/api.html#req - Represents the HTTP request - has properties for request query string, parameters, body, http headers, etc - name of obj is determined by the parameters(arguments) passed to the callback function for the HTTP request
      Methods: - req.body - contains key-value pairs of data submitted in the request body - default value is `undefined` - _only_ populated when using body-parsing middleware such as body-parser - req. - a property of req object that is itself an object containing properties mapped to the named route 'parameters' - req.query - a property of req object that is itself an object containing a property for each query string parameter in the route
      eg: ?value=true - Other examples: (req.hostname; req.ip; req.method; req.originalUrl; req.baseUrl; req.path; req.protocol) for getting respective parts of the (http) request
      3.2 Res Object: https://expressjs.com/en/4x/api.html#res - Represents the HTTP response that an Express app sends when it gets an HTTP request

Misc

-   Dan says Lyft just created a special hiring path for boot camp grads
-   app.js is a server?
-   How do I get my terminal to say how long a process took to run (like guy from lunch yesterday)
