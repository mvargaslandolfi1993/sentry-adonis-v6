import { BaseCommand } from '@adonisjs/core/ace'
import { CommandOptions } from '@adonisjs/core/types/ace';

export default class SentryTest extends BaseCommand {
  static commandName = 'sentry:test'
  static description = 'Generate a test event and send it to Sentry'

  static options: CommandOptions = {
    startApp: true,
    staysAlive: false
  }

  /**
   * Execute command
   */
  async run(): Promise<void> {
    const { Sentry } = await import('sentry-adonis-v6')

    try {
      throw new Error('This is a test exception sent from the Sentry Adonis.')
    } catch (error) {
      const event_id = Sentry.captureException(error)
      return this.logger.success(`Event sent with ID: ${event_id}`)
    }
  }
}
