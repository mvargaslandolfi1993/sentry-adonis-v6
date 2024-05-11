import { BaseCommand } from '@adonisjs/core/ace'
import Sentry from '../services/main.js'

export default class SentryTest extends BaseCommand {
  static commandName = 'sentry:test'
  static description = 'Generate a test event and send it to Sentry'

  /**
   * Execute command
   */
  async run(): Promise<void> {
    try {
      throw new Error('This is a test exception sent from the Sentry Adonis.')
    } catch (error) {
      const event_id = Sentry.captureException(error)

      if (!event_id) {
        this.error(`There was an error sending the test event.`)
        this.error(
          `Please check if you DSN is set properly in your config or '.env' as 'SENTRY_ENVIRONMENT'.`
        )
      } else {
        return this.logger.success(`Event sent with ID: ${event_id}`)
      }
    }
  }
}
