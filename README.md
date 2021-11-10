# node-base-template

## Overview
- A base template for setting up a working node server, with up to date package dependencies.

## Example Usage
- Useful for testing API requests, starting a basic server setup, or for referencing for React backend modifications.

## Design Goals
- lightweight, with an emphasis on clarity for ease of use when integrating into existing or green field projects.

## Usage
- `npm install`
  - If Errors due to old package-lock.json, delete and re-install npm.
- `npm start`
  - NPM is Configured to start Nodemon for hot-reloading.
- `http://localhost:3000/`
  - App will run on port 3000, though can be changed in server.js file.
  - Will show `hello world!` on browser when successful

## Developer Info
- Will always run on the latest pulic release of Node, and associated dependencies. 
  - Tested on `Node v16.13.0`
- Stack
  - Node
  - Express
  - Nodemon
  - Babel




