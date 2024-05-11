import ConfigureCommand from '@adonisjs/core/commands/configure'
import { stubsRoot } from './stubs/main.js'

/**
 * Configures the package
 */
export async function configure(command: ConfigureCommand) {
  const codemods = await command.createCodemods()

  /**
   * Publish config file
   */
  await codemods.makeUsingStub(stubsRoot, 'config/sentry.stub', {})

  /**
   * Publish provider and command
   */
  await codemods.updateRcFile((rcFile: any) => {
    rcFile.addProvider('sentry-adonis-v6/sentry_provider')
    rcFile.addCommand('sentry-adonis-v6/commands')
  })

  /**
   * Define env variables
   */
  await codemods.defineEnvVariables({
    SENTRY_DSN: '',
    SENTRY_ENVIRONMENT: '',
  })

  /**
   * Define env variables validation
   */
  await codemods.defineEnvValidations({
    variables: {
      SENTRY_DSN: 'Env.schema.string()',
      SENTRY_ENVIRONMENT: 'Env.schema.string()',
    },
    leadingComment: 'Variables for sentry-adonis-v6',
  })
}
