// import type { HttpContext } from '@adonisjs/core/http'

import Fornecedor from "#models/fornecedor";
import { createFornecedorValidator, updateFornecedorValidator } from "#validators/fornecedor";
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
    async store({ request, response }: HttpContext) {
        const dados = await createFornecedorValidator.validate(request.all())
        const fornecedor = await Fornecedor.create(dados)
        return response.created(fornecedor)
    }

    async update({ params, request, response }: HttpContext) {
        const fornecedor = await Fornecedor.findOrFail(params.id)
        const dados = await updateFornecedorValidator.validate(request.all())
        
        fornecedor.merge(dados)
        await fornecedor.save()
        return response.ok(fornecedor)
    }
    // Deletando pruduto pelo Id do banco de dados
    async destroy({ params }: HttpContext) {
        const fornecedor = await Fornecedor.findOrFail(params.id)

        await fornecedor.delete()
        return { msg: 'Registro deletado com sucesso', fornecedor }

    }
}