import type { SentryConfig } from './types.js'
import { RuntimeException } from '@poppinss/utils'

export function defineConfig(config: SentryConfig): SentryConfig {
  if (!config.dsn) {
    throw new RuntimeException('Missing "dsn" property in sentry config.')
  }

  if (!config.environment) {
    throw new RuntimeException('Missing "environment" property in sentry config.')
  }

  return {
    ...config,
  }
}
