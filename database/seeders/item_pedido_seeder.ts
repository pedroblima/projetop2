import ItemPedido from '#models/item_pedido'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class ItemPedidoSeeder extends BaseSeeder {
  public async run() {
    await ItemPedido.createMany([
      {
        produtos_id: 1, 
        pedidos_id: 1, 
        quantidade: '2',
        preco_unitario: 50.00
      },
      {
        produtos_id: 2, 
        pedidos_id: 1, 
        quantidade: '1',
        preco_unitario: 20.00
      },
      {
        produtos_id: 3, 
        pedidos_id: 2, 
        quantidade: '3',
        preco_unitario: 150.00
      }
    ])
  }
}