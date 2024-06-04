// import type { HttpContext } from '@adonisjs/core/http'

import Cliente from "#models/cliente";
import { createClienteValidator, updateClienteValidator } from "#validators/cliente";
import { HttpContext } from "@adonisjs/core/http";

export default class ClientesController {

    // Paginação de Clientes
    async index({ request }: HttpContext) {
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)
        return await Cliente.query().paginate(page, perPage)
    }

    // Requisição por id passado por rota(parãmetros)
    async show({ params }: HttpContext) {
        return await Cliente.findOrFail(params.id)
    }

    // Método para criar algum Cliente pelo Json
    async store({ request, response }: HttpContext) {
        const dados = await createClienteValidator.validate(request.all())
        const cliente = await Cliente.create(dados)
        return response.created(cliente)
    }

    async update({ params, request, response }: HttpContext) {
        const cliente = await Cliente.findOrFail(params.id)
        const dados = await updateClienteValidator.validate(request.all())
        
        cliente.merge(dados)
        await cliente.save()
        return response.ok(cliente)
    }

    // Deletando pruduto pelo Id do banco de dados
    async destroy({ params }: HttpContext) {
        const clientes = await Cliente.findOrFail(params.id)

        await clientes.delete()
        return { msg: 'Registro deletado com sucesso', clientes }

    }
}