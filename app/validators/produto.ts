import vine from '@vinejs/vine';

export const createProdutoValidator = vine.compile(
  vine.object({
    nome: vine.string(),
    descricao: vine.string(),
    preco: vine.number(),
    quantidade: vine.string()

  })
);

export const updateProdutoValidator = vine.compile(
  vine.object({
    nome: vine.string(),
    descricao: vine.string(),
    preco: vine.number(),
    quantidade: vine.string()
  })
);

export const messages = {
  'nome.string': 'O nome deve ser inserido.',
  'descricao.string': 'O descricao deve ser inserido.',
  'preco.string': 'o preco deve ser inserido corretamente',
  'quantidade.string': 'o quantidade deve ser inserida corretamente'
  
};