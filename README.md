# condsole: conditional console

Only log to the console if you're looking at it! Huge perf wins!

- By default, only executes console methods if devtools window is open
- Can pass conditions to evaluate to execute console methods in node.js / browser environments
- All methods available to console are available to condsole

## Recommended usage

```js
// ./utils/console.js
import condsole from 'condsole'

const options = {
  browser: true,
  node: true,
  devtools: true,
}

export default condsole(options)
```

```js
// ./main.js
import condsole from './utils/console'
// or, if you prefer destructuring: 
// import { log, warn, error } from './utils/console'

// then, use condsole like you would `console`
condsole.log('Hello world', { foo: 'bar' }) 
// given the default options, this would have only written to console
// if devtools were open at the time condsole was initialized
```

## Options

*`browser`* (boolean): default `true` 
- When false, forces all console calls to be no-ops in a browser environment
- Example: set `browser: !!localStorage.getItem('debug')` to only write to console if the `debug` localStorage key exists

*`node`* (boolean): default `true` 
- When false, forces all console calls to be no-ops in a node.js environment

*`devtools`* (boolean): default `true` 
- When false, writes to console regardless if devtools is open or not
- Note: Only checks if devtools is open _once_ (when condsole is instantiated). If you instantiate condsole during page load, it will check if devtools is open at that moment, and determine whether to write to console based on that. 
