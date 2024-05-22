import Funcionario from '#models/funcionario'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class FuncionarioSeeder extends BaseSeeder {
  public async run() {
    await Funcionario.createMany([
      {
        nome: 'Carlos Almeida',
        cpf: '123.456.789-00',
        cargo: 'Gerente',
        salario: 5000.00,
      },
      {
        nome: 'Fernanda Costa',
        cpf: '987.654.321-00',
        cargo: 'Analista de Sistemas',
        salario: 4000.00,
      },
      {
        nome: 'Ricardo Pereira',
        cpf: '111.222.333-44',
        cargo: 'Desenvolvedor',
        salario: 3000.00,
      }
    ])
  }
}