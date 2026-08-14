---
title: 'Who Needs a Database GUI? Docker Has a Terminal'
date: '2026-08-14T16:57:10Z'
---

We’ve all clicked our way through a database GUI (e.g: pgAdmin) a thousand times. But what if you could just talk to your database directly from the terminal, and Docker makes it surprisingly easy?

I've been working for almost 4 years now on software systems, and to be honest I don't remember when was the last time I touched a database GUI. I've been using docker terminal since I got the hang of it, and it's way faster for me to query my database and basically do everything.

In this blog post, I'll be using **PostgreSQL** as the database, but you can use any database you like, even redis, as long as it has an image on Docker Hub and a CLI tool.

## Docker terminal

We start by running our database docker image, as I mentioned before, it's Postgres.

```bash
docker run --name mydb_container \
-e POSTGRES_DB=mydb \
-e POSTGRES_USER=root \
-e POSTGRES_PASSWORD=123 \
-p 5432:5432 \
-d postgres:18
```

This should start a Postgres v18 container, to access it you just have to run
```bash
docker exec -it mydb_container bash
```

>[!NOTE]
>The `-it` flag make the session interactive, so you can actually interact with the shell.

## Running queries

We are in. the beauty of this, is that you are not restricted to this database only, you can talk to a remote database, if you have the Postgres URL you can access it, because the container already ships with **`psql`** the Postgres command line interface. Most of the docker images of the databases already ship with their respective CLI tools, like `mysql`, `mongosh`, even `redis-cli`.

Now that we're in, you can run
```bash
psql -U root mydb
```
This if you want to access this local database you just ran. you can also do 
```bash
psql postgres://root:123@localhost:5432/mydb
``` 
the URL here can be an RDS database URL, it doesn't matter.

once you run that, you are connected to the database and you can run SQL queries. to view the list of tables in the database you can do
```bash
\dt
```

The result will look like this:
```bash
              List of relations
 Schema |        Name        | Type  | Owner 
--------+--------------------+-------+-------
 public | blogs              | table | root
 public | users              | table | root
```

You can also view table details with
```bash
\d blogs
```
it will display all the details about the table, like column names, types, relationships, indexes, default value, ect. like this:
```bash
                                   Table "public.blogs"
    Column     |              Type              | Collation | Nullable |      Default      
---------------+--------------------------------+-----------+----------+-------------------
 id            | text                           |           | not null | 
 type          | "BlogType"                     |           | not null | 
 images        | jsonb[]                        |           |          | ARRAY[]::jsonb[]
 thumbnail     | text                           |           |          | 
 title         | text                           |           |          | 
 subtitle      | text                           |           |          | 
 status        | "BlogStatus"                   |           | not null | 
 content       | text                           |           |          | 
 showcase_url  | text                           |           |          | 
 tags          | text[]                         |           |          | ARRAY[]::text[]
 languages     | text[]                         |           |          | ARRAY[]::text[]
 created_at    | timestamp(3) without time zone |           | not null | CURRENT_TIMESTAMP
 updated_at    | timestamp(3) without time zone |           |          | 
 content_lang  | jsonb                          |           |          | 
 subtitle_lang | jsonb                          |           |          | 
 tags_lang     | jsonb                          |           |          | 
 title_lang    | jsonb                          |           |          | 
 slug          | text                           |           |          | 
Indexes:
    "blogs_pkey" PRIMARY KEY, btree (id)
    "blogs_slug_key" UNIQUE, btree (slug)
```

If a table has 100 columns, the screen might become unreadable you can fix that by running:
```bash
\x on
```

This should enable "Expanded display", so results will look like this
```bash
\dt

List of relations
-[ RECORD 1 ]--------------
Schema | public
Name   | blogs
Type   | table
Owner  | root
-[ RECORD 2 ]--------------
Schema | public
Name   | users
Type   | table
Owner  | root
```

At this point your mission is to learn more about the database CLI for example psql, it's really easy, you won't need more than what I've mentioned above, to view tables and format results.

I almost forgot one thing, is that you can do a single command to run a query like this
```bash
docker exec -it mydb_container psql postgres://root:123@localhost:5432/mydb -c "SELECT * FROM users;"
```

## Finally

And that's pretty much it. Once you get comfortable with the database CLI, you can do most of the things you'd normally use a GUI for, directly from your terminal. It's simple, fast, and once you get used to it, you might not miss the GUI at all.