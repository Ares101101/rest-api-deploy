import { Router } from 'express'
import { routeController } from '../controllers/controllers.js'

export const routerRo = Router()

routerRo.get('/', routeController.getAll)

routerRo.get('/:id', routeController.getById)

routerRo.post('/', routeController.create)

routerRo.delete('/:id', routeController.delete)

routerRo.patch('/:id', routeController.update)
