### check-git-branch
> Ensure that script commands in package. JSON are only allowed to execute on specified git branches
### usage
>Maybe you should cooperate with cross-env

`npm i check-git-branch -D`                           
`npm i cross-env -D`

### package.json in your project
```javascript
"scripts": {
   "build": "branch master && cross-env NODE_ENV=production node build/build.js",
   "build-test": "branch dev && cross-env NODE_ENV=sandbox node build/build.js"
},
```