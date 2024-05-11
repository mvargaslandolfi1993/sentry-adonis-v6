import app from '@adonisjs/core/services/app'
import { Sentry } from '../src/sentry.js'

let sentry: typeof Sentry

await app.booted(async () => {
  sentry = await app.container.make('sentry')
})

export { sentry as default }
