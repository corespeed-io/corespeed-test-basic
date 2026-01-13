import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/', (c) => {
  return c.json({ status: 'ok', test: 'basic' })
})

app.get('/health', (c) => {
  return c.json({ healthy: true })
})

const port = process.env.PORT || 8080
console.log(`Server starting on port ${port}`)
serve({ fetch: app.fetch, port })
