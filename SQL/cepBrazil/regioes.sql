CREATE TABLE regioes (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(50) NOT NULL
);

INSERT INTO regioes (nome) VALUES ('Norte');
INSERT INTO regioes (nome) VALUES ('Nordeste');
INSERT INTO regioes (nome) VALUES ('Sudeste');
INSERT INTO regioes (nome) VALUES ('Sul');
INSERT INTO regioes (nome) VALUES ('Centro-Oeste');