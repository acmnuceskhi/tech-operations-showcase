/**
 * Tina CMS Client
 *
 * Provides a configured client for fetching content from Tina Cloud.
 * Uses the static client to avoid build issues with generated TypeScript files.
 */

// Use static client for both development and production
export { client } from './static-client.js'
export { client as default } from './static-client.js'
