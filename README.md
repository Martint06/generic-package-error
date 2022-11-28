# generic-package-error

generic-package-error is a package for create generic error for API

## Installation

```bash
npm i -s generic-package-error
```

## Usage

```javascript

# server.js
const { errorHandler } = require('generic-package-error');

server.use(errorHandler);

# Login.js import
const {
	MissingParamError,
	InvalidParamError,
	AccessDeniedError,
	NotAcceptableError,
} = require('generic-package-error');
```
