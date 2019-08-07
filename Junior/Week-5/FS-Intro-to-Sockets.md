FS-Intro-to-Sockets

Questions:
What is the WebSocket protocol and API ?

Problem:

Clients ask for things and servers serve them. But what if a server wants to _push_ something to a client? How can we make web communication bi-directional?

A Bad Solution:
Long-Polling: Keeping an HTTP connection open until the server has some data to push to the client

1.

What we want: a persistent, low latency connection that supports transactions initiated by either a client or server

Solution:

## WebSockets

    - don't carry overhead of http (all the headers and cookie data that are transferred with your payload to the server)
    - can transfer as much data as desired w/o additional overhead of traditional HTTP requests
    - transfers data as 'messages', which contain 'frames' that contain the data/payload that you want to send
    - 'standard for bi-directional realtime communication between servers and clients'
    - allows devs to create scalable real-time platforms


    - both parties can start sending data at any time
    - client establishes connection through a 'handshake'
    - starts with client sending regular HTTP req to server
    	- the client's HTTP req has an `Ugrade: websocket` header to inform the server the client wants to establish a WebSocket connection
    	- if the server agrees, the res header also has `Upgrade: WebSocket`
    	- this completes the 'handshake'

## Note

    - Sockets must be plugged in on both the server and client sides!
    - That means:
    	Server:
    		- npm install to add to package.json
    		- server folder hosting `const server = app.listen()` should also have a `const io = socket(server)`
    	- client folder script file (index.js) should have
