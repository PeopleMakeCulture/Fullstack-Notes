FS-Intro-to-Git


1. Git Commands
	
	git init 				// Creates a repository
	git clone <\path>		// First time pull to get a copy for your local workspace
	git pull				// Fetches from and integrate with another repository or a local branch
	git commit
	git push				// Updatez remote refs along with associated objects
	git remote				// ? what does this command do?
	git config 				
	git mv					// moves
	git add
			-a 				// adds everything, including in parent directories 
			*				// adds everything in present working directory and below
	`git reset <commit>` 
			- hard 
			--soft			// [ex: `git reset --soft head~1`]
	git checkout			// allows you to switch between branches
	git fetch 				// Download objects and refs from another repository

2. What is Git?
	- A Distributed Version Control System (DVCS)
	- A *language* for version control that provides a set of tools for project management and collaboration
		(eg forking, issue tracking, wikis, PRs(?)
	- NOT the same as github, which is basically a cloud service
	- Structures code as a linked list
	- `commit` creates a new node in that linked list
		- It documents changes over time
		- It organizes changes in a way that makes debugging easier
	- `HEAD`
		- References the last commit in current branch

3. Configuring Git
		//config your user name and email //i think i've already done this?

4. Git Terminology

5. Workspace and Staging Area
	- Workspace
		- a local working directory where you do your actual work [in my case that's on my desktop]
		- contains tracked files, untracked files, and a special `.git` directory
	- Staging
		- area to prepare files for commits [?]

6. Branching
	- `pull requests` are part of github not explicitly part of git
	- `merge conflicts` asks a human to resolve the conflict

7. Directories
	- Organizing good directories helps avoid merge conflicts

8. Forking v Cloning
	- cloning - 'i want to work on this project'
		- cloning is a first time pull
	- forking - 'i want to work on my version of this project'

Misc:
	//Game of life - can you make it adjustable size?

