#!bash
# to run this script -> yarn blog <title>

blog_title=$*

if [[ -z "$blog_title" ]]; then
    echo "✕ Please enter a title for the blog"
    exit 1
fi

clean_title="${blog_title//' '/'-'}"
timestamp=$(date --utc +%FT%TZ)

touch "./_blogs/$clean_title.md"

template="---
title: '$blog_title'
date: '$timestamp'
---"

echo "$template" > "./_blogs/$clean_title.md"
