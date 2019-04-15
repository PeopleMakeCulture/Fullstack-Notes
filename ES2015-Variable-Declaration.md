Fullstack Foundations

Week 1 

7. ES2015
	
	- Newest version of JS
	
	1. const & let

		- new variable declaration keywords
		
		 **const**

			- [Documentation]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
			- Requires an *initializer* (i.e. must define a value in the declaration statement) 
			- Creates a read-only reference to a value
			- Does NOT mean the value is immutable, just that the variable cannot be reassigned (eg if a const points to an array or an object, its properties can be altered)
			- CAN share a name with a variable declared with *let* within the scope of a block 
				- Ex:
```				
					// define MY_FAV as a constant and give it the value 7
					const MY_FAV = 7;

					// it's important to note the nature of block scoping
					if (MY_FAV === 7) { 

					    //creates a block scoped MY_FAV variable 
					    //works equally well with let to declare a block scoped non const variable
					    let MY_FAV = 20;

					    // MY_FAV is now 20
					    console.log('my favorite number is ' + MY_FAV);

					    // this gets hoisted into the global context and throws an error
					    var MY_FAV = 20;
					}
```
			- By convention, const variables are named in all upper case letters
			- **No changes to global object** global constants do NOT become properties of the window object
		

		 **let**	
		
			- [Documentation]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
			- Initialization is optional, as with *var*
			- Scoping
				- *let* has different scoping rules to *var*
				- *let* declares variables limited to the blocks in which they are defined and any sub-blocks of those blocks 
				- *let* allows you to define multiple variables of the same name within a single function, whereas the scope for a variable declared with *var* is the entire enclosing function
					Ex:
```
					function varTest() {
					  var x = 1;
					  if (true) {
					    var x = 2;  // same variable!
					    console.log(x);  // 2
					  }
					  console.log(x);  // 2
					}

					function letTest() {
					  let x = 1;
					  if (true) {
					    let x = 2;  // different variable
					    console.log(x);  // 2
					  }
					  console.log(x);  // 1
					}
```


	 	 **var** - Main Differences

	 	 	1. No Hoisting! 
	 	 		- Referring to a variable declared with *const* or *let* before it is defined results in a *ReferenceError*
	 	 		- Referring to a variable declared with *var* before it is defined results in `undefined`
	 	 		- A variable declared with *var* inside a function is implicitly hoisted to a global scope if that variable has been declared with let in a global scope
			2. No changes to global object! 
				- Unlike with *var* global variables declared with *const* and *let*  do NOT become properties of the global object [eg Window]
					Ex:
					```
					var x = 'global';
					let y = 'global';
					const z = 'global'
					console.log(this.x); // "global"
					console.log(this.y); // undefined
					console.log(this.z); // undefined
					```
		 Gemerally accepted rules:
				1. Use *const* by default
    			2. Use *let* only if re-assignment is needed
    			3. Do not use *var* in ES2015
