###1. Why do programmers need flexible editors?

Programmers need flexible editors in order to be more productive in thier work. Editors allow programmers to decipher tedious code that is sometimes hundreds and thousands of lines long. With a great editors, programmers can compile thier code or just check with the debugger to catch hidden mistakes.

###2. On some operating systems, the 'subl' program may not work automatically. Describe in detail (use screenshots) how to get the 'subl' program working in the operating system you use.

Sublime Text has a unique command line tool called `subl`, short for sublime. This is a shortcut command which can be used to open files by acting as an editor for unix and such other systems. For the first time users, this feature is not automatically setup. In order to get it to work, the first step is to make a `symlink` to to `subl`. Since, I was using a Mac, Sublime Text was first placed into my Application folder. Next, `/bin` directory was placed on the `path` and I pasted the following command into my terminal.
```bash
	ln -s "/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl" ~/bin/subl
```

Moreover, if one wants to setup Sulbime Text as an editor, the editor environment variable must be set in the following manner.

```bash
	export EDITOR='subl -w'
```

###3. Describe what Sublime Text packages are, and give an example of one Sublime Text package and describe how it works.

Sublime Text packages are useful pre-existing add-ons that were created by other Sublime Text users. These packages add new functionality to Sublime or either enhance existing features. A good example of a Sublime Text package or pluggin is Emmet, an important toolkit for web developers. Emmet saves developers a lot of time by allowing them to type few words for a particular code snippet. For example, we know the boilerplate code for an `html` document is always the same, so, in Emmmet all you have to do is type `html:5`. sdasdfs

![Imgur](http://i.imgur.com/CeZy1an.gif)


###4. Give detailed instructions (include screenshots) about how to get Package Control working in a Sublime Text installation.

The best way to install Package Control for the first time is to go directly to the main Package control website.

1. Click the `Preferences` `>` Browse `Packages`… menu
2. Browse up a folder and then into the Installed Packages/ folder
2. Download Package `Control.sublime-package` and copy it into the Installed `Packages/` directory
3. Restart `Sublime Text`