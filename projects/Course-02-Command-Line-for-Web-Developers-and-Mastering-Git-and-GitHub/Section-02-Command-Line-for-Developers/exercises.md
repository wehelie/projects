
###Exercises 1
- - - 
1 . Write separate `chmod` commands to add read and execute permissions on a file for each of the four user types.
```bash
	chmod go+r-x file.txt
```

2 . Write the `chmod` command to remove write access on a file for everyone except the owner user.
```bash
	chmod w-g file.txt
```

3 . Write the separate `chmod` commands that forces a file to be read-only for each of the four user types.

```bash
	chmod w-ugoa file.txt
```

4 . Write a `Bash` script that accepts a file and makes it executable for everyone.


```bash
	chmod a+x file.txt
```

###Exercises 2
- - -
1 . Write a Bash alias that pings google.com exactly 5 times before stopping.

```bash
	ping -c 5 google.com
```


2 . Write a Bash alias that performs a long-formatted listing of all files in the present working directory and pipes the output to the `more` command, or similar pager utility.

```bash
	alias fld="ls -l | more"
```

3 . Write the code to customize the `$PS1` environment variable to show your username, your machine’s hostname, and the name of the present working directory.


```bash
	PS1='PS1='\u@\h:\w\$'
```

4 . Write the code to customize the `$PS1` environment variable to your own preference, as if you were to place this configuration in your own `.bashrc`


```bash
	export PS1="\u@\h \w>" 
```

###Exercises 3
- - -

1 . Write a command that outputs all of the `JPEG` images in a directory that contain the word “cat” to a file named “cat_photos.txt”.


```bash
	find . -name '*cat*' -name '*.JPEG' > cat_photos.txt 
```

2 . Write a command that outputs a sorted list of names and contains only names that have the letter “s” from a file called “names.txt.”


```bash
	# use grep to find words starting with s.
	grep -o '\bs\w*' names.txt | sort
```
###Exercises 4
- - -

1 . Create a Bash script that accepts three parameters and echoes each parameter in sequential order.


```bash
	#!/usr/bin/env bash
	echo "argv 1 is $1. argv 2 $2. argv 3 is $3"

	# ./script.bash dog cat mouse 
	# argv 1 is dog. argv 2 cat. argv 3 is mouse
```

2 . Create a Bash script that accepts one parameter as a search term and lists all of the files in the present working directory containing that term.


```bash
	#!/usr/bin/env bash
	data=("$(ls -trh "$@")")
	for entry in "${data[@]}"
	do
  		echo "${entry}"
	done

```
