/**
 * Tina CMS GraphQL Client
 *
 * Provides a configured client for fetching content from Tina CMS.
 * In development, connects to local GraphQL server.
 * In production, connects to Tina Cloud.
 */

import { client as generatedClient } from '../../tina/__generated__/client'

export const client = generatedClient

export default client
