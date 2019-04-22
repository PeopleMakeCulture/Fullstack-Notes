Week-1-Review

What is Deployment?
	- getting something from a local server to someone else's server 
	- DevOps engineering is concerned w/ this field of CS

What's a server?
	- a *program* that serves files

What is a git fast-forwarding error?
	- Means branches are out of sync; master is ahead of deploy branch; don't use `git push` use `git merge`
	- Best practice: commit to master; when you like how it looks, merge master with deploy branch

Is merging only local?
	- Not necessarily! *We* are doing a lot of local deploys, but IRL we often merge into remote branches provided by Heroku, gh-pages, etc
	- AWS, Docker, Kubernetes 
		- "Kubernetes is an open-source container orchestration system for automating application deployment, scaling, and management."

What's the difference between npm (Node package management) script and bash?
	- Bash: less process or ecosystem specific
	- npm/Node: specifically for js applications running outside the server

Misc
	- Good communication practice: respond to 'does that answer your question' with a recap of what you understand the answer to be

What is an API?
	- a program that lets us write to or read from a database 
	- a way of interfacing with applications? 
	- any structure that lets us interface with a service, app or platform using code 
	- Spotify APO programmatic way to build playlists
	- document object is part of the browswers API
	- Google maps has a great API
	- APO developers are responsible for designating how much access/control users can have 

How do we do web scraping?