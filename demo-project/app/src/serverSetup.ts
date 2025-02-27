import cors from 'cors'
import { config } from 'wasp/server'

export const middlewareConfigFn = (middlewareConfig) => {
  // Example of adding extra domains to CORS.
  middlewareConfig.set('cors', cors({ origin: [config.frontendUrl, 'https://didactic-fortnight-5g5499pgq47f4rq6-3000.app.github.dev', 'https://example2.com'] }))
  return middlewareConfig
}