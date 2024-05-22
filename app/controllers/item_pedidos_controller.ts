import type { HttpContext } from '@adonisjs/core/http'
import ItemPedido from "#models/item_pedido";


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
    async store({ request }: HttpContext) {
        const dados = request.only(['produtos_id', 'pedidos_id', 'quantidade', 'preco_unitario'])
        return await ItemPedido.create(dados)
    }

    // Atualização de um item de pedido existente
    async update({ params, request }: HttpContext) {
        const itemPedido = await ItemPedido.findOrFail(params.id)
        const dados = request.only(['produtos_id', 'pedidos_id', 'quantidade', 'preco_unitario'])
        
        itemPedido.merge(dados)
        return await itemPedido.save()
    }

    // Deletando item de pedido pelo Id do banco de dados
    async destroy({ params }: HttpContext) {
        const itemPedido = await ItemPedido.findOrFail(params.id)

        await itemPedido.delete()
        return { msg: 'Item de pedido deletado com sucesso', itemPedido }
    }
}