import Funcionario from "#models/funcionario";
import { HttpContext } from "@adonisjs/core/http";

export default class FuncionariosController {

    // Paginação de funcionários
    async index({ request }: HttpContext) {
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)
        return await Funcionario.query().paginate(page, perPage)
    }

    // Requisição por id passado por rota (parâmetros)
    async show({ params }: HttpContext) {
        return await Funcionario.findOrFail(params.id)
    }

    // Método para criar um funcionário pelo Json
    async store({ request }: HttpContext) {
        const dados = request.only(['nome', 'cpf', 'cargo', 'salario', 'dt_contratacao'])
        return await Funcionario.create(dados)
    }

    // Atualização de um funcionário existente
    async update({ params, request }: HttpContext) {
        const funcionario = await Funcionario.findOrFail(params.id)
        const dados = request.only(['nome', 'cpf', 'cargo', 'salario', 'dt_contratacao'])
        
        funcionario.merge(dados)
        return await funcionario.save()
    }

    // Deletando funcionário pelo Id do banco de dados
    async destroy({ params }: HttpContext) {
        const funcionario = await Funcionario.findOrFail(params.id)

        await funcionario.delete()
        return { msg: 'Registro de funcionário deletado com sucesso', funcionario }
    }
}