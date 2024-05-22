import Venda from '#models/venda'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class VendaSeeder extends BaseSeeder {
  public async run() {
  
    await Venda.createMany([
      {
        clientes_id: 1, 
        funcionarios_id: 1,
        dt_vendas: new Date(2024, 4, 14), 
        total_valor: 500.00 
      },
      {
        clientes_id: 2, 
        funcionarios_id: 2, 
        dt_vendas: new Date(2024, 4, 15), 
        total_valor: 1200.00 
      },
      {
        clientes_id: 3, 
        funcionarios_id: 3, 
        dt_vendas: new Date(2024, 4, 16), 
        total_valor: 300.00 
      }
    ])
  }
}