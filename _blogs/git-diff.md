---
title: 'git diff'
date: '2025-02-24T16:29:48Z'
---

If you typed `git diff --help` in your terminal you get this

> git-diff - Show changes between commits, commit and working tree, etc

This is a short blog about how to use `git diff` to view changes between two commits.

I started using it a lot recently to view what my teamates changed and that gives me a good understanding of how a certain parts of the system works.

the command is:
```bash
git diff <commit_hash_1> <commit_hash_2> -- path/to/file_you_want_to_view
```

normally, `commit_hash_1` should be the old commit and `commit_hash_2` should be the newer one to be able to view a logical difference of the changes. but you can switch them if you want to view the past changes.

> [!NOTE]
> Additions will be green and prefixed by a `+`, deletions will be red and prefixed by a `-`

If you want to view the changes between a certain commit and the latest commit you can change `commit_hash_2` with `HEAD`

```bash
git diff <old_commit_hash> HEAD -- path/to/file_you_want_view
```

If you want to view all the changes your team mates did, for example you ran `git pull` and there were more then a couple of files changed, you can **change the path with an `*`** like so:

```bash
git diff <commit_hash> HEAD -- *
```

Also not to forget that you can run `git log`, to view the commits with it's respective hash, you can add `--oneline` to make your life easier. 
```bash
git log --oneline
```
this is the output you get when you add `--oneline`
![Preview of git log --oneline](/blog/git-log-oneline.png)

this gives you all the list of commits, you can also add `-n <number>` if you want to limit the number of commits displayed on your screen.