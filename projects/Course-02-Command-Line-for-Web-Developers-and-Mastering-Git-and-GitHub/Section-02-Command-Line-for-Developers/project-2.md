
#Command Line for Web Developers Part 2 Project 2

```bash
#!/bin/bash
echo "type in the name of your project"
read project
mkdir $project
	cd $project
	echo "enter project description"
	read description
	echo "enter author"
	read author
	printf "<title> $project </title> \n <h1>$project</h1>" | tee index.html
	printf " # $project \n >$description \n <hr> \n $author "> README.md
mkdir css
	cd css
	echo $"body {background: gray;}" > style.css
	cd .. 
mkdir image
mkdir js
	cd js
	touch main.js

```