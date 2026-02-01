import { rest } from 'msw'
import { doctors } from './data'

export const handlers = [
  rest.get('/api/doctors', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(doctors))
  }),

  rest.get('/api/doctors/:id', (req, res, ctx) => {
    const { id } = req.params
    const doc = doctors.find((d) => d.id === id)
    if (!doc) return res(ctx.status(404))
    return res(ctx.status(200), ctx.json(doc))
  }),
]
