### check-git-branch

[![Build Status](https://travis-ci.org/silentport/branch.svg?branch=master)](https://travis-ci.org/silentport/branch)
<a href="https://www.npmjs.com/package/check-git-branch"><img alt="undefined" src="https://img.shields.io/npm/v/check-git-branch.svg?style=flat"></a>

Ensure that script commands in `package.json` are only allowed to execute on specified git branches

### Installation

This module should be installed as one of your project's `devDependencies`:

`npm install --save-dev check-git-branch`

You might also want to consider using `cross-env`:

`npm install --save-dev cross-env`

### Usage

example of the `scripts` section in your project's package.json:
```javascript
"scripts": {
   "build": "branch master && cross-env NODE_ENV=production node build/build.js",
   "build-test": "branch dev && cross-env NODE_ENV=sandbox node build/build.js"
},
```
