import type { HttpContext } from '@adonisjs/core/http'
import Venda from "#models/venda";
import { createVendaValidator, updateVendaValidator } from '#validators/venda';

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
    async store({ request, response }: HttpContext) {
        const dados = await createVendaValidator.validate(request.all())
        const venda = await Venda.create(dados)
        return response.created(venda)
    }

    async update({ params, request, response }: HttpContext) {
        const venda = await Venda.findOrFail(params.id)
        const dados = await updateVendaValidator.validate(request.all())
        
        venda.merge(dados)
        await venda.save()
        return response.ok(venda)
    }

    // Deletando venda pelo Id do banco de dados
    async destroy({ params }: HttpContext) {
        const venda = await Venda.findOrFail(params.id)

        await venda.delete()
        return { msg: 'Venda deletada com sucesso', venda }
    }
}