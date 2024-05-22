import Cliente from '#models/cliente'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Cliente.createMany([
      {
        nome: 'Maria Silva',
        endereco: 'Rua das Flores, 123',
        telefone: '(11) 98765-4321',
        email: 'jonh@gmail.com',
        cpf: '123.432.564-76',
        data_de_nascimento: new Date(1234,4,6)
      },
      {
        nome: 'João Santos',
        endereco: 'Avenida Principal, 456',
        telefone: '(21) 99876-5432',
        email: 'aleiatorio@gmail.com',
        cpf: '231.431.545-65',
        data_de_nascimento: new Date(2002,4,6)
      },
      {
        nome: 'Ana Oliveira',
        endereco: 'Praça Central, 789',
        telefone: '(31) 98765-1234',
        email: 'sdwe@gmail.com',
        cpf: '214.543.675-76',
        data_de_nascimento: new Date(2314,12,6)

      }
    ])
  }
}