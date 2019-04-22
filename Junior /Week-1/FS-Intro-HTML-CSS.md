FS-Intro-HTML-CSS

Lecture (Brian)

1. CSS 
	- avoid specifying style in HTML file
	- designed c.1994 to address the issue that neither author nor reader has sole control over page layout
	- whole industries (UI/UX designers) just do CSS
	- are declarative, ie tell it how you want it to look but doesn't tell it how
	
	1. Terms
		- rules
		- declarations
		- selectors: tells us which part of the page a rule operates on 
		- properties/values (key pairs)

	2. Selectors
		- *tag* selectors operate on elements (eg inpit)
		- *class* (eg .btn)
		- *id* unique across a page (eg #upload)
		- *attribute* (eg [type = "file"])
		- *pseudo-element* (eg ::after)
		- *pseudo-classes* (eg :hover)

	2.1 Combinators
		tag.class 		element w/  tag && .class
		tag .class 		element with .class whose *ancestor* mateches tag
		tag,.class 		element with tag || .class
		tag>.class 		element with .class whose parent matches tag

	3. Cascading
		- An element's style is a merge of every rule whose selector it matches
		- If multiple CSS rules conflict, the *most specific rule wins*
		- If rules conflict with the same level of specificity, the one downloaded last wins 
		- in-line style is the most specific

2. Boxing
	- how browser positions items on a page
	- Sizing
		- Relative: (ex: 50%, 3em)
		- Absolute: (eg px, pt, in)
	- background colors extend to edge of padding

Workshop

	- p is selector
