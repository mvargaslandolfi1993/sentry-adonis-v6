# Sentry-Adonis-v6

> Sentry service provider for Adonis v6

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

After configure Sentry service will be initialized. After this you can import Sentry service anywhere in your application as follows:

```js
import { Sentry } from 'sentry-adonis-v6'
```

- Then you have to send your error details to Sentry. You can use Adonis Exception Handler for this purposes. For example you can implement and Exception Handler:

  ```js
    import { Sentry } from 'sentry-adonis-v6'
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

Additionally, you can run a command to validate and test the connection to Sentry as follows:

```bash
node ace sentry:test
```

For additional details of Sentry API, please check the Sentry SDK documentation by this link [Sentry docs](https://docs.sentry.io/platforms/node/?platform=node)
