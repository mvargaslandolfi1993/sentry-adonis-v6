import type { ApplicationService } from '@adonisjs/core/types'
import { RuntimeException } from '@poppinss/utils'
import { Sentry } from '../src/sentry.js'
import { SentryConfig } from '../src/types.js'

declare module '@adonisjs/core/types' {
  export interface ContainerBindings {
    sentry: typeof Sentry
  }
}

export default class SentryProvider {
  constructor(protected app: ApplicationService) {}

  async register() {
    this.app.container.singleton('sentry', async (resolver) => {
      const configService = await resolver.make('config')

      const config = configService.get<SentryConfig>('sentry')

      if (!config) {
        throw new RuntimeException(
          'Invalid config exported from "config/sentry.ts" file. Make sure to use the defineConfig method'
        )
      }

      Sentry.init({
        ...config,
      })

      return { ...Sentry }
    })
  }
}
