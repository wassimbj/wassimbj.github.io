---
title: 'How to deploy your backend to the cloud with dokku'
date: '2024-08-25T14:59:50Z'
---

Hi folks,

It’s been a long time since I wrote something. In this blog, I’ll be sharing **how to deploy your app backend to the cloud using Dokku**. The app will be a simple pastebin-like API built with NestJS and PostgreSQL.

## What is Dokku?
Dokku is like a tiny and free version of Heroku. You install it on your server, push your code, and Dokku handles the rest.

Your code is essentially pushed to a Git repository on your server that Dokku creates. When Dokku receives your push request, it creates a new container for the updated version. Once it succeeds, it shuts down the previous one, providing zero-downtime deployments.

Dokku has two deployment options: **buildpacks** and **dockerfiles**. In this blog, I’ll be using the first option, which is also the default in Dokku.

## What is a Buildpack?
A buildpack is a set of scripts that handle setting up, building, and running your application automatically. When you push your code, Dokku detects the language and applies the appropriate buildpack.

You can specify how the buildpack should run your application using a Procfile if you need a custom command. For example, if your app is built with Node.js, the buildpack will automatically detect this and try to run the app with `npm run start`.

You can override this behavior by creating a _Procfile_ at the root of your project.
Just like in our case, in nestjs to run the production build, npm start won't work, we need to run npm start:prod so my Procfile will contain this:
```bash
web: npm run start:prod
```

## Getting Started
Everything you need is in the Dokku documentation, but I’ll provide brief descriptions for each step and address some common pitfalls.

**1) Install Dokku**

SSH into your server and download the Dokku installation script:
```bash
wget -NP . https://dokku.com/bootstrap.sh
```

**2) Run the installer with:**
```bash
sudo DOKKU_TAG=v0.34.8 bash bootstrap.sh
```
The version might differ if you’re reading this in the future.

**3) Add your SSH key**

```bash
PUBLIC_KEY="your-public-key-contents-here"

echo "$PUBLIC_KEY" | dokku ssh-keys:add admin

# If you already copied your public key to your server before ssh you can just do
cat ~/.ssh/authorized_keys | dokku ssh-keys:add admin
```
When you push your code to the server, Dokku uses this SSH key for authentication.

Ok, so now we’ve finished setting up Dokku on our server.

## Domains
First, Dokku is not a DNS server; it just configures Nginx. Mapping your IP address to your custom domain should be handled by you. You can use Cloudflare, it’s secure, easy, and free.

To set a custom domain for your app, you have two options:

1. Set a global domain like _mydomain.com_. After creating a Dokku app, it will be accessible at _myapp.mydomain.com_.
```bash
dokku domains:set-global mydomain.com
```
The domain should be the root domain since your Dokku app’s name will be used as a subdomain (e.g., _mydokkuapp.mydomain.com_). This is the domain you need to point your IP address to.

2. If you don’t like having a global domain with subdomains for each app, you can set the domain separately for each app:
```bash
dokku domains:set myapp myapp.com
```
You’ll then need to point your IP address to _myapp.com_ to access it.

For this tutorial, I’ll set a global domain and make my apps accessible via subdomains.

## Creating Your App
Simply run:
```bash
dokku apps:create myapi
```
As mentioned, once your DNS records are configured, your app should be accessible at **myapi.mydomain.com**.

> [!TIP]
> You can see the port mappings for your app with `dokku ports:report myapp`.

> [!IMPORTANT]
> A common pitfall that might waste hours is the port mapping. By default, Dokku maps the HTTP port 80 to port 5000 inside your container. If your app runs on a different port like 3000 or 9999, you need to manually set the port with `dokku ports:set myapp http:80:MY_APP_PORT`.

## Database and Plugins
Now we need a database for storing pastebins. Dokku supports plugins for various services like PostgreSQL, MySQL, Mongo, ect... You can find all available plugins [here](https://dokku.com/docs/community/plugins/).

For this app, I’ll use PostgreSQL, so let’s install the plugin and link it to our app:
```bash
sudo dokku plugin:install https://github.com/dokku/dokku-postgres.git
```
This installs the PostgreSQL plugin. You can see available commands with `dokku postgres`.

Create a PostgreSQL service:
```bash
dokku postgres:create myapidb
```

Link the database to your app:
```bash
dokku postgres:link myapidb myapi
```
Dokku will set and return the `DATABASE_URL` environment variable.

> [!TIP]
> You can view all your Dokku app’s environment variables with `dokku config:show myappname`.

So far, we have:
- Created our app
- Installed PostgreSQL and linked it to the app

## Deploying the App
Deployment is as simple as pushing to a Git repository. First, add the remote:
```bash
git remote add prod dokku@MY_SERVER_IP:MY_DOKKU_APP_NAME
```
The remote username **must** be `dokku`, or the deployment will fail.

> [!NOTE]
> Dokku’s docs suggest that some tools or Git clients might require the upstream to be prefixed with `ssh://`, like this: `ssh://dokku@MY_SERVER_IP:MY_DOKKU_APP_NAME`.

If your SSH keys have a passphrase, pushing directly to the server will fail with a **permission denied** error. You need to register your private key with `ssh-agent`.

> [!NOTE]
> `ssh-agent` is a process that handles authentication for you. If your SSH keys are protected by a passphrase, you register them once with the agent, and it handles subsequent authentications.

```bash
# Start the SSH agent if it's not running:
eval "$(ssh-agent -s)"
# Register your private key:
ssh-add -k path/to/private.key
```

Now deploy your app:
```bash
git push prod master
```

When the deployment finishes, Dokku will display the domain where your app is accessible. Point your server IP to that domain, and everything should work as expected.

## Adding SSL
Adding SSL with Dokku is straightforward, and it even handles automatic renewal. Install the _Let’s Encrypt_ plugin:
```bash
sudo dokku plugin:install https://github.com/dokku/dokku-letsencrypt.git
```

Set a global email address:
```bash
dokku letsencrypt:set --global email your-email@your.domain.com
```

Enable the plugin:
```bash
dokku letsencrypt:enable myapi
```

Enable auto-renewal:
```bash
dokku letsencrypt:cron-job --add
```

Enabling Let’s Encrypt will automatically map the HTTPS port (443) to your app. If your app runs on a different port than 5000, you’ll need to adjust the port mapping as mentioned [earlier](#domains).

> [!TIP]
> If you don't have a domain name and just want to play with dokku, visiting the ip directly might just show the default nginx page, this is because of the default nginx configuration, and dokku using the server hostname which won't resolve to anything. so just remove the default nginx config and everything should work fine `sudo rm -rf /etc/nginx/sites-enabled/default`

---


I hope you found this blog helpful, if you have any questions you can always reach out, i'll be so happy to help if i don't have so many tasks on my list 🙃

You can also check [dokku docs](https://dokku.com/docs) for more information.

I'm planning to write another blog on dokku, maybe, i hope so soon.
