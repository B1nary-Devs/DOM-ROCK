create database dom_rock;

use dom_rock;

CREATE TABLE vendedor(
id_vendedor INT AUTO_INCREMENT PRIMARY KEY,
nome_vendedor VARCHAR(50),
email_vendedor VARCHAR(50) UNIQUE,
cpf_vendedor VARCHAR(14) UNIQUE,
senha_vendedor VARCHAR(250),
nivel_acesso VARCHAR(15)NOT NULL);

CREATE TABLE cliente(
id INT AUTO_INCREMENT PRIMARY KEY,
cpf VARCHAR(14) NOT NULL UNIQUE,
email VARCHAR(50) NOT NULL UNIQUE,
nome VARCHAR(70) NOT NULL,
id_vendedor INT,
foreign key(id_vendedor) references vendedor(id_vendedor));

CREATE TABLE produto(
id_produto INT AUTO_INCREMENT PRIMARY KEY,
nome_produto VARCHAR(60)NOT NULL,
tipo_produto VARCHAR(15) NOT NULL,
quantidade_produto NUMERIC(7,2) NOT NULL);


CREATE TABLE planejamento(
id INT AUTO_INCREMENT PRIMARY KEY,
quantidade NUMERIC(7,2) NOT NULL,
dia VARCHAR(10) NOT NULL,
id_vendedor INT,
id_produto INT,
id_cliente INT,
foreign key(id_vendedor) references vendedor(id_vendedor),
foreign key(id_produto) references produto(id_produto),
foreign key(id_cliente) references cliente(id));



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