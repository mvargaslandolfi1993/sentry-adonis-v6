import type { ApplicationService } from '@adonisjs/core/types'
import { RuntimeException } from '@poppinss/utils'
import { SentryConfig, SentryService } from '../src/types.js'
import { SentryManager } from '../src/sentry_manager.js'

declare module '@adonisjs/core/types' {
  export interface ContainerBindings {
    'sentry': SentryService
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

      return SentryManager.init({
        ...config,
      })
    })

    this.app.container.make('sentry')
  }
}
