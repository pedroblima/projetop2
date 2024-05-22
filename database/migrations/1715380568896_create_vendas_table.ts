import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'vendas'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('clientes_id').unsigned().notNullable().references('id').inTable('clientes').onDelete('CASCADE').onUpdate('CASCADE')
      table.integer('funcionarios_id').unsigned().notNullable().references('id').inTable('funcionarios').onDelete('CASCADE').onUpdate('CASCADE')
      table.dateTime('dt_vendas').notNullable()
      table.decimal('total_valor').notNullable()
      
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}