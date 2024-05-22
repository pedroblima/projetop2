/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import ClientesController from '../app/controllers/clientes_controller.js'
import FornecedorsController from '../app/controllers/fornecedors_controller.js'
import FuncionariosController from '../app/controllers/funcionarios_controller.js'
import ItemPedidosController from '../app/controllers/item_pedidos_controller.js'
import ProdutosController from '#controllers/produtos_controller'
import PedidosController from '#controllers/pedidos_controller'
import VendasController from '#controllers/vendas_controller'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.resource('/clientes', ClientesController).apiOnly()
router.resource('/fornecedors', FornecedorsController).apiOnly()
router.resource('/funcionarios', FuncionariosController).apiOnly()
router.resource('/item', ItemPedidosController).apiOnly()
router.resource('/produtos', ProdutosController).apiOnly()
router.resource('/pedidos', PedidosController).apiOnly()
router.resource('/vendas', VendasController).apiOnly()