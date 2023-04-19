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


/*
insert into vendedor(id_vendedor, nome_vendedor, email_vendedor, cpf_vendedor, senha_vendedor, nivel_acesso) values (1, 'Wallace','wallace@domrock.com', '858.444.999-00', 'bolinho123', 'vendedor');
insert into vendedor(id_vendedor, nome_vendedor, email_vendedor, cpf_vendedor, senha_vendedor, nivel_acesso) values (2, 'Carlos','carlos@domrock.com', '818.454.525-52', 'fuba123', 'vendedor');
insert into vendedor(id_vendedor, nome_vendedor, email_vendedor, cpf_vendedor, senha_vendedor, nivel_acesso) values (3, 'Larissa','larissa@domrock.com', '258.354.419-90', 'pamonha123', 'vendedor');

insert into cliente(id, cpf, email, id_vendedor, nome) values (1 ,'444.123.666-77', 'David@gmail.com', 1, 'David');
insert into cliente(id, cpf, email, id_vendedor, nome) values (2 ,'888.777.666-88', 'Ruan@gmail.com', 2, 'Ruan');
insert into cliente(id, cpf, email, id_vendedor, nome) values (3 ,'111.999.888-55', 'Marcos@gmail.com', 3, 'Marcos');

insert into produto(id_produto, nome_produto, tipo_produto, quantidade_produto) values (1, 'Chapa de aço','unidade', 500.00);

insert into produto(id_produto, nome_produto, tipo_produto, quantidade_produto) values (2, 'Barra de aço','unidade', 700.00);
insert into produto(id_produto, nome_produto, tipo_produto, quantidade_produto) values (3, 'Fio de aço','metro', 10.00);


insert into planejamento(id, quantidade, dia, id_vendedor, id_produto, id_cliente) values (1, '50.00','10/06/2023', 1, 1, 1);
insert into planejamento(id, quantidade, dia, id_vendedor, id_produto, id_cliente) values (2, '99.00','20/06/2023', 2, 2, 2);
insert into planejamento(id, quantidade, dia, id_vendedor, id_produto, id_cliente) values (3, '100.00','30/07/2023', 3, 3, 3);