/**
 * Tina CMS GraphQL Client
 *
 * Provides a configured client for fetching content from Tina CMS.
 * In development, connects to local GraphQL server.
 * In production, connects to Tina Cloud.
 */

import { createClient } from 'tinacms/dist/client'

export const client = createClient({
  url: import.meta.env.DEV
    ? 'http://localhost:4001/graphql'
    : `https://content.tinajs.io/content/${import.meta.env.VITE_TINA_CLIENT_ID}/github/${import.meta.env.VITE_TINA_BRANCH}`,
  token: import.meta.env.VITE_TINA_TOKEN
})

export default client
