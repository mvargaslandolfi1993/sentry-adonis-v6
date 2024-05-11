import type { NodeOptions } from '@sentry/node'
import { SentryManager } from './sentry_manager.js';
export interface SentryConfig extends NodeOptions {}

export interface SentryService extends SentryManager {}
