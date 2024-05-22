// import type { HttpContext } from '@adonisjs/core/http'

import Fornecedor from "#models/fornecedor";
import { HttpContext } from "@adonisjs/core/http";

export default class FornecedorsController {

    // Paginação de Fornecedors
    async index({ request }: HttpContext) {
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)
        return await Fornecedor.query().paginate(page, perPage)
    }

    // Requisição por id passado por rota(parãmetros)
    async show({ params }: HttpContext) {
        return await Fornecedor.findOrFail(params.id)
    }

    // Método para criar algum Fornecedor pelo Json
    async store({ request }: HttpContext) {
        const dados = request.only(['nome', 'telefone', 'endereco'])
        return await Fornecedor.create(dados)
    }

    async update({params, request}: HttpContext){
        const fornecedor = await Fornecedor.findOrFail(params.id)
        const dados = request.only(['nome', 'telefone', 'endereco'])
        
        fornecedor.merge(dados)
        return await fornecedor.save()
    }

    // Deletando pruduto pelo Id do banco de dados
    async destroy({ params }: HttpContext) {
        const fornecedor = await Fornecedor.findOrFail(params.id)

        await fornecedor.delete()
        return { msg: 'Registro deletado com sucesso', fornecedor }

    }
}