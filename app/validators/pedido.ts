import vine from '@vinejs/vine';

export const createPedidoValidator = vine.compile(
  vine.object({
    clientes_id: vine.number(),
    dt_pedido: vine.date(),
    status: vine.string(),

  })
);

export const updatePedidoValidator = vine.compile(
  vine.object({
    clientes_id: vine.number(),
    dt_pedido: vine.date(),
    status: vine.string(),
  })
);

export const messages = {
  'clientes_id.number': 'O clientes_id deve ser inserido.',
  'dt_pedido.date': 'O dt_pedido deve ser inserido.',
  'status.string': 'o status deve ser inserido corretamente',
  
};