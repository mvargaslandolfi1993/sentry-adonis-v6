import app from '@adonisjs/core/services/app'
import { SentryService } from '../src/types.js'

let sentry: SentryService

await app.booted(async () => {
  sentry = await app.container.make('sentry')
})

export { sentry as default }
