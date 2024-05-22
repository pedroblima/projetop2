import type { HttpContext } from '@adonisjs/core/http'
import Pedido from "#models/pedido";

export default class PedidosController {

    // Paginação de pedidos
    async index({ request }: HttpContext) {
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)
        return await Pedido.query().paginate(page, perPage)
    }

    // Requisição por id passado por rota (parâmetros)
    async show({ params }: HttpContext) {
        return await Pedido.findOrFail(params.id)
    }

    // Método para criar um pedido pelo Json
    async store({ request }: HttpContext) {
        const dados = request.only(['id_cliente', 'dt_pedido', 'status'])
        return await Pedido.create(dados)
    }

    // Atualização de um pedido existente
    async update({ params, request }: HttpContext) {
        const pedido = await Pedido.findOrFail(params.id)
        const dados = request.only(['id_cliente', 'dt_pedido', 'status'])
        
        pedido.merge(dados)
        return await pedido.save()
    }

    // Deletando pedido pelo Id do banco de dados
    async destroy({ params }: HttpContext) {
        const pedido = await Pedido.findOrFail(params.id)

        await pedido.delete()
        return { msg: 'Pedido deletado com sucesso', pedido }
    }
}