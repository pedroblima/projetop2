import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'item_pedidos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('produtos_id').unsigned().notNullable().references('id').inTable('produtos').onDelete('CASCADE').onUpdate('CASCADE')
      table.integer('pedidos_id').unsigned().notNullable().references('id').inTable('pedidos').onDelete('CASCADE').onUpdate('CASCADE')
      table.string('quantidade').notNullable()
      table.decimal('preco_unitario').notNullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}