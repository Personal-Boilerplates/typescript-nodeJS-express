CREATE TABLE estados (
  id SERIAL PRIMARY KEY,
  codigoIbge CHAR(2) NOT NULL,
  nome VARCHAR(50) NOT NULL,
  uf CHAR(2) NOT NULL,
  regiaoId INT NOT NULL REFERENCES regioes(id)
);

INSERT INTO estados (codigoIbge, nome, uf, regiaoId) VALUES ('12', 'Acre', 'AC', 1);
INSERT INTO estados (codigoIbge, nome, uf, regiaoId) VALUES ('27', 'Alagoas', 'AL', 2);
INSERT INTO estados (codigoIbge, nome, uf, regiaoId) VALUES ('16', 'Amapá', 'AP', 1);
INSERT INTO estados (codigoIbge, nome, uf, regiaoId) VALUES ('13', 'Amazonas', 'AM', 1);
INSERT INTO estados (codigoIbge, nome, uf, regiaoId) VALUES ('29', 'Bahia', 'BA', 2);
INSERT INTO estados (codigoIbge, nome, uf, regiaoId) VALUES ('23', 'Ceará', 'CE', 2);
INSERT INTO estados (codigoIbge, nome, uf, regiaoId) VALUES ('53', 'Distrito Federal', 'DF', 5);
INSERT INTO estados (codigoIbge, nome, uf, regiaoId) VALUES ('32', 'Espírito Santo', 'ES', 3);
INSERT INTO estados (codigoIbge, nome, uf, regiaoId) VALUES ('52', 'Goiás', 'GO', 5);
INSERT INTO estados (codigoIbge, nome, uf, regiaoId) VALUES ('21', 'Maranhão', 'MA', 2);
INSERT INTO estados (codigoIbge, nome, uf, regiaoId) VALUES ('51', 'Mato Grosso', 'MT', 5);
INSERT INTO estados (codigoIbge, nome, uf, regiaoId) VALUES ('50', 'Mato Grosso do Sul', 'MS', 5);
INSERT INTO estados (codigoIbge, nome, uf, regiaoId) VALUES ('31', 'Minas Gerais', 'MG', 3);
INSERT INTO estados (codigoIbge, nome, uf, regiaoId) VALUES ('15', 'Pará', 'PA', 1);
INSERT INTO estados (codigoIbge, nome, uf, regiaoId) VALUES ('25', 'Paraíba', 'PB', 2);
INSERT INTO estados (codigoIbge, nome, uf, regiaoId) VALUES ('41', 'Paraná', 'PR', 4);
INSERT INTO estados (codigoIbge, nome, uf, regiaoId) VALUES ('26', 'Pernambuco', 'PE', 2);
INSERT INTO estados (codigoIbge, nome, uf, regiaoId) VALUES ('22', 'Piauí', 'PI', 2);
INSERT INTO estados (codigoIbge, nome, uf, regiaoId) VALUES ('33', 'Rio de Janeiro', 'RJ', 3);
INSERT INTO estados (codigoIbge, nome, uf, regiaoId) VALUES ('24', 'Rio Grande do Norte', 'RN', 2);
INSERT INTO estados (codigoIbge, nome, uf, regiaoId) VALUES ('43', 'Rio Grande do Sul', 'RS', 4);
INSERT INTO estados (codigoIbge, nome, uf, regiaoId) VALUES ('11', 'Rondônia', 'RO', 1);
INSERT INTO estados (codigoIbge, nome, uf, regiaoId) VALUES ('14', 'Roraima', 'RR', 1);
INSERT INTO estados (codigoIbge, nome, uf, regiaoId) VALUES ('42', 'Santa Catarina', 'SC', 4);
INSERT INTO estados (codigoIbge, nome, uf, regiaoId) VALUES ('35', 'São Paulo', 'SP', 3);
INSERT INTO estados (codigoIbge, nome, uf, regiaoId) VALUES ('28', 'Sergipe', 'SE', 2);
INSERT INTO estados (codigoIbge, nome, uf, regiaoId) VALUES ('17', 'Tocantins', 'TO', 1);