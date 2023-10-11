import express, { json } from 'express'// require installed modules
import { routerRo } from './rutes/rute.js'
import { corsmiddleware } from './middlewares/cors.js'
const app = express()
app.use(json())
app.use(corsmiddleware())
app.disable('x-powered-by')// disable header express

app.use('/movies', routerRo)

const PORT = process.env.PORT ?? 3000

app.listen(PORT, () => {
  console.log(`server listening on por http://localhost:${PORT}`)
})
