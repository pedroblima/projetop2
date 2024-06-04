import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'pedidos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('clientes_id').unsigned().notNullable().references('id').inTable('clientes').onDelete('CASCADE').onUpdate('CASCADE')
      table.date('dt_pedido').notNullable()
      table.string('status').notNullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}