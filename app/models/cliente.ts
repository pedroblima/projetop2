import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Pedido from './pedido.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Venda from './venda.js'

export default class Cliente extends BaseModel {
  @column({ isPrimary: true })
  declare id: number
  @column()
  declare nome: string
  @column()
  declare endereco: string
  @column()
  declare telefone: string
  @column()
  declare email: string
  @column()
  declare cpf: string
  @column()
  declare data_de_nascimento: Date

  @hasMany(() => Pedido)
  declare pedido: HasMany<typeof Pedido>
  @hasMany(() => Venda)
  declare venda: HasMany<typeof Venda>


  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}