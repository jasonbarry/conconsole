# condsole: conditional console

- By default, only executes console methods if devtools window is open
- Can pass conditions to evaluate to execute console methods in node.js / browser environments
- All methods available to console are available to condsole

## Usage

```js
import Condsole from 'condsole'

const options = {} // see below for available options
const condsole = Condsole(options)

// then, use condsole like you would `console`
condsole.log('Hello world', myVar) 
// given the default options, this would have only written to console
// if devtools were open at the time Condsole was initialized
```

## Options

