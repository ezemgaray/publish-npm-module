# Publish NPM module

This is a simple guide to publish an [npm](https://npmjs.com) module.

# Table of content

* [Starting](#starting)
* [The project](#the-project)
* [Manifest - package.json](#manifest)
* [Code](#code)


## Starting  
[&#8593; Guide](#table-of-content)

First of all, remember to create an account on [npmjs.com](https://npmjs.com) and check that you have **npm** installed.

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
[&#8593; Guide](#table-of-content)

To start the project, create a repository on [github](https://github.com) and in the project folder execute the following commands.

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

- Generate a "***.gitignore***" for **Node.js** and **JavaScript** projects.  
```sh
$ npx gitignore node
```

- Generate a "***CODE_OF_CONDUCT.md***" with your email following the [Contributor Covenant](https://www.contributor-covenant.org/)  
```sh
$ npx covgen "hello@sergiodxa.com"
```

- Initialize a **Node.js** project with a "***package.json***" with all default values  
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

## Manifest  
[&#8593; Guide](#table-of-content)

The "***package.json***" contains the module information.
This manifiest could be diferent in your project. Depending of your npm configuration.

```json
{
  "name": "publish-npm-module",
  "version": "1.0.0",
  "description": "This is a simple guide to publish an [npm](https://npmjs.com) module.",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

**Basic Properties**

- `name`: This is the module name. By default it is the folder name. Can include a namespace (your npm username or organization). 
e.g.: `@ezemgaray/publish-npm-module`
- `version`: Module version following the semantic versioning system([semver](https://semver.org/)). 
In short, this means that the versioning numbers will be handled as follows:
  - `4`.1.3 - (major) Big changes. Significant changes to the software that may cause errors for the people who use it. The change may include new features/functionalities, bug fixes and/or functionalities improvements.
  - 4.`1`.3 - (minor) Change that adds a new feature to the software or modifies an existing one, but is still compatible with existing code. Also when we mark something as obsolete.
  - 4.1.`3` - (patch) When you fix a bug being the change backward compatible.
- `description`: Project description. Should be short and concrete.
- `main`: The main file of your code. By default is "***index.js***". You can change it.
- `scripts`: (object) Scripts list. Then you can execute this names in the terminal using `npm run <script>`. Some scripts like "test" run directly with `npm <script>`
- `keywords`: Keywords referring to the project that can be used by the registry for search results.
- `author `: Author information which can be a string **"name &lt;youremail@email.com&gt; (url)" ** or an object **{"name": "yout name", "email": "youremail@email.com", "url": "yourUrl"}**
- `license`: Is the license with which the module is published. the default is **ISC**. In this case it is changed to **MIT** 

## Code  
[&#8593; Guide](#table-of-content)

To do this example, a simple code is implemented creating an index.js file in a new folder 'src'  
`src/index.js`

```javascript
function hello(name = "Jhon Doe") {
  return `Hello, ${name}`;
}

export default hello;

```

Your file structure should now be like this:

```
├── src
|   └── index.js
├── LICENSE
├── .gitignore
├── CODE_OF_CONDUCT.md
├── LICENSE
├── package.json
└── README.md
```