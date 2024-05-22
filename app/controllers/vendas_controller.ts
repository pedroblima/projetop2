import type { HttpContext } from '@adonisjs/core/http'
import Venda from "#models/venda";

export default class VendasController {

    // Paginação de vendas
    async index({ request }: HttpContext) {
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)
        return await Venda.query().paginate(page, perPage)
    }

    // Requisição por id passado por rota (parâmetros)
    async show({ params }: HttpContext) {
        return await Venda.findOrFail(params.id)
    }

    // Método para criar uma venda pelo Json
    async store({ request }: HttpContext) {
        const dados = request.only(['clientes_id', 'funcionarios_id', 'dt_vendas', 'total_vendas'])
        return await Venda.create(dados)
    }

    // Atualização de uma venda existente
    async update({ params, request }: HttpContext) {
        const venda = await Venda.findOrFail(params.id)
        const dados = request.only(['clientes_id', 'funcionarios_id', 'dt_vendas', 'total_vendas'])
        
        venda.merge(dados)
        return await venda.save()
    }

    // Deletando venda pelo Id do banco de dados
    async destroy({ params }: HttpContext) {
        const venda = await Venda.findOrFail(params.id)

        await venda.delete()
        return { msg: 'Venda deletada com sucesso', venda }
    }
}