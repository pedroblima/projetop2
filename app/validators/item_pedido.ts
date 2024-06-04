import vine from '@vinejs/vine';

export const createItemPedidoValidator = vine.compile(
  vine.object({
    produtos_id: vine.number(),
    pedidos_id: vine.number(),
    quantidade: vine.string(),
    preco_unitario: vine.number(),
  })
);

export const updateItemPedidoValidator = vine.compile(
  vine.object({
    produtos_id: vine.number(),
    pedidos_id: vine.number(),
    quantidade: vine.string(),
    preco_unitario: vine.number(),
  })
);

export const messages = {
  'produtos_id.string': 'O produtos_id deve ser inserido.',
  'pedidos_id.string': 'O pedidos_id deve ser inserido.',
  'quantidade.string': 'o quantidade deve ser inserido corretamente',
  'preco_unitario.string': 'o preco_unitario deve ser inserido corretamente'
};