---
layout: ../../layouts/MarkdownPostLayout.astro
title: "Learn about Git"
pubDate: 2024-10-23
description: "It’s not like git got everything right, but it got all the really basic issues right in a way that no other SCM had ever done before. -Linus Torvalds"
author: "Lachicagladiadora"
image:
  url: "https://images.pexels.com/photos/11035539/pexels-photo-11035539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  alt: "Git logo image"
tags: ["git", "dev", "learn", "basic concepts", "commands"]
---

<h2 class='pt-6 pb-2 text-2xl font-bold text-obscure-dark dark:text-blank-light'>Basic concepts</h2>

1. **GIT(VCS- _Version Control System_)**:
   Software which save changes history
2. **REPOSITORY**:
   Project followed for GIT, project which have history in GIT
3. **COMMIT**:
   Change registered in GIT, the change have a message
4. **BRANCH**:
   New alternative trail for project
5. **CLONE**:
   Project copied in local PC
6. **FORK**:
   Different project from once project
7. **MERGE**:
   Join changes

<h2 class='pt-6 pb-2 text-2xl font-bold text-obscure-dark dark:text-blank-light'>Main characteristics</h2>
<ul class='list-disc list-inside'>
<li>Does not require internet</li>
<li>Is fast</li>
<li>GIT create copies from original project</li>
<li>Data Integrity: Clones created from data; therefore the data is the equal, clean and not corrupted.</li>
</ul>

<h2 class='pt-6 pb-2 text-2xl font-bold text-obscure-dark dark:text-blank-light'>Workflow</h2>

<img src='/workflow.png' alt='git workflow'>

<h2 class='pt-6 pb-2 text-2xl font-bold text-obscure-dark dark:text-blank-light'>Tools</h2>
<h3 class='pt-6 pb-2 text-2xl text-obscure-dark dark:text-blank-light'>Terminal</h3>
<ol class='list-inside list-disc'>
	<li>Command line</li>
	</ol>
<h3 class='pt-6 pb-2 text-2xl text-obscure-dark dark:text-blank-light'>Graphic clients</h3>
  <ol class='list-inside list-disc'>
	<li>Gitkraken</li>
  <li>Sourcetree</li>
  <li>GithubDesktop</li>
	</ol>
<h3 class='pt-6 pb-2 text-2xl text-obscure-dark dark:text-blank-light'>Cloud repositories</h3>
	 <ol class='list-inside list-disc'>
	<li>Github</li>
  <li>Bitbucket</li>
  <li>GitLab</li>
	</ol>
<h3 class='pt-6 pb-2 text-2xl text-obscure-dark dark:text-blank-light'>In visual studio code (Extensions for VScode)</h3>
		 <ol class='list-inside list-disc'>
	<li>Git Graph</li>
  <li>Git Lents</li>
	</ol>

<h2 class='pt-6 pb-2 text-2xl font-bold text-obscure-dark dark:text-blank-light'>Commands</h2>
<div class='w-full flex items-center justify-center'>
<img src='/workflow-command.png' alt='git command workflow'>
</div>

<h3 class='pt-6 pb-2 text-2xl text-obscure-dark dark:text-blank-light'>Essentials</h3>
<p>Start tracking in git</p>
<code class='block my-3 px-4 py-2 rounded-md bg-obscure-dark text-blank-light dark:bg-blank-light dark:text-obscure-dark'>git init</code>

<p>Add changes to stage</p>
<code class='block my-3 px-4 py-2 rounded-md bg-obscure-dark text-blank-light dark:bg-blank-light dark:text-obscure-dark'>git add</code>

<p>Add to git repository</p>
<code class='block my-3 px-4 py-2 rounded-md bg-obscure-dark text-blank-light dark:bg-blank-light dark:text-obscure-dark'>git commit</code>

<h3 class='pt-6 pb-2 text-2xl text-obscure-dark dark:text-blank-light'>Complementary</h3>
<p>Add all changes to stage</p>
<code class='block my-3 px-4 py-2 rounded-md bg-obscure-dark text-blank-light dark:bg-blank-light dark:text-obscure-dark'>git add .</code>

<p>Add all changes to stage and tracking from new and remove files</p>
<code class='block my-3 px-4 py-2 rounded-md bg-obscure-dark text-blank-light dark:bg-blank-light dark:text-obscure-dark'>git add -A</code>

<p>Add to git repository and write message from commit</p>
<code class='block my-3 px-4 py-2 rounded-md bg-obscure-dark text-blank-light dark:bg-blank-light dark:text-obscure-dark'>git commit -m "'message'"</code>

<p>Editing the commit message from last commit</p>
<code class='block my-3 px-4 py-2 rounded-md bg-obscure-dark text-blank-light dark:bg-blank-light dark:text-obscure-dark'>git commit --amend</code>

<p>To see the status of changes that have not been committed</p>
<code class='block my-3 px-4 py-2 rounded-md bg-obscure-dark text-blank-light dark:bg-blank-light dark:text-obscure-dark'>git status</code>

<p>Compare changes outside the stage</p>
<code class='block my-3 px-4 py-2 rounded-md bg-obscure-dark text-blank-light dark:bg-blank-light dark:text-obscure-dark'>git diff</code>

<p>Compare changes outside the stage with stage</p>
<code class='block my-3 px-4 py-2 rounded-md bg-obscure-dark text-blank-light dark:bg-blank-light dark:text-obscure-dark'>git diff --staged</code>

<p>Show all branches</p>
<code class='block my-3 px-4 py-2 rounded-md bg-obscure-dark text-blank-light dark:bg-blank-light dark:text-obscure-dark'>git branch</code>

<p>Create a new branch</p>
<code class='block my-3 px-4 py-2 rounded-md bg-obscure-dark text-blank-light dark:bg-blank-light dark:text-obscure-dark'>git branch 'branchName'</code>

<p>Change branch with pointer</p>
<code class='block my-3 px-4 py-2 rounded-md bg-obscure-dark text-blank-light dark:bg-blank-light dark:text-obscure-dark'>git checkout 'branchName'</code>

<p>Create a new branch and move pointer to this branch</p>
<code class='block my-3 px-4 py-2 rounded-md bg-obscure-dark text-blank-light dark:bg-blank-light dark:text-obscure-dark'>git checkout -b 'branchName'</code>

<p>Rename a branch</p>
<code class='block my-3 px-4 py-2 rounded-md bg-obscure-dark text-blank-light dark:bg-blank-light dark:text-obscure-dark'>git branch -m 'currentBranchName' 'newBranchName'</code>

<p>Delete branch</p>
<code class='block my-3 px-4 py-2 rounded-md bg-obscure-dark text-blank-light dark:bg-blank-light dark:text-obscure-dark'>git branch -d 'branchName'</code>

<p>Force delete branch</p>
<code class='block my-3 px-4 py-2 rounded-md bg-obscure-dark text-blank-light dark:bg-blank-light dark:text-obscure-dark'>git branch -D 'branchName'</code>

<p>Brings latest changes remotely (can be from collaborators)</p>
<code class='block my-3 px-4 py-2 rounded-md bg-obscure-dark text-blank-light dark:bg-blank-light dark:text-obscure-dark'>git pull</code>

<p>Brings changes from "dev" branch</p>
<code class='block my-3 px-4 py-2 rounded-md bg-obscure-dark text-blank-light dark:bg-blank-light dark:text-obscure-dark'>git pull origin dev</code>

<p>Show history commit</p>
<code class='block my-3 px-4 py-2 rounded-md bg-obscure-dark text-blank-light dark:bg-blank-light dark:text-obscure-dark'>git log</code>

<p>Show history commit in list format with their 'hash'(hash: commit id)</p>
<code class='block my-3 px-4 py-2 rounded-md bg-obscure-dark text-blank-light dark:bg-blank-light dark:text-obscure-dark'>git log --oneline</code>

<p>Show all history commit</p>
<code class='block my-3 px-4 py-2 rounded-md bg-obscure-dark text-blank-light dark:bg-blank-light dark:text-obscure-dark'>git log --online --decorate --all</code>

<p>Show history commit in a graph</p>
<code class='block my-3 px-4 py-2 rounded-md bg-obscure-dark text-blank-light dark:bg-blank-light dark:text-obscure-dark'>git log --online --decorate --all --graph</code>

<p>Save changes in stage, but not add to stage</p>
<code class='block my-3 px-4 py-2 rounded-md bg-obscure-dark text-blank-light dark:bg-blank-light dark:text-obscure-dark'>git stash</code>

<p>Show all files saved in the stage</p>
<code class='block my-3 px-4 py-2 rounded-md bg-obscure-dark text-blank-light dark:bg-blank-light dark:text-obscure-dark'>git stash list</code>

<p>Open the last file from stage</p>
<code class='block my-3 px-4 py-2 rounded-md bg-obscure-dark text-blank-light dark:bg-blank-light dark:text-obscure-dark'> git stash apply</code>

<p>Delete stage contain</p>
<code class='block my-3 px-4 py-2 rounded-md bg-obscure-dark text-blank-light dark:bg-blank-light dark:text-obscure-dark'> git stash drop</code>

<p>Take out the last thing that was saved</p>
<code class='block my-3 px-4 py-2 rounded-md bg-obscure-dark text-blank-light dark:bg-blank-light dark:text-obscure-dark'> git stash pop</code>

<hr class='mt-20 mb-4'/>

**For more information:**
🖇️[Pro-Git book](https://git-scm.com/book/en/v2)
