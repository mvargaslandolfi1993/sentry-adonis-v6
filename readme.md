# Sentry-Adonis-v6

> Sentry SDK for AdonisJS v6

[![typescript-image]][typescript-url] [![npm-image]][npm-url] [![license-image]][license-url]

Sentry service provider for Adonis v6

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

## Table of contents

- [Installation](#installation)
- [Sample Usage](#sample-usage)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Installation

```bash
npm i --save sentry-adonis-v6
```

```bash
node ace configure sentry-adonis-v6
```

- For other configuration, please update the `config/sentry.ts`.

# Sample Usage

After configure Sentry service will be initialized. After this you can import Sentry service anywhere in your application in such way:

```js
import Sentry from 'sentry-adonis-v6/services/main'
```

- Then you have to send your error details to Sentry. You can use Adonis Exception Handler for this purposes. For example you can implement such Exception Handler:

  ```js
    import Sentry from 'sentry-adonis-v6/services/main'
    import { HttpContext, ExceptionHandler } from '@adonisjs/core/http'

    export default class ExceptionHandler extends ExceptionHandler {
        /**
         * The method is used for handling errors and returning
        * response to the client
        */
        public async handle (error: unknown, ctx: HttpContext) {
        Sentry.captureException(error)
        return super.handle(error, ctx)
        }
    }
  ```

For additional details of Sentry API, please check the Sentry SDK documentation by this link [Sentry docs](https://docs.sentry.io/platforms/node/?platform=node)

[typescript-image]: https://img.shields.io/badge/Typescript-294E80.svg?style=for-the-badge&logo=typescript
[typescript-url]: "typescript"

![NPM Version](https://img.shields.io/npm/v/https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fsentry-adonis-v6)
[npm-url]: https://www.npmjs.com/package/sentry-adonis-v6 "npm"

![NPM License](https://img.shields.io/npm/l/https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fsentry-adonis-v6)
[license-url]: LICENSE.md "license"
