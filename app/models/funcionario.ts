import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

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

  @column.dateTime({ autoCreate: true })
  declare dt_contratacao: DateTime


  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}