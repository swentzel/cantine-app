# Cantine-App Backend

Backend for the cantine-app.


# Install development dependencies

## NPM & Node
Make sure you have installed the compatible versions of node (v8.10.0) and npm (> 6).
I recommend using nvm (https://github.com/creationix/nvm), but you can use any other package manager.

## NVM
Install NVM to install the correct version of node.js:
`nvm install 8.10.0`

## NPX
`npm install -g npx`


## Typescript
You can compile the ts files in this directory by 1st installing typescript via:

`npm install -g typescript`

## Parcel
`npm install -g parcel-bundler`

## Everything else
`npm install`

## Compile TypeScript
You can then run the compiler by running `tsc` in this directory. It will pull the settings from .tsconfig and extra @types
from package.json. The output create.js file is what will be uploaded by serverless.
