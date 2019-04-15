Fullstack JS Basics


1. Overview

	- Fullstack JS Syntax cheatsheet: http://bit.ly/1nTaXDr


2. History and Future of JS

	1. What is JS?

			- Created by Brendan Eich in mid-nineties to add functionality to websites (for Netscape)
			- Makes websites more responsive and dynamic within a single page (eg. Gmail, Trello, Google Maps)
			- ECMAScript is the standard scripting language for JS (named after European Computer Manufacturer's Assoc.)

	2. Why JS?
			- Used across stack:
				* client side (angular.js), 
				* server side (node.js vs Ruby/Python), and 
				* database (mongoDB vs. SQL) 


3. Values, Types, and Variables

	1. Values

		- Values are datatypes, or information stored in a specific way, with a specific purpose and behavior
		- Values each have their own specific methods (eg you can multiply two numbers but not two strings)
	
	2. Value types:
			> Primitives
					* Strings - characters
					* Numbers - perform arithmetic operations
					* Booleans
					* Null
					* Undefined
			> Objects

	3. Variables
			- Variables are labels or identifiers for values
			- Variables are pointers (EJS)

			- Variable *instantiation*
				- **var** keyword *instantiates* a new variable [memory allocated so that obj can be used]
				- **=** assigns a value to a variable
				- the value can be any datatype in JS (eg strings, numbers, booleans, functions)
				- variables can also be assigned to the result of an expression

			- Variable Definition (2 steps)
				1. Declaration [lets the compiler know that some class exists]
					- Creates a named variable, but does not assign a value to it (eg "var pi;")
					- By default a variable has the value "undefined"
				2. Initialization
					- Uses = to assign a value to the variable

			- Variable naming conventions:
				- Cannot contain spaces
				- Must begin with a letter, an underscore "\_" or a dollar sign "$"
				- Can only contain numbers, underscores, letters, or dollar signs
				- Variable names are case-sensitive
				- Use *camelcase* (ie first letter for first word is lowercase, first letters for additional words are uppercase) (eg thisVar)
				- Certain Reserved Keywords may not be used as variable names, because they have other meanings within JavaScript

	4. Expressions

		- Types
			- Literal (any literal value, eg numbers, strings, booleans)
			- Arithmetic (+, -, %, \*, /)
			- Assignment (=)
		- Operator precedence
			- [Documentation]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
			- Higher number means it happens first
			- Assignment operator has low precedence AND is read from right to left
			- This is what lets us re-assign variables with expressions like x = x + 1 (expression on right is evaluated with previous value of x; then that value is assigned to x)


4. Functions

	1. What is a method?
			- A method is an instruction
5. Conditionals
6. Strings and Numbers
7. Loops
8. Arrays
9. Coding Challenges

<code> </code>
10. Take-aways