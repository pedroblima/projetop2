import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Cliente from './cliente.js'
import ItemPedido from './item_pedido.js'

export default class Pedido extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare clientes_id: number

  @belongsTo(() => Cliente)
  declare cliente: BelongsTo<typeof Cliente>

  @column()
  declare dt_pedido: Date

  @column()
  declare status: string

  @hasMany(() => ItemPedido)
  declare itemPedido: HasMany<typeof ItemPedido>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}