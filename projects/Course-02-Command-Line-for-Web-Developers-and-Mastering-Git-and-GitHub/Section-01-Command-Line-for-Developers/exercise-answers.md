#Exercise Answers :octocat:
###`Project Assignment 1: Beginner`
##1 
Write the command that will allow you to navigate to two directories above your current directory. 


:beginner:**Answer**: 
```bash
	cd ../..
```


##2 
Write the command and flag that will list the files and directories inside of your current directory.

:beginner:**Answer**:
```bash
	ls

```



##3
Write the command and flag that will list all of the files and directories in your current directory in long-format. 


:beginner:**Answer**:
```bash
	ls -l

```

##4
Write the command and flag that will list all of the files and directories in your current directory, including hidden files. 

:beginner:**Answer**:
```bash 
	ls -a
```

##5
Write the command that will create a folder in your current working directory and name it clean_code_examples.

:beginner:**Answer**:
```bash 
	mkdir clean_code_examples
```

##6
Write the command to create a new file. Give the file a name and use the `.txt` extension

:beginner:**Answer**: 
```bash 
	touch example.txt
```

##7
Write the command that will output the contents of the file `socks to buy.txt`, located in your current working directory, to the terminal. Assume that either `socks to buy.txt` already exists, or create it yourself.

:beginner:**Answer**: 
```bash 
	cat socks to buy.txt
```

##8
Write the command to display your Present Working Directory.

:beginner:**Answer**: 
```bash 
	pwd
```

##9
Write the command to output the current user to the terminal. The current user is generally the account that is logged into the operating system and currently using the terminal.

:beginner:**Answer**: 
```bash 
	# prints out current username
	echo "$USER"
```

##10
Write the command to list the files and folders of the folder two above your current directory. For example, if you are in `C:/Users/John Wayne/My Documents/Tax Forms/`, display all files and folders within the directory `C:/Users/John Wayne/`.

:beginner:**Answer**: 
```bash
	ls ../..
```
##11
Write the command to create the file `list of best cat pictures.html`.

:beginner:**Answer**: 
```bash
	touch "list of best cat pictures.html".txt

```

##12
Write the command that will change your current directory to `C:/Users/Default User/My Documents`. Note: the directory `C:/Users/Default User/My Documents` may not exist on your computer; if that is the case, ``you’ll see the error bash: cd``: `C:/Users/Default User/My Documents`: `No such file or directory`.

:beginner:**Answer**:
```bash
	cd C:/Users/Default User/My Documents
```

##13
Write the command that will ping the ip address `8.8.8.8`.

:beginner:**Answer**: 
```bash
	ping 8.8.8.8
```

##14
Write the command to change your current directory to the folder `<HOME>/documents/`, where `<HOME>` is the single character shortcut for `$HOME`.


:beginner:**Answer**: 
```bash
	cd ~/Documents
```


##15
Use the `echo` command to display the text “My name is ” followed by your first name. View the help or man pages for echo to learn the command’s arguments `man echo`, help echo or `echo --help`.

:beginner:**Answer**:

```bash
	echo "My name is $(whoami)"
```
##16
Write the command that will show the output of two files, one after another: `tylers favorite songs.txt` and `sarahs favorite songs.txt`.


:beginner:**Answer**:

```bash
	# reads the content of the first and the second file
	# then displays them in order
	cat tylers favorite songs.txt sarahs favorite songs.txt
```

##17
Write the command to show the help, or manual, for the `echo` command, and add it to a file called `echo_options.txt`.


:beginner:**Answer**:

```bash
	man echo > echo_options.txt
```

##18
Write the command, flag, and flag option to ping `127.0.0.1` two times. A flag option is an option passed immediately after a flag.

:beginner:**Answer**:

```bash

	ping -c 2 127.0.0.1
	
	# output 
	PING 127.0.0.1 (127.0.0.1): 56 data bytes
	64 bytes from 127.0.0.1: icmp_seq=0 ttl=64 time=0.084 ms
	64 bytes from 127.0.0.1: icmp_seq=1 ttl=64 time=0.072 ms

	--- 127.0.0.1 ping statistics ---
	2 packets transmitted, 2 packets received, 0.0% packet loss
	round-trip min/avg/max/stddev = 0.072/0.078/0.084/0.006 ms
```

##19
Write a single command to display the contents of all Markdown files (that have the extension `.md`) to the console.


:beginner:**Answer**:

```bash
	# view .md files only
	cat *.md
```


##20
Write the command to remove the file `yesterdays_todo_list.md` from the directory you are presently working in.

:beginner:**Answer**:

```bash
	rm yesterdays_todo_list.md
```

###`Project Assignment 2: Intermediate`

##1
Use only the command line to create 5 files (one at a time) and add full sentences to each, as illustrated below:

- Create the file myname.md and write your name in it.

:beginner:**Answer**:

```bash
	echo "My name is Leyth" > myname.md
```

- Create the file myfavoritefoods.md and write your three favorite foods.

:beginner:**Answer**:

```bash
	echo "Seafood, Hamburger, Thai Food" > myfavoritefoods.md
```

- Create the file `dreamproject.md` and write about a project that you would like to build after Modern Developer.

:beginner:**Answer**:

```bash
	echo "I would like to make a ride-share app which is built upon MEANSTACK" > dreamproject.md
```

- Create the file music.md and write the genre of music, song, or artist, that you feel most comfortable listening to.

:beginner:**Answer**:
```bash
	echo "Genre:Reggae, Song:Africa Unite! Artist:Marley" > music.md
```

- Create the file colors.md and write your favorite color, or colors.


:beginner:**Answer**:
```bash
	echo "Red, Green, and Yellow" > colors.md
```

##2
Find out which of the files that you wrote in the previous step had the largest file size. Write the command and the correct flags to list the files and their file size in human readable and long format. Then add the output to this file: `filesizes.txt.`



:beginner:**Answer**:
```bash
	ls -lh

	ls -lh > filesizes.txt
```
##3
Let’s create a backups folder and backup the files we’ve written so far. Create a new directory and name it `backups`. Use the tar command to archive the contents of your `commandline-practice` folder. Name your archived file `backup1.tar`, and save it inside your `backups` folder.



:beginner:**Answer**:
```bash
	tar -czf backup1.tar *.md backups
```

##4
Create a file `sites.txt` and add to it a list of your favorite websites, each on its own line. You’ll need to type the newline character `(\n)`, and the `echo` flag that enables interpretation of backslash escapes.


:beginner:**Answer**:
```bash
	echo -e "www.google.com\n www.yahoo.com\nwww.cnn.com" > sites.txt

```

##5
Use `curl` to get the contents of `study.moderndeveloper.com` and store the contents inside a file, study.html. When you request the file, it will retrieve the web page of the first web server that responds, which, in this case, is a server that indicates when the web page has been relocated. This routine occurrence is called a redirection. You will learn more about server redirects in an upcoming course. Use the `-L` flag to follow the redirection and receive the correct page.



:beginner:**Answer**:
```bash
	curl -L study.moderndeveloper.com > study.html

```

##6
Use the `mv` command and Command Escaping to rename your backup archive. Navigate to the backups directory and rename your `backup1`.tar archive to output of the date command. That is, whatever the output (the text) of the date command is, use that text as the new name for your `backup1.tar` file.



:beginner:**Answer**:
```bash
	mv backup1.tar "$(date)".tar
```

##7

Use the `wc` command and the correct flag to determine how many words you wrote inside your `dreamproject.md` file. If the file contains fewer than 20 words, append another two sentences to the file. Use those two sentences to describe your dream project.



:beginner:**Answer**:
```bash
	wc -w dreamproject.md
```

##8
Use the grep command to find all JavaScript files located inside your study.html file by searching for “\.js“. Save the result to a new file, javascripts.html.



:beginner:**Answer**:
```bash
	grep "\.js" study.html > javascripts.html
```
##9
Let’s find out the total number of words inside of the text files (`.txt`) that you created. Use the `cat` command to list all of the contents of the text files inside of your commandline-practice folder; then pipe (`|`) the output of the cat command to the word count program (`wc`).



:beginner:**Answer**:
```bash
	cat ./commandline-practice/*.txt | wc -w
```

##10
Your workspace has undergone many changes since your last backup. Create another backup file using tar and the directions in exercise 3; name your backup backup2.tar. Let’s clear out the workspace. find all Markdown files, html files, and text files, and remove them by passing the -delete flag to your find command. Be careful to not delete your backups folder.




:beginner:**Answer**:
```bash
	# create new backup file
	tar -czf backup2.tar *.md *.txt *.html backups
	# delete copies
	find *.md *.html *.txt -delete
```
