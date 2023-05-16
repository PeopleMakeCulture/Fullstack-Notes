FS-Intro-DOM

1. What is the DOM?
    - Document Object Model
    - An API "running things under the hood of the HTML" (can I find a better explanation?)
    - Makes it possible to use JS to manipulate the [nodee] content and structure
    - gives us access to important methods for navigating and traversing the DOM (like event listeners)

What is a Node? - JS Objects, with attributes that are JS properties and methods - Paragraph tags are spec. types of nodes - All elements are nodes; not all nodes are elements - Nodes have hundreds of properties (attributes)

2. How the DOM gets built

3. DOM is a Tree!
    - Why? B/c trees are great for searching and we want to search the DOM

4. Methods for Searching the DOM:
    1. Using an element ID
        - document.getElementByID("name")//don't make multiple elements w/ same ID; this one is fast, it only finds the first occurance of the thing
        - document.getElement**s**ByClassName("name") (findes every node with a certain Class attribute)
        - getElementsByTagName()
    2. Using a string representing a CSS selector
        - document.querySelector("div.container") (finds first occurance of any kind of selector)
        - document.querySelectorAll("div.container") (finds all )
    3. Returns an array-like Object (with key value pairs)
        - means you will have to call Array.from(arrayLike)
        - also can use const realArr = [...arrayLike]
        - Can also call `for each` in JS6

5. Traversing the DOM
    - Once I've found a node I can call the following methods to traverse the DOM: - .nextSibling - .previousSibling - .firstChild - .lastChild - .parentNode

6. Manipulating the DOM
    1. Changing style
        - element.style.[key = "value"];

    2. Changing CSS Classes
        - className attribute is a string of all of a node's classes
        - classList allows us to movidy the className
          -classList.toggle("class")
          -classList.add
          -classList.renive
          -classList.cibtaubs

    3. Creating nodes
       `let myNewNode = document.createElement('p') myNewNode.innertext = 'thext inside my p tag"`

    4. Attaching new nodes to DOM
       `let body = document.body; body.appendChild(myNewNode) body.prependChild(myNewNode) .reoveChild(oldNode)`

Workshop

7. `console.dir(object)` - Documentation: https://developer.mozilla.org/en-US/docs/Web/API/Console/dir - Gets all the properties of a specified JS object and displays them in the console - Input: object - Output: list?

Misc

-   Can I take screengrabs from slides, save in an image folder on repo, and insert links to markdown

//
git add -A
git commit -m "A lovely commit message"
git push origin master

git pull <partnerA> master
