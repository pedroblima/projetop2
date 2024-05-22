import Produto from '#models/produto'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class ProdutoSeeder extends BaseSeeder {
  public async run() {
    await Produto.createMany([
      {
        nome: 'Caneta Azul',
        descricao: 'Caneta esferográfica azul com grip ergonômico',
        preco: 1.50,
        quantidade: '100'
      },
      {
        nome: 'Caderno Universitário',
        descricao: 'Caderno universitário 200 folhas capa dura',
        preco: 20.00,
        quantidade: '50'
      },
      {
        nome: 'Mochila Executiva',
        descricao: 'Mochila executiva em couro com compartimentos para notebook',
        preco: 150.00,
        quantidade: '30'
      }
    ])
  }
}