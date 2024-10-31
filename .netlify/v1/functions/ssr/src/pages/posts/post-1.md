---
layout: ../../layouts/MarkdownPostLayout.astro
title: "Learn about Git"
pubDate: 2022-10-23
description: "It’s not like git got everything right, but it got all the really basic issues right in a way that no other SCM had ever done before. -Linus Torvalds"
author: "Lachicagladiadora"
image:
  url: "https://images.pexels.com/photos/11035539/pexels-photo-11035539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  alt: "The Astro logo on a dark background with a pink glow."
tags: ["git", "dev", "learn", "basic concepts", "commands"]
---

<h2 class='pt-6 pb-2 text-2xl font-bold text-first dark:text-second'>Main characteristics</h2>

- Does not require internet
- Is fast
- GIT create copies from original project
- **DATA INTEGRITY**: Clones created from data; therefore the data is the equal, clean and not corrupted.

<h2 class='pt-6 pb-2 text-2xl font-bold text-first dark:text-second'>Basic concepts</h2>

1. **GIT(VCS- _Version Control System_)**: Software which save changes history
2. **REPOSITORY**: Project followed for GIT, project which have history in GIT
3. **COMMIT**: Change registered in GIT, the change have a message
4. **BRANCH**: New alternative trail for project
5. **CLONE**: Project copied in local PC
6. **FORK**: Different project from once project
7. **MERGE**:

<h2 class='pt-6 pb-2 text-2xl font-bold text-first dark:text-second'>Workflow</h2>
<!-- ![Descripción de la imagen](https://git-scm.com/book/en/v2/images/lifecycle.png) -->

<!-- ![Descripción de la imagen]('') -->
<img src='workflow.png'>
<img src='workflow.svg'>

in posts

<img src='/src/pages/posts/workflow.svg'>

in public

<img src='/public/workflow.png'>
<img src='workflow.png'>

in assets png

<img src='/src/assets/workflow.png'>

in assets svg

<img src='/src/assets/workflow.svg'>
<!-- <img src='//public/post-1/workflow.png'> -->
<!-- <Image src={workflow.svg} alt="workflow in git"/> -->

<!-- ![alt text](image.png) -->

<h2 class='pt-6 pb-2 text-2xl font-bold text-first dark:text-second'>Tools</h2>

<h3 class='pt-6 pb-2 text-2xl text-first dark:text-second'>Terminal</h3>
<ol class='list-inside list-disc'>
	<li>Command line</li>
	</ol>
<h3 class='pt-6 pb-2 text-xl text-first dark:text-second'>Graphic clients</h3>
  <ol class='list-inside list-disc'>
	<li>Gitkraken</li>
  <li>Sourcetree</li>
  <li>GithubDesktop</li>
	</ol>
<h3 class='pt-6 pb-2 text-xl text-first dark:text-second'>Cloud repositories</h3>
	 <ol class='list-inside list-disc'>
	<li>Github</li>
  <li>Bitbucket</li>
  <li>GitLab</li>
	</ol>
<h3 class='pt-6 pb-2 text-xl text-first dark:text-second'>In visual studio code (Extensions for VScode)</h3>
		 <ol class='list-inside list-disc'>
	<li>Git Graph</li>
  <li>Git Lents</li>
	</ol>

<h2 class='pt-6 pb-2 text-2xl font-bold text-first dark:text-second'>Commands</h2>
<div class='w-full flex items-center justify-center'>
<img src='https://img.icons8.com/color/300/git.png'>
</div>

1. `git init`
2. `git add`
   1. `git add -A`
   2. `git add .` -> add all changes at stage
3. `git commit` or `git commit -m '<message>'`
4. `git status`
5. `git diff` -> changes that are not in the stage
6. `git diff --staged` -> compare the changes with the last commit
7. `git log` -> committed history
   1. `git log --oneline` -> shows each commit with its "hash" in list format
   2. `git log --online --decorate --all` -> view all commits
   3. `git log --online --decorate --all --graph` -> view graphically all commits
8. `git log` -> committed history
   1. `git log --oneline` -> shows each commit with its "hash" in list format
   2. `git log --online --decorate --all` -> view all commits
   3. `git log --online --decorate --all --graph` -> view graphically all commits
9. `git pull origin dev` -> brings changes from "dev" branch
10. `git commit --amend` -> for change message from last commit
11. `git reset HEAD <file>` -> remove the `<file>` from staging area
12. `git checkout --<file>` -> undo the last local changes to the `<file>`
13. `git reset <commitHash>` -> the mentioned commit is removed
14. `git diff <commitHash-1> <commitHash-2>` -> comparison
15. `git branch` -> show the branches
    1. `git branch <feature>` -> create a new branch
    2. `git checkout <feature>` -> change of branch with pointer
    3. `git checkout -b <feature>` -> create a branch, move local changes and move the pointer to that branch
    4. `git branch -m <actualBranchName> <newBranchName>`
    5. `git branch -d <branchName>` -> delete branch
    6. `git branch -D <branchName>` -> force delete branch
16. `git tag <tagName | v0.2.0>` -> create tag from last commit
    1. `git tag <tagName | v0.2.0> <hashCommit>` -> create tag from mentioned commit
    2. `git tag -a <tagName | v0.2.0>` -> create a note in the mentioned tag
    3. `git tag -d <tagName | v0.2.0>` -> delete tag
    4. `git tag -l` -> list the tags
    5. `git tag -l <v0.*.0>` -> list the tags which contain `<v0.*.0>`
17. `git stash` -> save work in the stage
    1. `git stash list` -> show all files saved in the stage
    2. `git stash apply` -> open the last file from stage
    3. `git stash drop` -> delete stage contain
    4. `git stash pop` -> take out the last thing that was saved
18. `rm -rf .git` -> remove git tracing from a project
