# Publish Packages to npm

There are two steps:

1. Create your package.
1. Publish the package.


## Create your Package
To publish your first package to npm, you need to go through these steps:

- **First, you need to have an npm account. Create one [here](https://www.npmjs.com/signup) if you don’t have one yet.**

- **Second, you need to login to your npm account through the command line.** 
>(You need to have Node and npm installed on your system before you perform this stepS ).

To sign in, you use
```
npm login
```

You have to enter your username, password, and email address. like this...

```
Username: codepradeep
Password:**********
Email: (this IS public)
Email: (this IS public) pradeep.sharma1@successive.tech
Logged in as codepradeep on https://registry.npmjs.org/.
```
- **Third, you need to create a package.**
  for that create a folder somewhere on your computer and navigate to it. The command line version is:
```
# Creating a folder 
mkdir npm-package

# Navigating into the folder
cd npm-package
```
begin the project with the npm init command.
```
npm init
```
This command creating a package.json file and ask for these info..
```
package name: (npm-packege) 99codepradeep //it should be unique and package should not already exists on npm
version: (1.0.0)
description:
entry point: (index.js)
test command:
git repository:
keywords:
author: Pradeep
license: (ISC)
```
- **The final step is to publish your package with this command.**
```
npm publish
```
And then
```
publish
npm notice
npm notice package: 99code-pradeep@1.0.0
npm notice === Tarball Contents ===
npm notice 28B  index.js
npm notice 235B package.json
npm notice 42B  hellonpm.txt
npm notice === Tarball Details ===
npm notice name:          99code-pradeep
npm notice version:       1.0.0
npm notice package size:  357 B
npm notice unpacked size: 305 B
npm notice shasum:        **************************
npm notice integrity:     *********************************
npm notice total files:   3
npm notice
+ 99code-pradeep@1.0.0
```
This mean package is Publish


After that you can Install your package with 
```
npm i package-name
```
