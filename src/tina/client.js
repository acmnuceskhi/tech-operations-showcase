/**
 * Tina CMS Client
 *
 * Provides a configured client for fetching content from Tina CMS.
 * Uses static JSON files for data, avoiding the need for TinaCloud or GraphQL server.
 */

import { client as staticClient } from './static-client'

export const client = staticClient

export default client
