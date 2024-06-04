import type { HttpContext } from '@adonisjs/core/http'
import Pedido from "#models/pedido";
import { createProdutoValidator, updateProdutoValidator } from '#validators/produto';
import Produto from '#models/produto';

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
        const dados = await createProdutoValidator.validate(request.all())
        const produto = await Produto.create(dados)
        return response.created(produto)
    }

    async update({ params, request, response }: HttpContext) {
        const produto = await Produto.findOrFail(params.id)
        const dados = await updateProdutoValidator.validate(request.all())
        
        produto.merge(dados)
        await produto.save()
        return response.ok(produto)
    }

    // Deletando pedido pelo Id do banco de dados
    async destroy({ params }: HttpContext) {
        const pedido = await Pedido.findOrFail(params.id)

        await pedido.delete()
        return { msg: 'Pedido deletado com sucesso', pedido }
    }
}
