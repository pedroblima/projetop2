import vine from '@vinejs/vine';

export const createFornecedorValidator = vine.compile(
  vine.object({
    nome: vine.string(),
    email: vine.string(),
    cnpj: vine.string(),
    telefone: vine.string(),
    endereco: vine.string(),
  })
);

export const updateFornecedorValidator = vine.compile(
  vine.object({
    nome: vine.string(),
    email: vine.string(),
    cnpj: vine.string(),
    telefone: vine.string(),
    endereco: vine.string(),
  })
);

export const messages = {
  'nome.string': 'O nome da atividade deve ser inserido.',
  'email.string': 'O email deve ser inserido.',
  'telefone.string': 'a telefone deve ser inserido corretamente',
  'cnpj.string': 'o cnpj deve ser inserido corretamente',
  'endereco.string': 'o endereco deve ser inserido corretamento'
};