/* empty css                         */
import { a as createComponent, r as renderTemplate, e as renderComponent, u as unescapeHTML } from './astro/server_DcQTzJrz.mjs';
import 'kleur/colors';
import { $ as $$MarkdownPostLayout } from './MarkdownPostLayout_BX057fLg.mjs';

const html = "<h2 class=\"pt-6 pb-2 text-2xl font-bold text-first dark:text-second\">Main characteristics</h2>\n<ul>\n<li>Does not require internet</li>\n<li>Is fast</li>\n<li>GIT create copies from original project</li>\n<li><strong>DATA INTEGRITY</strong>: Clones created from data; therefore the data is the equal, clean and not corrupted.</li>\n</ul>\n<h2 class=\"pt-6 pb-2 text-2xl font-bold text-first dark:text-second\">Basic concepts</h2>\n<ol>\n<li><strong>GIT(VCS- <em>Version Control System</em>)</strong>: Software which save changes history</li>\n<li><strong>REPOSITORY</strong>: Project followed for GIT, project which have history in GIT</li>\n<li><strong>COMMIT</strong>: Change registered in GIT, the change have a message</li>\n<li><strong>BRANCH</strong>: New alternative trail for project</li>\n<li><strong>CLONE</strong>: Project copied in local PC</li>\n<li><strong>FORK</strong>: Different project from once project</li>\n<li><strong>MERGE</strong>:</li>\n</ol>\n<h2 class=\"pt-6 pb-2 text-2xl font-bold text-first dark:text-second\">Workflow</h2>\n<!-- ![Descripción de la imagen](https://git-scm.com/book/en/v2/images/lifecycle.png) -->\n<img src=\"/src/images/post-1/workflow.png\">\n<!-- ![alt text](image.png) -->\n<h2 class=\"pt-6 pb-2 text-2xl font-bold text-first dark:text-second\">Tools</h2>\n<h3 class=\"pt-6 pb-2 text-2xl text-first dark:text-second\">Terminal</h3>\n<ol class=\"list-inside list-disc\">\n\t<li>Command line</li>\n\t</ol>\n<h3 class=\"pt-6 pb-2 text-xl text-first dark:text-second\">Graphic clients</h3>\n  <ol class=\"list-inside list-disc\">\n\t<li>Gitkraken</li>\n  <li>Sourcetree</li>\n  <li>GithubDesktop</li>\n\t</ol>\n<h3 class=\"pt-6 pb-2 text-xl text-first dark:text-second\">Cloud repositories</h3>\n\t <ol class=\"list-inside list-disc\">\n\t<li>Github</li>\n  <li>Bitbucket</li>\n  <li>GitLab</li>\n\t</ol>\n<h3 class=\"pt-6 pb-2 text-xl text-first dark:text-second\">In visual studio code (Extensions for VScode)</h3>\n\t\t <ol class=\"list-inside list-disc\">\n\t<li>Git Graph</li>\n  <li>Git Lents</li>\n\t</ol>\n<h2 class=\"pt-6 pb-2 text-2xl font-bold text-first dark:text-second\">Commands</h2>\n<div class=\"w-full flex items-center justify-center\">\n<img src=\"https://img.icons8.com/color/300/git.png\">\n</div>\n<ol>\n<li><code>git init</code></li>\n<li><code>git add</code>\n<ol>\n<li><code>git add -A</code></li>\n<li><code>git add .</code> -> add all changes at stage</li>\n</ol>\n</li>\n<li><code>git commit</code> or <code>git commit -m '&#x3C;message>'</code></li>\n<li><code>git status</code></li>\n<li><code>git diff</code> -> changes that are not in the stage</li>\n<li><code>git diff --staged</code> -> compare the changes with the last commit</li>\n<li><code>git log</code> -> committed history\n<ol>\n<li><code>git log --oneline</code> -> shows each commit with its “hash” in list format</li>\n<li><code>git log --online --decorate --all</code> -> view all commits</li>\n<li><code>git log --online --decorate --all --graph</code> -> view graphically all commits</li>\n</ol>\n</li>\n<li><code>git log</code> -> committed history\n<ol>\n<li><code>git log --oneline</code> -> shows each commit with its “hash” in list format</li>\n<li><code>git log --online --decorate --all</code> -> view all commits</li>\n<li><code>git log --online --decorate --all --graph</code> -> view graphically all commits</li>\n</ol>\n</li>\n<li><code>git pull origin dev</code> -> brings changes from “dev” branch</li>\n<li><code>git commit --amend</code> -> for change message from last commit</li>\n<li><code>git reset HEAD &#x3C;file></code> -> remove the <code>&#x3C;file></code> from staging area</li>\n<li><code>git checkout --&#x3C;file></code> -> undo the last local changes to the <code>&#x3C;file></code></li>\n<li><code>git reset &#x3C;commitHash></code> -> the mentioned commit is removed</li>\n<li><code>git diff &#x3C;commitHash-1> &#x3C;commitHash-2></code> -> comparison</li>\n<li><code>git branch</code> -> show the branches\n<ol>\n<li><code>git branch &#x3C;feature></code> -> create a new branch</li>\n<li><code>git checkout &#x3C;feature></code> -> change of branch with pointer</li>\n<li><code>git checkout -b &#x3C;feature></code> -> create a branch, move local changes and move the pointer to that branch</li>\n<li><code>git branch -m &#x3C;actualBranchName> &#x3C;newBranchName></code></li>\n<li><code>git branch -d &#x3C;branchName></code> -> delete branch</li>\n<li><code>git branch -D &#x3C;branchName></code> -> force delete branch</li>\n</ol>\n</li>\n<li><code>git tag &#x3C;tagName | v0.2.0></code> -> create tag from last commit\n<ol>\n<li><code>git tag &#x3C;tagName | v0.2.0> &#x3C;hashCommit></code> -> create tag from mentioned commit</li>\n<li><code>git tag -a &#x3C;tagName | v0.2.0></code> -> create a note in the mentioned tag</li>\n<li><code>git tag -d &#x3C;tagName | v0.2.0></code> -> delete tag</li>\n<li><code>git tag -l</code> -> list the tags</li>\n<li><code>git tag -l &#x3C;v0.*.0></code> -> list the tags which contain <code>&#x3C;v0.*.0></code></li>\n</ol>\n</li>\n<li><code>git stash</code> -> save work in the stage\n<ol>\n<li><code>git stash list</code> -> show all files saved in the stage</li>\n<li><code>git stash apply</code> -> open the last file from stage</li>\n<li><code>git stash drop</code> -> delete stage contain</li>\n<li><code>git stash pop</code> -> take out the last thing that was saved</li>\n</ol>\n</li>\n<li><code>rm -rf .git</code> -> remove git tracing from a project</li>\n</ol>";

				const frontmatter = {"layout":"../../layouts/MarkdownPostLayout.astro","title":"Learn about Git","pubDate":"2022-10-23T00:00:00.000Z","description":"It’s not like git got everything right, but it got all the really basic issues right in a way that no other SCM had ever done before. -Linus Torvalds","author":"Lachicagladiadora","image":{"url":"https://images.pexels.com/photos/11035539/pexels-photo-11035539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","alt":"The Astro logo on a dark background with a pink glow."},"tags":["git","dev","learn","basic concepts","commands"]};
				const file = "/home/el_descendiente_del_mal/dev/me/blog/src/pages/posts/post-1.md";
				const url = "/posts/post-1";
				function rawContent() {
					return "\n<h2 class='pt-6 pb-2 text-2xl font-bold text-first dark:text-second'>Main characteristics</h2>\n\n- Does not require internet\n- Is fast\n- GIT create copies from original project\n- **DATA INTEGRITY**: Clones created from data; therefore the data is the equal, clean and not corrupted.\n\n<h2 class='pt-6 pb-2 text-2xl font-bold text-first dark:text-second'>Basic concepts</h2>\n\n1. **GIT(VCS- _Version Control System_)**: Software which save changes history\n2. **REPOSITORY**: Project followed for GIT, project which have history in GIT\n3. **COMMIT**: Change registered in GIT, the change have a message\n4. **BRANCH**: New alternative trail for project\n5. **CLONE**: Project copied in local PC\n6. **FORK**: Different project from once project\n7. **MERGE**:\n\n<h2 class='pt-6 pb-2 text-2xl font-bold text-first dark:text-second'>Workflow</h2>\n<!-- ![Descripción de la imagen](https://git-scm.com/book/en/v2/images/lifecycle.png) -->\n<img src='/src/images/post-1/workflow.png'>\n\n<!-- ![alt text](image.png) -->\n\n<h2 class='pt-6 pb-2 text-2xl font-bold text-first dark:text-second'>Tools</h2>\n\n<h3 class='pt-6 pb-2 text-2xl text-first dark:text-second'>Terminal</h3>\n<ol class='list-inside list-disc'>\n\t<li>Command line</li>\n\t</ol>\n<h3 class='pt-6 pb-2 text-xl text-first dark:text-second'>Graphic clients</h3>\n  <ol class='list-inside list-disc'>\n\t<li>Gitkraken</li>\n  <li>Sourcetree</li>\n  <li>GithubDesktop</li>\n\t</ol>\n<h3 class='pt-6 pb-2 text-xl text-first dark:text-second'>Cloud repositories</h3>\n\t <ol class='list-inside list-disc'>\n\t<li>Github</li>\n  <li>Bitbucket</li>\n  <li>GitLab</li>\n\t</ol>\n<h3 class='pt-6 pb-2 text-xl text-first dark:text-second'>In visual studio code (Extensions for VScode)</h3>\n\t\t <ol class='list-inside list-disc'>\n\t<li>Git Graph</li>\n  <li>Git Lents</li>\n\t</ol>\n\n<h2 class='pt-6 pb-2 text-2xl font-bold text-first dark:text-second'>Commands</h2>\n<div class='w-full flex items-center justify-center'>\n<img src='https://img.icons8.com/color/300/git.png'>\n</div>\n\n1. `git init`\n2. `git add`\n   1. `git add -A`\n   2. `git add .` -> add all changes at stage\n3. `git commit` or `git commit -m '<message>'`\n4. `git status`\n5. `git diff` -> changes that are not in the stage\n6. `git diff --staged` -> compare the changes with the last commit\n7. `git log` -> committed history\n   1. `git log --oneline` -> shows each commit with its \"hash\" in list format\n   2. `git log --online --decorate --all` -> view all commits\n   3. `git log --online --decorate --all --graph` -> view graphically all commits\n8. `git log` -> committed history\n   1. `git log --oneline` -> shows each commit with its \"hash\" in list format\n   2. `git log --online --decorate --all` -> view all commits\n   3. `git log --online --decorate --all --graph` -> view graphically all commits\n9. `git pull origin dev` -> brings changes from \"dev\" branch\n10. `git commit --amend` -> for change message from last commit\n11. `git reset HEAD <file>` -> remove the `<file>` from staging area\n12. `git checkout --<file>` -> undo the last local changes to the `<file>`\n13. `git reset <commitHash>` -> the mentioned commit is removed\n14. `git diff <commitHash-1> <commitHash-2>` -> comparison\n15. `git branch` -> show the branches\n    1. `git branch <feature>` -> create a new branch\n    2. `git checkout <feature>` -> change of branch with pointer\n    3. `git checkout -b <feature>` -> create a branch, move local changes and move the pointer to that branch\n    4. `git branch -m <actualBranchName> <newBranchName>`\n    5. `git branch -d <branchName>` -> delete branch\n    6. `git branch -D <branchName>` -> force delete branch\n16. `git tag <tagName | v0.2.0>` -> create tag from last commit\n    1. `git tag <tagName | v0.2.0> <hashCommit>` -> create tag from mentioned commit\n    2. `git tag -a <tagName | v0.2.0>` -> create a note in the mentioned tag\n    3. `git tag -d <tagName | v0.2.0>` -> delete tag\n    4. `git tag -l` -> list the tags\n    5. `git tag -l <v0.*.0>` -> list the tags which contain `<v0.*.0>`\n17. `git stash` -> save work in the stage\n    1. `git stash list` -> show all files saved in the stage\n    2. `git stash apply` -> open the last file from stage\n    3. `git stash drop` -> delete stage contain\n    4. `git stash pop` -> take out the last thing that was saved\n18. `rm -rf .git` -> remove git tracing from a project\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$MarkdownPostLayout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	compiledContent,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	rawContent,
	url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
