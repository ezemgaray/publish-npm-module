# Publish NPM module

This is a simple guide to publish an [npm](https://npmjs.com) module.

## Table of content

- [The project](#the-project)
- [Manifest - package.json](#manifest)
- [Code](#code)
- [Dependencies](#dependencies)
  - [Installing dependencies](#installing-dependencies)
  - [Scripts configuration](#scripts-configuration)
  - [Adding a test](#adding-a-test)
  - [Babel config](#babel-config)
  - [Run test](#run-test)
- [Building files for production](#building-files-for-production)
- [Hooks](#hooks)
- [Avoiding committing errors](#avoiding-committing-errors)
  - [Configure a linter](#configure-a-linter)
  - [ESLint configuration](#eslint-configuration)
- [Publishing the module](#publishing-the-module)
  - [Commands to publish](#commands-to-publish)
- [Common Errors](#common-errors)
- [Check your module](#check-your-module)
- [Links](#links)

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

- Initialize a new repository

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

- Generate a "**_.gitignore_**" for **Node.js** and **JavaScript** projects.

```sh
$ npx gitignore node
```

- Generate a "**_CODE_OF_CONDUCT.md_**" with your email following the [Contributor Covenant](https://www.contributor-covenant.org/)

```sh
$ npx covgen "hello@sergiodxa.com"
```

- Initialize a **Node.js** project with a "**_package.json_**" with all default values

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

The "**_package.json_**" contains the module information.
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
- `main`: The main file of your code. By default is "**_index.js_**". You can change it.
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

## Dependencies

[&#8593; Guide](#table-of-content)

There are diferent types of dependencies. (check this simple explanation on [yarnpkg.com - Types of dependencies](https://classic.yarnpkg.com/en/docs/dependency-types/))

**_dependencies_** and **_devdependencies_** are the most common.  
To install...

_dependencies_

```sh
$ npm install module-name
```

_devdependencies_

```sh
$ npm install -D module-name
```

Also you can install more than one dependencie at de same time. For that you just have to separate the names with spaces

### Installing dependencies

[&#8593; Guide](#table-of-content)

- [Jest](https://jestjs.io/) - Delightful JavaScript Testing Framework with a focus on simplicity.
- [Microbundle](https://github.com/developit/microbundle) - Makes different versions of the code compatible with CommonJS to use in Node.js, one from UMD to use in a script tag in the browser and one from ECMAScript so that tools like webpack or Parcel can optimize the final code.

Also you need babel-jest to compile javascript modules becose jest doesn`t support it

```sh
npm install -D jest microbundle babel-jest @babel/preset-env
```

### Scripts configuration

[&#8593; Guide](#table-of-content)

To run the test with **Jest** and build the bundle, go to the `"scripts"` property in `package.json`, change `"test"` and add `"build"`:

```json
{
  "scripts": {
    "test": "jest",
    "build": "microbundle"
  }
}
```

### Adding a test

[&#8593; Guide](#table-of-content)

To do a test you must create a `/test` forlder with your tests but in this case you can add a test file `src/index.test.js` with the following code:

```javascript
import hello from ".";

describe("it should say hello", () => {
  it("should greet 'Jhon Doe'", () => {
    expect(hello()).toBe("Hello, Jhon Doe");
  });

  it("should greet 'Daniel'", () => {
    expect(hello("Daniel")).toBe("Hello, Daniel");
  });
});
```

### Babel config

[&#8593; Guide](#table-of-content)

To run Babel, create a `babel.config.js` in the root of the project, with the following code:

```javascript
module.exports = {
  presets: ["@babel/preset-env"],
};
```

### Run test

[&#8593; Guide](#table-of-content)

Tu run ypur test execute the following command:

```sh
$ npm test
```

If you get an answer like this, it is because the test was correct.

```
 PASS  src/index.test.js (6.629 s)
  it should say hello
    √ should greet 'Jhon Doe' (2 ms)
    √ should greet 'Daniel'

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        21.598 s
Ran all test suites.
```

## Building files for production

[&#8593; Guide](#table-of-content)

With **_microbundle_** you will build the files for production.
By default, the microbundle generates the files in the root of the project. Therefore, you can define the `dist` folder where the micropackage will place the files. Also you can add this folder in the `.gitignore`.

The package.json should look like this:

```json
{
  "name": "publish-npm-module",
  "version": "1.0.0",
  "description": "This is a simple guide to publish an [npm](https.npmjs.com) module.",
  "main": "dist/index.js",
  "umd:main": "dist/index.umd.js",
  "module": "dist/index.mjs",
  "source": "src/index.js",
  "scripts": {
    "test": "jest",
    "build": "microbundle"
  },
  "keywords": [],
  "author": {
    "name": "Ezequiel Miguel Garay",
    "email": "ezemgaray@gmail.com",
    "url": "https://github.com/ezemgaray/gem-css"
  },
  "license": "MIT",
  "devDependencies": {
    "@babel/preset-env": "^7.11.5",
    "babel-jest": "^26.5.2",
    "jest": "^26.5.2",
    "microbundle": "^0.12.4"
  }
}
```

Adding `main` with the file path for Node.js (CJS), `umd:main` for the UMD file and `module` for the ESM file. `source` indicates the source file to be used by microbundle

### Building...

```sh
$ npm run build
```

## Hooks

[&#8593; Guide](#table-of-content)

To define **hooks** in our package.json npm offers us to put a script with the prefix **_pre_**, this script will run before executing another prefixed script.  
e.g.: ig we have a script `"build"` we can add `"prebuild"` or `"publish"` - `"prepublish"`

```json
{
  "scripts": {
    "test": "jest",
    "prebuild": "npm test",
    "build": "microbundle",
    "prepublish": "npm run build"
  }
}
```

## Avoiding committing errors

[&#8593; Guide](#table-of-content)

It's important avoid committing errors.  
**_husky_** and **_lint-staged_** help us to run a script before committing.

Instlling tools

```sh
$ npm install -D husky lint-staged
```

Configure **_Husky_** adding this in the `package.json`

```json
{
  "husky": {
    "hooks": {
      "pre-commit": "npm test"
    }
  }
}
```

We also installed **_lint-staged_**, this tool allows us to run something only for the updated or added files. We can then use it to use a linter and make sure the code meets certain rules.

### Configure a Linter

[&#8593; Guide](#table-of-content)

To make sure that our code follows certain rules, we are going to use [ESLint](https://eslint.org/) and [Prettier](https://www.npmjs.com/package/eslint-plugin-prettier) to make sure that our code has no errors and is written in the same style.

```sh
$ npm install -D eslint eslint-plugin-prettier eslint-config-prettier prettier
```

### ESLint configuration

[&#8593; Guide](#table-of-content)

Add `.eslintrc` file in the root of the project with the following code:

```json
{
  "extends": ["prettier"],
  "plugins": ["prettier"],
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "env": {
    "node": true,
    "es6": true
  }
}
```

With this we tell **ESLint** to extend **Prettier**'s configuration, to use it as a Plugin,
to support ECMAScript 2018 and that the code runs in ES6 or higher environments and Node.js

Now you have to make every change to a .js file run **prettier** and **ESLint**, for that we configure the following in the `package.json`.

```json
{
  "husky": {
    "hooks": {
      "pre-commit": "npm test && lint-staged"
    }
  },
  "lint-staged": {
    "*.js": ["prettier --write", "eslint --fix", "git add"],
    "*.{json,md}": ["prettier --write", "git add"]
  }
}
```

Now Prettier will fix any problems in .json and .md files and Prettier and ESLint will see problems in .js files.

## Publishing the module

[&#8593; Guide](#table-of-content)

Before publishing your module, you must add a `"files"` attribute in your `package.json`.  
With this attribute you can define which files will be uploaded to **npm**.

You should also be sure to commit all changed files and push them to the Github repository.

Then your `package.json` should look like the following:

```json
{
  "name": "publish-npm-module",
  "version": "1.0.0",
  "description": "This is a simple guide to publish an [npm](https.npmjs.com) module.",
  "main": "dist/index.js",
  "umd:main": "dist/index.umd.js",
  "module": "dist/index.mjs",
  "source": "src/index.js",
  "scripts": {
    "test": "jest",
    "prebuild": "npm test",
    "build": "microbundle",
    "prepublish": "npm unlink && npm run build"
  },
  "keywords": [],
  "author": {
    "name": "Ezequiel Miguel Garay",
    "email": "ezemgaray@gmail.com",
    "url": "https://github.com/ezemgaray/publish-npm-module"
  },
  "license": "MIT",
  "devDependencies": {
    "@babel/preset-env": "^7.11.5",
    "babel-jest": "^26.5.2",
    "eslint": "^7.10.0",
    "eslint-config-prettier": "^6.12.0",
    "eslint-plugin-prettier": "^3.1.4",
    "husky": "^4.3.0",
    "jest": "^26.5.2",
    "lint-staged": "^10.4.0",
    "microbundle": "^0.12.4",
    "prettier": "^2.1.2"
  },
  "husky": {
    "hooks": {
      "pre-commit": "npm test && lint-staged"
    }
  },
  "lint-staged": {
    "*.js": ["prettier --write", "eslint --fix", "git add"],
    "*.{json,md}": ["prettier --write", "git add"]
  },
  "files": ["dist", "index.d.ts", "package.json", "README.md"]
}
```

### Commands to publish

[&#8593; Guide](#table-of-content)

If you have a PRO account you can execute

```sh
$ npm publish
```

This command publishes your module as private.

If you don't have a PRO account. you can run the following command to publish it as public.

```sh
$ npm publish --access public
```

## Common errors

[&#8593; Guide](#table-of-content)

Some common errors can be 403, 409

```
npm ERR! code E403
npm ERR! 403 403 Forbidden - PUT https://registry.npmjs.org/Wits
npm ERR! 403 In most cases, you or one of your dependencies are requesting
npm ERR! 403 a package version that is forbidden by your security policy.
-------------------------------------
npm http 409 https://registry.npmjs.org/-/user/org.couchdb.user:...
npm ERR! Error: conflict Document update conflict.: -/user/org.couchdb.user:...
```

You can fix those errors with differents solutions but also you can execute this command:

```sh
$ npm doctor
```

`npm doctor` runs a series of checks to make sure your npm installation has what it needs to manage your JavaScript packages. In case of any errors, provide a recommendation to resolve the problem.

## Check your module

[&#8593; Guide](#table-of-content)

After publishing your module in npm, check that everything works correctly and in the way it has been configured.

Create a folder on your computer, access it and install your module:

```sh
$ npm install your-module-name.
```

## Links

[&#8593; Guide](#table-of-content)

This repository was created by taking information from different websites, forums, repositories, etc.

Especially from

- [https://sergiodxa.com](https://sergiodxa.com/articles/crear-modulo-npm) (Spanish)

and...

- [Types of dependencies yarnpkg.com](https://classic.yarnpkg.com/en/docs/dependency-types/)
- [npm-version - npmjs.com](https://docs.npmjs.com/cli/version)
- [Folder Structure Conventions - repository](https://github.com/kriasoft/Folder-Structure-Conventions/blob/master/README.md)
- [npm-doctor npmjs.com](https://docs.npmjs.com/cli-commands/doctor.html)

## Author

Ezequiel Garay [github](https://github.com/ezemgaray)
