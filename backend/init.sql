CREATE TABLE usuarios (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  senha VARCHAR(250),
  perfil VARCHAR(100)
);

CREATE TABLE atracoes (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100),
  ativa BOOLEAN
);

CREATE TABLE checklist (
  id SERIAL PRIMARY KEY,
  usuario_id INTEGER REFERENCES usuarios(id),
  atracao_id INTEGER REFERENCES atracoes(id),
  data_hora timestamp,
  observacoes text
);

CREATE TABLE perguntas (
  id SERIAL PRIMARY KEY,
  atracao_id INTEGER REFERENCES atracoes(id),
  pergunta VARCHAR(100)
);


CREATE TABLE itens_checklist(
  id SERIAL PRIMARY KEY,
  checklist_id INTEGER REFERENCES checklist(id),
  pergunta_id INTEGER REFERENCES perguntas(id),
  conforme BOOLEAN
);


