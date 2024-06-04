import vine from '@vinejs/vine';

export const createClienteValidator = vine.compile(
  vine.object({
    nome: vine.string(),
    email: vine.string(),
    cpf: vine.string(),
    data_de_nascimento: vine.date()
  })
);

export const updateClienteValidator = vine.compile(
  vine.object({
    nome: vine.string(),
    email: vine.string(),
    cpf: vine.string(),
    data_de_nascimento: vine.date()
  })
);

export const messages = {
  'nome.string': 'O nome da atividade deve ser inserido.',
  'email.string': 'O email deve ser inserido.',
  'data_de_nascimento.string': 'a data de nascimento deve ser inserido corretamente',
  'cpf.string': 'o cpf deve ser inserido corretamente'
};