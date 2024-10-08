#!/bin/bash
# to run this script run `yarn new:blog "<title>"`

blog_title=$*
echo "$blog_title";

if [ -z "$blog_title" ]; then
    echo """
        Error:
    ===========================================
        ✕ Please enter a title for the blog
    ===========================================
    """
    exit 1
fi

trim() {
    local var="$*"
    # remove leading whitespace characters
    var="${var#"${var%%[![:space:]]*}"}"
    # remove trailing whitespace characters
    var="${var%"${var##*[![:space:]]}"}"
    printf '%s' "$var"
}

slug=$(echo "$blog_title" | tr '[:upper:]' '[:lower:]') # to lowercase
slug=$(echo "$slug" | sed 's/ /-/g')
timestamp=$(date --utc +%FT%TZ)

touch "./_blogs/$slug.md"

template="---
title: '$blog_title'
date: '$timestamp'
---"

echo "$template" > "./_blogs/$slug.md"

# open it in VScode
code "./_blogs/$slug.md"