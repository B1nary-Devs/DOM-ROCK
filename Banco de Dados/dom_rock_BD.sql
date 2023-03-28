
/*USE Cliente;*/
CREATE TABLE Cliente(

id INT AUTO_INCREMENT PRIMARY KEY,
cpf VARCHAR(14) NOT NULL UNIQUE,
email VARCHAR(50) NOT NULL UNIQUE,
idVendedor INT);

CREATE TABLE Planejamento(
id INT AUTO_INCREMENT PRIMARY KEY,
quantidade NUMERIC(7,2) NOT NULL,
dia VARCHAR(10) NOT NULL,/*MUDAR NO CÓDIGO PARA DIA*/
idVendedor INT NOT NULL,
idProduto INT NOT NULL,
idCliente INT NOT NULL);

CREATE TABLE ProdutoModel(
idProduto INT AUTO_INCREMENT PRIMARY KEY,
nomeProduto VARCHAR(60)NOT NULL,
tipoProduto VARCHAR(15) NOT NULL,
quantidadeProduto NUMERIC(7,2) NOT NULL);

CREATE TABLE VendedorModel(
idVendedor INT AUTO_INCREMENT PRIMARY KEY,
nomeVendedor VARCHAR(50),
emailVendedor VARCHAR(50) UNIQUE,
cpfVendedor VARCHAR(14) UNIQUE,
senhaVendedor VARCHAR(250),
nivelAcees VARCHAR(15)NOT NULL);
 




