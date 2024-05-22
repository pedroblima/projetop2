import Pedido from '#models/pedido'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { DateTime } from 'luxon'

export default class PedidoSeeder extends BaseSeeder {
  public async run() {
   
    await Pedido.createMany([
      {
        clientes_id: 1, 
        dt_pedido: DateTime.now(), 
        status: 'Processando'
      },
      {
        clientes_id: 2, 
        dt_pedido: DateTime.now(), 
        status: 'Enviado'
      },
      {
        clientes_id: 3, 
        dt_pedido: DateTime.now(), 
        status: 'Entregue'
      }
    ])
  }
}
