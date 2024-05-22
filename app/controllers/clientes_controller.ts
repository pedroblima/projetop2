// import type { HttpContext } from '@adonisjs/core/http'

import Cliente from "#models/cliente";
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
    async store({ request }: HttpContext) {
        const dados = request.only(['nome', 'cpf', 'telefone', 'email'])
        return await Cliente.create(dados)
    }

    async update({params, request}: HttpContext){
        const clientes = await Cliente.findOrFail(params.id)
        const dados = request.only(['nome', 'cpf', 'telefone', 'email'])
        
        clientes.merge(dados)
        return await clientes.save()
    }

    // Deletando pruduto pelo Id do banco de dados
    async destroy({ params }: HttpContext) {
        const clientes = await Cliente.findOrFail(params.id)

        await clientes.delete()
        return { msg: 'Registro deletado com sucesso', clientes }

    }
}