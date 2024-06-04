import vine from '@vinejs/vine';

export const createFuncionarioValidator = vine.compile(
  vine.object({
    nome: vine.string(),
    cpf: vine.string(),
    cargo: vine.string(),
    salario: vine.number(),
  })
);

export const updateFuncionarioValidator = vine.compile(
  vine.object({
    nome: vine.string(),
    cpf: vine.string(),
    cargo: vine.string(),
    salario: vine.number(),
  })
);

export const messages = {
  'nome.string': 'O nome da atividade deve ser inserido.',
  'cargo.string': 'O cargo deve ser inserido.',
  'salario.string': 'o salario deve ser inserido corretamente',
  'cpf.string': 'o cpf deve ser inserido corretamente',
  'dt_contratacao': 'o data deve ser inserida corretamente'
};