# local-storage
localStorage: Async, isomorphic and with fallbacks

## Installation

`npm i --save gatsbimantico/local-storage#1.0.0-alpha`
`yarn add gatsbimantico/local-storage#1.0.0-alpha`

## Motivation

- Preventing errors due to access localStorage from window:
  When accessing localStorage from window and attempting to use its methods,
  you're risking to break your whole application if the user is
  using private mode or a browser not compatible

- Preventing blocking the main thread:
  localStorage by default is a syncronous action.
  Sometimes you may require the localStorage to be set before proceeding,
  but I assumed that in most of the scenarios doesn't need to be that way

## Usage

Just import it and use as if it was the native API from the browser (even in node!).

Be aware of the async execution.

```
storage.setItem('name', 'world')
storage.getItem('name')
```
doesn't necessarily return 'world'.

The getItem method is syncronous.

### Example

```
import storage from 'local-storage';

// wait for your localStorage
Promise.all([
  storage.setItem('action', 'Hello'),
  storage.setItem('name', 'world')
]).then(() => {
  // get it syncronously
  const action = storage.getItem(`action`);
  const name = storage.getItem(`name`);
  console.log(`${action}, ${name}!`);

  // or let it run free
  storage.clear();
});
```

## Run the examples

### Node

`node ./examples/index.node.js`

### Browser

`npx server`

Then check the console log at:

http://localhost:5000/examples/index.browser.esm (ES6 modules)

http://localhost:5000/examples/index.browser.umd (namespaced global library at window['local-storage'])
