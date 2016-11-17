####1. Describe the method Git uses to efficiently store files in a repository. Explain why the method Git uses is more efficient than alternative methods.


Git looks at files as a set of snapshots of a miniature filesystems rather than seeing it as set of files.

--- 

![img](https://git-scm.com/book/en/v2/book/01-introduction/images/deltas.png)
---

Hence, once a commit is made, Git takes a snapshot of what the files look like and as a result stores the reference to that particular snapshot. After this, Git stored snapshots can be divided into three categories: committed, modified, and staged.

---

![img](https://git-scm.com/book/en/v2/book/01-introduction/images/areas.png)

---

####2. Explain what a GitHub repository fork is and its purpose and use.
