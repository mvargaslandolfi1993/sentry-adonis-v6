import { Sentry } from './sentry.js'

export class SentryManager {
  static init(options: Record<string, any>) {
    Sentry.init(options)
    return Sentry
}
}
