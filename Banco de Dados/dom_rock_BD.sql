CREATE DATABASE dom_rock;

CREATE TABLE vendedor(
id INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(50),
email VARCHAR(50) UNIQUE,
nivelAcesso VARCHAR(15) NOT NULL,
senha VARCHAR(250)NOT NULL);


CREATE TABLE cliente(
id INT AUTO_INCREMENT PRIMARY KEY,
email VARCHAR(50) NOT NULL UNIQUE,
nome VARCHAR(70) NOT NULL,
id_vendedor INT,
FOREIGN KEY(id_vendedor) REFERENCES vendedor(id));

CREATE TABLE produto(
id INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(60)NOT NULL,
tipo VARCHAR(15) NOT NULL);


CREATE TABLE planejamento(
id INT AUTO_INCREMENT PRIMARY KEY,
dia VARCHAR(10) NOT NULL,
id_vendedor INT,
id_produto INT,
id_cliente INT,
FOREIGN KEY(id_vendedor) REFERENCES vendedor(id),
FOREIGN KEY(id_produto) REFERENCES produto(id),
FOREIGN KEY(id_cliente) REFERENCES cliente(id));

CREATE TABLE historico(
id INT AUTO_INCREMENT PRIMARY KEY,
faturamentoReal VARCHAR(30) NOT NULL,
id_vendedor INT,
FOREIGN KEY(id_vendedor) REFERENCES vendedor(id));

CREATE TABLE registro_planejamento(
id INT AUTO_INCREMENT PRIMARY KEY,
quantidade DOUBLE NOT NULL,
diaRegistro VARCHAR(11),
mesPlanejamento VARCHAR(11),
id_planejamento INT,
FOREIGN KEY(id_planejamento) REFERENCES planejamento(id));

/*PRODUTOS*/
insert into produto(id, nome, tipo) values (1, 'chapa de aço', 'unidade');
insert into produto(id, nome, tipo) values (2, 'fio de aço', 'metros');
insert into produto(id, nome, tipo) values (3, 'barra de aço', 'unidade');
insert into produto(id, nome, tipo) values (4, 'malha de aço', 'unidade');

/*VENDEDORES*/
insert into vendedor(id, email, nivel_acesso, nome, senha) values (1, 'carlos@gmail.com', 'vendedor', 'carlos', '12345');
insert into vendedor(id, email, nivel_acesso, nome, senha) values (2, 'wallace@gmail.com', 'vendedor', 'wallace', '54321');
insert into vendedor(id, email, nivel_acesso, nome, senha) values (3, 'larissa@gmail.com', 'vendedor', 'larissa', '223344');
insert into vendedor(id, email, nivel_acesso, nome, senha) values (4, 'davi@gmail.com', 'vendedor', 'davi', '55566777');
insert into vendedor(id, email, nivel_acesso, nome, senha) values (5, 'marcelo@gmail.com', 'vendedor', 'marcelo', '7778899');

/*CLIENTES*/
insert into cliente(id, email, nome, fk_id_vendedor) values (1, 'brasileng@gmail.com', 'mais brasil engenharia', 1);
insert into cliente(id, email, nome, fk_id_vendedor) values (2, 'silvaemelo@gmail.com', 'silva e melo', 1);
insert into cliente(id, email, nome, fk_id_vendedor) values (3, 'toniato@gmail.com', 'toniato industrial', 1);
insert into cliente(id, email, nome, fk_id_vendedor) values (4, 'sayder@gmail.com', 'sayder produtos', 2);

/*PLANEJAMENTOS*/
insert into planejamento(id, fk_id_cliente, fk_id_produto, fk_id_vendedor) values (2, 1, 1, 1);
insert into planejamento(id, fk_id_cliente, fk_id_produto, fk_id_vendedor) values (3, 3, 2, 3);
insert into planejamento(id, fk_id_cliente, fk_id_produto, fk_id_vendedor) values (4, 1, 1, 1);
insert into planejamento(id, fk_id_cliente, fk_id_produto, fk_id_vendedor) values (5, 2, 2, 2);





