Foundations Week 1

1. CLI

	Cursor Nav

    	CTRL + a : Move to front
    	CTRL + e : Move to end
    	CTRL + u : Clear the current line
    	CTRL + l : Clear the terminal window (does not clear history)
    	Up Arrow : Go to previous command
    	Down Arrow : Go to next command

    Common Commands

    	ls -a : displays all of the "hidden" files in a directory
    	ls + <directory> : List Directory (ls for specified directory (eg ls ~/Applications)
    	cd + <path> : changes the current working directory to the path passed as an argument (cd ~/Applications)
    	mkdir + <directory_name> : create a directory with the specified name (eg mkdir Fullstack_Stuff)
    	mkdir + <directory1> + <directory2> + <directory3>... : make multiple directories at once
    	touch + <filename> : create a file with the specified name (eg touch myNewFile.js)
    	mv + <file_to_move> + <destination_path> : Move (move a file or folder to the specified location) (mv myNewFile.js ../Fullstack_Stuff/myNewFile.js)
    	mv + <file_to_rename> + <new_filename>: Rename (mv can also be used to rename a file) (mv typoo.js typo.js)
    	man + <command> : Manual (displays the manual for the current command) (man ls)
    	q : Quit (another "get out of trouble" command. Try q when CTRL + C doesn't work.)
    	.. : Move up one directory in the filesystem
		../../.. : Move up three directories in the filesystem


    Terms


    	File Path : A printout of the absolute location of a file on the filesystem.
    	Directory : A "folder"
    	Standard Output : The output in the Command Line after a command (often displayed as stdout)
    	Standard Input : The input in the Command Line before a command (often displayed as stdin)

1.1 Sublime Text Shortcuts (https://www.tutorialspoint.com/sublime_text)
	
	Cmd+Shift+P : Command Palette 
	Cmd + D : Count number of occurrences
	Cmd+Shift+L : Go to end to comment

2. TDD Workflow
	1. Write tests
	2. Write code that passes tests


