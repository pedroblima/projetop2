import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Cliente from './cliente.js'

export default class Pedido extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare clientes_id: number

  @belongsTo(() => Cliente, {
    foreignKey: 'clientes_id', 
  })
  declare cliente: BelongsTo<typeof Cliente>


  @column.dateTime()
  declare dt_pedido: DateTime

  @column()
  declare status: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}