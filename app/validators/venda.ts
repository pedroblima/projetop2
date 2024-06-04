import vine from '@vinejs/vine';

export const createVendaValidator = vine.compile(
  vine.object({
    clientes_id: vine.number(),
    funcionarios_id: vine.number(),
    dt_vendas: vine.date(),
    total_valor: vine.number()

  })
);

export const updateVendaValidator = vine.compile(
  vine.object({
    clientes_id: vine.number(),
    funcionarios_id: vine.number(),
    dt_vendas: vine.date(),
    total_valor: vine.number()
  })
);

export const messages = {
  'clientes_id.number': 'O clientes_id deve ser inserido.',
  'funcionarios_id.number': 'O funcionarios_id deve ser inserido.',
  'dt_vendas.date': 'o dt_vendas deve ser inserido corretamente',
  'total_valor.number': 'o total_valor deve ser inserida corretamente'
  
};