---
layout: ../../layouts/MarkdownPostLayout.astro
title: "Conventional Commits"
pubDate: 2024-11-01
description: "Specification is a lightweight convention on top of commit messages"
author: "Lachicagladiadora"
image:
  url: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  alt: "Git messages image"
tags: ["git", "dev", "learn"]
---

<h3 class='pt-6 pb-2 text-xl text-first-dark dark:text-second'>build</h3>
<p>Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)</p>
<code class='block my-3 px-4 py-2 rounded-md bg-obscure-dark text-blank-light dark:bg-blank-light dark:text-obscure-dark'> 'build: install @tailwind'</code>

<h3 class='pt-6 pb-2 text-xl text-first-dark dark:text-second'>ci</h3>
<p>Changes affecting configuration files and scripts related to CI (example scopes: Travis, Circle, BrowserStack, SauceLabs)</p>
<code class='block my-3 px-4 py-2 rounded-md bg-obscure-dark text-blank-light dark:bg-blank-light dark:text-obscure-dark'> 'ci: update bd config'</code>

<h3 class='pt-6 pb-2 text-xl text-first-dark dark:text-second'>docs</h3>
<p>When only documentation is modified.</p>
<code class='block my-3 px-4 py-2 rounded-md bg-obscure-dark text-blank-light dark:bg-blank-light dark:text-obscure-dark'>'docs: update readme'</code>

<h3 class='pt-6 pb-2 text-xl text-first-dark dark:text-second'>feat</h3>
<p>Adds a new functionality or feature</p>
<code class='block my-3 px-4 py-2 rounded-md bg-obscure-dark text-blank-light dark:bg-blank-light dark:text-obscure-dark'> 'feat: header with menu'</code>

<h3 class='pt-6 pb-2 text-xl text-first-dark dark:text-second'>fix</h3>
<p>A bug fix</p>
<code class='block my-3 px-4 py-2 rounded-md bg-obscure-dark text-blank-light dark:bg-blank-light dark:text-obscure-dark'>'fix: interactivity in menu'</code>

<h3 class='pt-6 pb-2 text-xl text-first-dark dark:text-second'>chore</h3>
<p>Routine tasks that are not feature- or bug-specific, such as adding content to the `.gitignore` file or installing a dependency.</p>
<code class='block my-3 px-4 py-2 rounded-md bg-obscure-dark text-blank-light dark:bg-blank-light dark:text-obscure-dark'>'chore: add theme to button'</code>

<h3 class='pt-6 pb-2 text-xl text-first-dark dark:text-second'>perf</h3>
<p>A code change that improves performance.</p>
<code class='block my-3 px-4 py-2 rounded-md bg-obscure-dark text-blank-light dark:bg-blank-light dark:text-obscure-dark'> 'perf: fix function save-data'</code>

<h3 class='pt-6 pb-2 text-xl text-first-dark dark:text-second'>refactor</h3>
<p>A code change that does not fix a bug or add a feature, but improves the code.</p>
<code class='block my-3 px-4 py-2 rounded-md bg-obscure-dark text-blank-light dark:bg-blank-light dark:text-obscure-dark'>'refactor: color in tailwind config'</code>

<h3 class='pt-6 pb-2 text-xl text-first-dark dark:text-second'>style</h3>
<p>Readability or code formatting changes that do not affect the functionality or meaning of the code (whitespace, formatting, missing semicolons, etc.)</p>
<code class='block my-3 px-4 py-2 rounded-md bg-obscure-dark text-blank-light dark:bg-blank-light dark:text-obscure-dark'>'style: remove unnecessary comments'</code>

<h3 class='pt-6 pb-2 text-xl text-first-dark dark:text-second'>test</h3>
<p>Add missing tests or correct existing tests (test)</p>
<code class='block my-3 px-4 py-2 rounded-md bg-obscure-dark text-blank-light dark:bg-blank-light dark:text-obscure-dark'>'test: unit test in save-data'</code>

<h3 class='pt-6 pb-2 text-xl text-first-dark dark:text-second'>wip</h3>
<p>Work in progress, if you need save progress</p>
<code class='block my-3 px-4 py-2 rounded-md bg-obscure-dark text-blank-light dark:bg-blank-light dark:text-obscure-dark'>'wip: search-component'</code>

<h3 class='pt-6 pb-2 text-xl text-first-dark dark:text-second'>revert</h3>
<p>If the commit reverts a previous commit. The hash of the commit being reverted should be indicated</p>
<code class='block my-3 px-4 py-2 rounded-md bg-obscure-dark text-blank-light dark:bg-blank-light dark:text-obscure-dark'>'revert: hashCommitReverted'</code>

<hr class='mt-20 mb-4'/>

**For more information**

- 🖇️[Article in English](https://www.conventionalcommits.org/en/v1.0.0/)
- 🖇️[Article in Spanish](https://dev.to/achamorro_dev/conventional-commits-que-es-y-por-que-deberias-empezar-a-utilizarlo-23an)
