import type { HttpContext } from '@adonisjs/core/http'
import produto from "#models/produto";
import Produto from '#models/produto';

export default class produtosController {

    // Paginação de produtos
    async index({ request }: HttpContext) {
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)
        return await produto.query().paginate(page, perPage)
    }

    // Requisição por id passado por rota (parâmetros)
    async show({ params }: HttpContext) {
        return await produto.findOrFail(params.id)
    }

    // Método para criar um produto pelo Json
    async store({ request }: HttpContext) {
        const dados = request.only(['nome', 'descricao', 'preco', 'quantidade'])
        return await produto.create(dados)
    }

    // Atualização de um produto existente
    async update({ params, request }: HttpContext) {
        const produto = await Produto.findOrFail(params.id)
        const dados = request.only(['nome', 'descricao', 'preco', 'quantidade'])

        produto.merge(dados)
        return await produto.save()
    }

    // Deletando produto pelo Id do banco de dados
    async destroy({ params }: HttpContext) {
        const produto = await Produto.findOrFail(params.id)

        await produto.delete()
        return { msg: 'produto deletado com sucesso', produto }
    }
}