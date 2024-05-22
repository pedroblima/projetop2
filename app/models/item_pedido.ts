import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Produto from './produto.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Pedido from './pedido.js'

export default class ItemPedido extends BaseModel {
  @column({ isPrimary: true })
  declare id: number
  
  @column()
  declare produtos_id: number

  @column()
  declare pedidos_id: number

  @belongsTo(() => Produto, {
    foreignKey: 'produtos_id',
  })
  declare produto: BelongsTo<typeof Produto>

  @belongsTo(() => Pedido, {
    foreignKey: 'pedidos_id', 
  })
  declare pedido: BelongsTo<typeof Pedido>

  @column()
  declare quantidade: string

  @column()
  declare preco_unitario: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}