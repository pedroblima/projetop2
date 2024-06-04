import type { HttpContext } from '@adonisjs/core/http'
import ItemPedido from "#models/item_pedido";
import { createItemPedidoValidator, updateItemPedidoValidator } from '#validators/item_pedido';


export default class ItemPedidosController {

    // Paginação de itens de pedidos
    async index({ request }: HttpContext) {
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)
        return await ItemPedido.query().paginate(page, perPage)
    }

    // Requisição por id passado por rota (parâmetros)
    async show({ params }: HttpContext) {
        return await ItemPedido.findOrFail(params.id)
    }

    // Método para criar um item de pedido pelo Json
    async store({ request, response }: HttpContext) {
        const dados = await createItemPedidoValidator.validate(request.all())
        const itemPedido = await ItemPedido.create(dados)
        return response.created(itemPedido)
    }

    async update({ params, request, response }: HttpContext) {
        const itemPedido = await ItemPedido.findOrFail(params.id)
        const dados = await updateItemPedidoValidator.validate(request.all())
        
        itemPedido.merge(dados)
        await itemPedido.save()
        return response.ok(itemPedido)
    }
    // Deletando item de pedido pelo Id do banco de dados
    async destroy({ params }: HttpContext) {
        const itemPedido = await ItemPedido.findOrFail(params.id)

        await itemPedido.delete()
        return { msg: 'Item de pedido deletado com sucesso', itemPedido }
    }
}