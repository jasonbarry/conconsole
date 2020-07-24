# conconsole: conditional console

- By default, only executes console methods if devtools window is open
- Can pass conditions to evaluate to execute console methods in node.js / browser environments
- All methods available to console are available to conconsole

## Usage

```js
import Conconsole from 'conconsole'

const options = {} // see below for available options
const conconsole = Conconsole(options)

// then, use conconsole like you would `console`
conconsole.log('Hello world', myVar) 
// given the default options, this would have only written to console
// if devtools were open at the time Conconsole was initialized
```

## Options

