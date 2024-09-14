---
title: "How to Add Continuous Deployment to a Dokku App with GitHub Actions"
date: "2024-09-14T11:30:20Z"
---

In the previous blog, i wrote about how to deploy your backend to the cloud with dokku. deployment was manual where you had to push your code manually to your server so Dokku could build and run it.

In this blog i'll be using **Github Actions** to automate that.

## What is Continuous Deployment (CD)?

Continuous Deployment is a software engineering practice used to make the software development life cycle (SDLC) easier and more productive, by automating the deployment cycle using various techniques and tools.

## Github Actions

Github actions is an automation platform, provided by github to automate tasks like testing, building and deploying code directly from your github repo.

The github action workflow should be a **YAML** file defined inside **`your_project/.github/workflows`** folder, that's where github will look for your actions.

## Let's Automate it

The follwing is the content of my workflow used to automate the deployment of my app, Let's break it down.

```yaml
# .github/workflows/mycd.yaml
name: "Deploy my app backend"
on:
  push:
    branches:
      - master
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: 📌 Cloning repo
        uses: actions/checkout@v3
        with:
          fetch-depth: 0
          ref: refs/heads/master
          sparse-checkout: folder_that_contains_the_code
          sparse-checkout-cone-mode: false

      - name: 🚚 Push to dokku
        uses: dokku/github-action@master
        with:
          git_remote_url: "ssh://dokku@${{ secrets.MY_SERVER_IP }}:22/my_app_name"
          ssh_private_key: ${{ secrets.MY_SSH_KEY }}
```


- **`name:`** a user friendly name you give to your action to understand what workflow is running.

- **`on:`** github workflows are be triggered based on [events](https://docs.github.com/en/actions/about-github-actions/understanding-github-actions#events), such as a pull or push request. in this case we want to deploy the app on every `push` to the `master` branch.

- **`jobs:`** A [job](https://docs.github.com/en/actions/about-github-actions/understanding-github-actions#jobs) is the most important thing here, it's a set of steps, that can be either a shell script or an action that will be run. In this workflow we have 2 steps, the "Cloning repo" and "Push to dokku" steps. before that we have the `deploy` job, it's actually a customizable name you can name it whatever you want.

- **📌 Cloning repo:** to make your code accessible to the workflow, github provides an action template **actions/checkout@v3**. the template has a set of [configurations](https://github.com/actions/checkout?tab=readme-ov-file#usage). like the `ref` which defines the branch you want to access and `sparse-checkout` to checkout a specific folder/files.

- **🚚 Push to dokku:** the step that handles the deployment of the code. dokku provides the template [dokku/github-action@master](https://github.com/dokku/github-action) to deploy your code. It requires a set of configurations, including `git_remote_url` and `ssh_private_key`.
For security you need to hide your keys, you can define your secrets in the settings of your repo, go to **repo settings > Secrets and variables > Actions**, add your secrets, and they will be accessible inside the workflow under the **`secrets`** object.
