import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Venda from './venda.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'


export default class Funcionario extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: String

  @column()
  declare cpf: string
  
  @column()
  declare cargo: String

  @column()
  declare salario: Number

    
  @hasMany(() => Venda)
  declare venda: HasMany<typeof Venda>

  @column.dateTime({ autoCreate: true })
  declare dt_contratacao: DateTime


  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}