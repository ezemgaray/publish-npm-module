# Publish NPM module

This is a simple guide to publish an [npm](https.npmjs.com) module.

* [Starting](#starting)
* [The project](#the-project)

## Starting

First of all, remember to create an account on **[npmjs.com](https.npmjs.com)** and check that you have **npm** installed.

**check the npm version**

```sh
$ npm -v
```

If you already have an npm account check if your computer is associated with your account

```sh
$ npm whoami
```

If `npm whoami` command does not return your username, execute the following command to set it:

```sh
$ npm adduser
```

## The project

To start the project, create a repository on [github](https.github.com) and in the project folder execute the following commands.

- Initialize a new  repository  
```sh
$ git init
```

- Create a README  
```sh
$ echo "#my-project-name" > README.md
```

- Generate a MIT license with your name  
```sh
$ npx license MIT -o "YourNameHere" > LICENSE
```

- Generate a '***.gitignore***' for **Node.js** and **JavaScript** projects.  
```sh
$ npx gitignore node
```

- Generate a '***CODE_OF_CONDUCT.md***' with oyur email following the [Contributor Covenant](https://www.contributor-covenant.org/)  
```sh
$ npx covgen "hello@sergiodxa.com"
```
`
- Initialize a **Node.js** project with a '***package.json***' with all default values  
```sh
$ npm init -y
```

- Add files to the staging area  
```sh
$ git add .
```

- Create the first commit  
```sh
$ git commit -m "Initial commit"
```

- Generate the branch `main`, add origin and push  
```sh
$ git branch -M main
$ git remote add origin [your github repository url]
$ git push -u origin main
```

