create database dom_rock;
CREATE TABLE cliente(

id INT AUTO_INCREMENT PRIMARY KEY,
cpf VARCHAR(14) NOT NULL UNIQUE,
email VARCHAR(50) NOT NULL UNIQUE,
id_vendedor INT);

CREATE TABLE planejamento(
id INT AUTO_INCREMENT PRIMARY KEY,
quantidade NUMERIC(7,2) NOT NULL,
dia VARCHAR(10) NOT NULL,/*MUDAR NO CÓDIGO PARA DIA*/
id_vendedor INT NOT NULL,
id_produto INT NOT NULL,
id_cliente INT NOT NULL);

CREATE TABLE produto(
id_roduto INT AUTO_INCREMENT PRIMARY KEY,
nome_produto VARCHAR(60)NOT NULL,
tipo_produto VARCHAR(15) NOT NULL,
quantidade_produto NUMERIC(7,2) NOT NULL);

CREATE TABLE vendedor(
id_vendedor INT AUTO_INCREMENT PRIMARY KEY,
nome_vendedor VARCHAR(50),
email_vendedor VARCHAR(50) UNIQUE,
cpf_vendedor VARCHAR(14) UNIQUE,
senha_vendedor VARCHAR(250),
nivel_acees VARCHAR(15)NOT NULL);


insert into cliente(cpf, email, id_vendedor) values ('444.555.666-77','cliente1@gmail.com', 1);
insert into cliente(cpf, email, id_vendedor) values ('888.777.666-88','cliente2@gmail.com', 2);
insert into cliente(cpf, email, id_vendedor) values ('111.999.888-55','cliente3@gmail.com', 3);

insert into planejamento(quantidade, dia, id_vendedor, id_produto, id_cliente) values ('50.00','10/06/2023', 1, 1, 1);
insert into planejamento(quantidade, dia, id_vendedor, id_produto, id_cliente) values ('99.00','20/06/2023', 2, 2, 2);
insert into planejamento(quantidade, dia, id_vendedor, id_produto, id_cliente) values ('100.00','30/07/2023', 3, 3, 3);


insert into produto(nome_produto, tipo_produto, quantidade_produto) values ('chapa de aço','metro', 500.00);
insert into produto(nome_produto, tipo_produto, quantidade_produto) values ('tubo de aço','metro', 700.00);
insert into produto(nome_produto, tipo_produto, quantidade_produto) values ('pincel aço','unidade', 10.00);

insert into vendedor(nome_vendedor, email_vendedor, cpf_vendedor, senha_vendedor, nivel_acesso) values ('wallace','wallace@gmail.com', '858.444.999-00', 'bolinho123', 'vendedor');
insert into vendedor(nome_vendedor, email_vendedor, cpf_vendedor, senha_vendedor, nivel_acesso) values ('davi','davi@gmail.com', '818.454.525-52', 'fuba123', 'vendedor');
insert into vendedor(nome_vendedor, email_vendedor, cpf_vendedor, senha_vendedor, nivel_acesso) values ('fernando','fernando@gmail.com', '258.354.419-90', 'pamonha123', 'vendedor');