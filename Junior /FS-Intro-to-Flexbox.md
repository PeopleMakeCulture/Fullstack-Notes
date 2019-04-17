FS-Intro-to-Flexbox

1. What is flexbox?
	- A layout module
	- caniuse.com

2. How to use Flexbox

	1. Container (parent)

					1. Initialize in parent container
					***
						 `.container {
							display: flex;
						}`
					***
						- automatically displays container elements in a row (instead of defaulting to display elements vertically)

					2. Flex Direction
						1. Ways to order elements
							- column
							- column-reverse
							- row
							- row-reverse
						2. Axes
							- main-axis: horizontal axis for rows; vertical axis for columnns
							- cross-axis: the perpendicular one
					3. Flex Wrap
						***
						 `.container {
							flex-wrap: wrap 
						}`
					***
							- if elements extend past an edge of a browser window, wraps to next row

					4. Flex Flow
							***
						 `.container {
							flex-flow: row-wrap
						}`
					***
						- takes in flex direction and flex wrap

					6. Centering
						-justify-content: (centers on main axis, usually along a row)
							- flex-start
							- flex-end
							- center
							- space-around
							- space-between
							- space-evenly
						- align-itmes: (centers along cross axis, usually vertically)
							- flex-start
							- flex-end
							- center
							- flex-center
							- baseline
							- stretch

	2. Item (Child)

				1. Adjust Order
					- default order is 0
					- order: (num) (changes order of an element)

				5. Adjust Size	
					- flex-grow: (num) 
					- flex-shrink: (num)
					- useful for responsive design


3. Responsive design dev tools
	- start w/ inspector, but make sure you test on device also b/c it isn't always accurate






//
DOM Checkpoint open