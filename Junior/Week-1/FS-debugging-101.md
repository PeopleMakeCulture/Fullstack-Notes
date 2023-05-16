fs-debugging-101

Lecture (Brian)

"it's not working" => "why is it doing that?"
assume debugging is 2x difficulty of debugging

1. Prevent
	- Don't aim for 'clever' code (eg code golf)
	- Choose simple over clever
	- Choose readable over small
	- Write descriptive commit messages
	- Write code to be read
	- Format for improved readability
	- Functions
		- Aim for small, single-purpose, and pure
		- Fewer arguments > lots of arguments
	- Tools: linters (eg ESLint), autoformatters

2. Detect
	read the stack trace
	browser console open
	server console open

3. Diagnose
	console
		.log
		.trace
	- use the elements tab, which allows us to inspect the html
	- use the network tab

	Ask:
		- Is the server running?
		- Is this the right file?
		- Did you save your changes?
		- Is the build working?

4. Fix

Workshop
- JSON (JavaScript Object Notation)
	- stricter syntax than JS
	- keys and strings must be enclosed in double quotes
