import type { HttpContext } from '@adonisjs/core/http'
import Pedido from "#models/pedido";
import { createPedidoValidator, updatePedidoValidator } from '#validators/pedido';

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
    async store({ request, response }: HttpContext) {
        const dados = await createPedidoValidator.validate(request.all())
        const pedido = await Pedido.create(dados)
        return response.created(pedido)
    }

    async update({ params, request, response }: HttpContext) {
        const pedido = await Pedido.findOrFail(params.id)
        const dados = await updatePedidoValidator.validate(request.all())
        
        pedido.merge(dados)
        await pedido.save()
        return response.ok(pedido)
    }

    // Deletando pedido pelo Id do banco de dados
    async destroy({ params }: HttpContext) {
        const pedido = await Pedido.findOrFail(params.id)

        await pedido.delete()
        return { msg: 'Pedido deletado com sucesso', pedido }
    }
}