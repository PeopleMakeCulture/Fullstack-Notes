Fullstack-Hardware-Fundamentals
[Link to Video]: https://www.youtube.com/watch?v=5pmSAEeMsfo&feature=youtu.be

1. Information Theory and Hardware

	- Information theory defines information as symbols that represent things
	- Bool
	- Logic gates
	- Claude Shannon - father of information theory (US)
	- Charles Babbage & Ada Lovelace (England, 19th C.)- "difference engine" was first mechanical  computing machine
	- Modern computers use electric vs mechanical switches
		- 'signal becomes action' [eg switching on a lightbulb]
	VN Architecture (underpins all modern PCs)
		- Arithemtic Logic Unit (ALU) within CPU which takes input and produces output; linked to memory
		- CPU = control until and ALU
	- Hopper - Magnetic Tape Storage; Compilers
	- Random Access Memory (RAM) vs Hard Disk Drive (HDD)
		- Flash memory (not persistant?)
		- Floating gate transisters (Solid State Drives)
	- Hard Drive is Storage - where we keep information, but not where we do things(comuptations) with it
	- If CPU = brain ('metal'), memory is closer than storage
		- can think of CPU as set of input/output switches
	- analogy: storage : file cabinet :: memory : desk
	- RAM is sweet spot between speed and space

2. Representations and Encodings

	- IEEE 754 Floating Point Signed Double
	- Float = Floating point number, with 11 bits for saying where the point should go; 52 bits for number
	- Number weirdness:
		- 1/10 is impossible to represent as decimal in binary (like 1/3 in base ten)
		- That's why math sometimes gets weird at really small values - the last bit is off by a rounding error
	- Hexadecimal 
		- 16 spaces 0-9 and a-f
		- Useful b/c every hexadecimal symbol is equivalent to a 4-digit binary symbol
	- Images can be encoded
	- Sounds can be encoded

3. Abstractions and Langauges (1:03)
	- Assemblers take text and translate it to machine code
	- Compilers (1952, Grace Hopper): translate from a high level (more abstract) language into machine code
		- eg allows for looping
		- Compilers generate the actual instructions to alter registers (in hardware)
	- Languages and Memory Management
		- Lower level languages (eg C) allow a programmer to specify how to alter and use memory
		- Higher level languages (eg JS) don't require a programmer to specify how to use memory; they automatically reserve memory for you and release memory when it's no longer needed

4. Abstract Data Types & Structures
	- primitive datatypes are immutable (Pass by Value)
		- when assigning a variable to a primitive, we pass it the value of that data
		- when we assign a second var (y) to be equal to the value of a first var (x), the computer stores that integer value in two different places
	- objects are mutable (Pass by Reference)
		- unlike primitives, variables assigned to point to objects only point to the address of the object, not the data stored in it
		- a second variable set equal to the first will create a new pointer to the same object; it will not allocate more memory to make a second object
		- modifying the object refered to by the first var will also change the outputs when calling the second var, since both variables refer to the same mutable object
	- eg: 
		1. Queues
		2. Linked Lists
		3. Hash Tables
		4. Trees
5. Extras