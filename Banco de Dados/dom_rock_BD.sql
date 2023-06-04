CREATE DATABASE dom_rock;
use dom_rock;

CREATE TABLE administrador(
id INT AUTO_INCREMENT PRIMARY KEY,
email VARCHAR(50) UNIQUE,
password VARCHAR(250) NOT NULL,
nivel_acesso VARCHAR(15) NOT NULL);

CREATE TABLE vendedor(
id INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(50),
email VARCHAR(50) UNIQUE,
nivel_acesso VARCHAR(15) NOT NULL,
password VARCHAR(250)NOT NULL,
fk_id_administrador INT,
FOREIGN KEY(fk_id_administrador) REFERENCES administrador(id));


CREATE TABLE cliente(
id INT AUTO_INCREMENT PRIMARY KEY,
email VARCHAR(50) NOT NULL UNIQUE,
nome VARCHAR(70) NOT NULL,
fk_id_vendedor INT,
fk_id_administrador INT,
FOREIGN KEY(fk_id_vendedor) REFERENCES vendedor(id),
FOREIGN KEY(fk_id_administrador) REFERENCES administrador(id));

CREATE TABLE produto(
id INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(60)NOT NULL,
tipo VARCHAR(15) NOT NULL);

CREATE TABLE registro(
id INT AUTO_INCREMENT PRIMARY KEY,
dia_registro DATE NOT NULL,
fk_id_vendedor INT,
fk_id_produto INT,
fk_id_cliente INT,
FOREIGN KEY(fk_id_vendedor) REFERENCES vendedor(id),
FOREIGN KEY(fk_id_produto) REFERENCES produto(id),
FOREIGN KEY(fk_id_cliente) REFERENCES cliente(id));

CREATE TABLE planejamento(
id INT AUTO_INCREMENT PRIMARY KEY,
quantidade DOUBLE NOT NULL,
dia DATE NOT NULL,
mes DATE NOT NULL,
fk_id_registro INT,
FOREIGN KEY(fk_id_registro) REFERENCES registro(id));

CREATE TABLE historico(
id INT AUTO_INCREMENT PRIMARY KEY,
quantidade DOUBLE NOT NULL,
dia DATE NOT NULL,
mes DATE NOT NULL,
fk_id_registro INT,
FOREIGN KEY(fk_id_registro) REFERENCES registro(id));

CREATE TABLE predicao(
id INT AUTO_INCREMENT PRIMARY KEY,
quantidade DOUBLE NOT NULL,
dia DATE NOT NULL,
mes DATE NOT NULL,
fk_id_registro INT,
FOREIGN KEY(fk_id_registro) REFERENCES registro(id));

/*ADMINISTRADOR*/
<<<<<<< HEAD
insert into administrador(id, email, password, nivel_acesso) values (1, 'carlosadm@gmail.com', '12345', 'administrador');
=======
insert into administrador(id, email, password, nivelAcesso) values (1, 'carlosadm@gmail.com', '12345', 'administrador');
>>>>>>> 7ca7a493035be91548fa6ec65a1f190d79433299

/*PRODUTOS*/
insert into produto(id, nome, tipo) values (1, 'chapa de aço', 'unidade');
insert into produto(id, nome, tipo) values (2, 'fio de aço', 'metros');
insert into produto(id, nome, tipo) values (3, 'barra de aço', 'unidade');
insert into produto(id, nome, tipo) values (4, 'malha de aço', 'unidade');

/*VENDEDORES*/
<<<<<<< HEAD
insert into vendedor(id, email, nivel_acesso, nome, password, fk_id_administrador) values (1, 'carlos@gmail.com', 'vendedor', 'carlos', '12345', 1);
insert into vendedor(id, email, nivel_acesso, nome, password, fk_id_administrador) values (2, 'wallace@gmail.com', 'vendedor', 'wallace', '54321', 1);
insert into vendedor(id, email, nivel_acesso, nome, password, fk_id_administrador) values (3, 'larissa@gmail.com', 'vendedor', 'larissa', '223344', 1);
insert into vendedor(id, email, nivel_acesso, nome, password, fk_id_administrador) values (4, 'davi@gmail.com', 'vendedor', 'davi', '55566777', 1);
insert into vendedor(id, email, nivel_acesso, nome, password, fk_id_administrador) values (5, 'marcelo@gmail.com', 'vendedor', 'marcelo', '7778899', 1);
=======
insert into vendedor(id, email, nivel_acesso, nome, password) values (1, 'carlos@gmail.com', 'vendedor', 'carlos', '12345');
insert into vendedor(id, email, nivel_acesso, nome, password) values (2, 'wallace@gmail.com', 'vendedor', 'wallace', '54321');
insert into vendedor(id, email, nivel_acesso, nome, password) values (3, 'larissa@gmail.com', 'vendedor', 'larissa', '223344');
insert into vendedor(id, email, nivel_acesso, nome, password) values (4, 'davi@gmail.com', 'vendedor', 'davi', '55566777');
insert into vendedor(id, email, nivel_acesso, nome, password) values (5, 'marcelo@gmail.com', 'vendedor', 'marcelo', '7778899');
>>>>>>> 7ca7a493035be91548fa6ec65a1f190d79433299

/*CLIENTES*/
insert into cliente(id, email, nome, fk_id_vendedor, fk_id_administrador) values (1, 'brasileng@gmail.com', 'mais brasil engenharia', 1, 1);
insert into cliente(id, email, nome, fk_id_vendedor, fk_id_administrador) values (2, 'silvaemelo@gmail.com', 'silva e melo', 1, 1);
insert into cliente(id, email, nome, fk_id_vendedor, fk_id_administrador) values (3, 'toniato@gmail.com', 'toniato industrial', 1, 1);
insert into cliente(id, email, nome, fk_id_vendedor, fk_id_administrador) values (4, 'sayder@gmail.com', 'sayder produtos', 2, 1);

/*REGISTRO*/
insert into registro(id, dia_registro, fk_id_produto, fk_id_vendedor, fk_id_cliente) values (1, '2023-05-10', 1, 1, 1);
insert into registro(id, dia_registro, fk_id_produto, fk_id_vendedor, fk_id_cliente) values (2, '2023-05-10', 2, 1, 2);

/*PLANEJAMENTOS*/
insert into planejamento(id, quantidade, dia, mes, fk_id_registro) values (1, 300, '2023-05-10', '2023-05-10', 1);
insert into planejamento(id, quantidade, dia, mes, fk_id_registro) values (2, 500, '2023-05-11', '2023-05-11', 2);

/*HISTÓRICO*/
insert into historico(id, quantidade, dia, mes, fk_id_registro) values (1, 300, '2023-05-10', '2023-05-10', 1);
insert into historico(id, quantidade, dia, mes, fk_id_registro) values (2, 500, '2023-05-11', '2023-05-11', 2);

/*PREDIÇÕES*/
insert into predicao(id, quantidade, dia, mes, fk_id_registro) values (1, 300, '2023-05-10', '2023-05-10', 1);
insert into predicao(id, quantidade, dia, mes, fk_id_registro) values (2, 500, '2023-05-11', '2023-05-11', 2);




