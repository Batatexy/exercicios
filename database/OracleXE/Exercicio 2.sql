CREATE TABLE Clientes (
    id_cliente INTEGER NOT NULL PRIMARY KEY,
	nome VARCHAR2(255) NOT NULL,
	cpf NUMBER NOT NULL,
	endereco VARCHAR2(255) NOT NULL,
	email VARCHAR2(255),
	telefone NUMBER,
    data_nascimento DATE NOT NULL
);

INSERT INTO Clientes VALUES (1, 'João',       345220,       'Rua sla',    'sajdf983425@gmail.com', 169233424, TO_DATE('1992-09-12','YYYY-MM-DD'));
INSERT INTO Clientes VALUES (2, 'Maria Souza',324234234234, 'Rua B, 456', 'maria@email.com', 11999990002, TO_DATE('2000-02-20','YYYY-MM-DD'));
INSERT INTO Clientes VALUES (3, 'Carlos Lima',2423423432,   'Rua C, 789', 'carlos@email.com', 11999990003, TO_DATE('1987-12-30','YYYY-MM-DD'));
INSERT INTO Clientes VALUES (4, 'João Silva', 43534534534,  'Rua A, 123', 'joao@email.com', 11999990001, TO_DATE('1990-07-02','YYYY-MM-DD'));
select * from Clientes;

/***************************************************************************************************************/

CREATE TABLE Veiculos (
	id_veiculo INTEGER NOT NULL PRIMARY KEY,
    id_cliente INTEGER NOT NULL,
	modelo VARCHAR2(255) NOT NULL,
	marca VARCHAR2(255) NOT NULL,
	ano NUMBER NOT NULL,
	placa VARCHAR2(255) NOT NULL,
    cor VARCHAR2(255) NOT NULL,
    preco_locacao FLOAT NOT NULL,
    
    CONSTRAINT fk_cliente FOREIGN KEY (id_cliente) REFERENCES Clientes(id_cliente)
);

INSERT INTO Veiculos VALUES (1, 2, 'Fiesta', 'Ford', 2015, 'ABC1A23', 'Vermelho', 119.99);
INSERT INTO Veiculos VALUES (2, 3, 'Onix', 'Chevrolet', 2020, 'DEF4B56', 'Prata', 129.99);
INSERT INTO Veiculos VALUES (3, 4, 'Corolla', 'Toyota',  2018, 'GHI7C89', 'Preto', 139.99);
select * from Veiculos;

/***************************************************************************************************************/

CREATE TABLE Manutencoes (
	id_manutencao INTEGER NOT NULL PRIMARY KEY,
    id_veiculo INTEGER,
    id_funcionario INTEGER,
    id_servico INTEGER NOT NULL,
	custo FLOAT,
    CONSTRAINT fk_veiculo FOREIGN KEY (id_veiculo) REFERENCES Veiculos(id_veiculo)
);

INSERT INTO Manutencoes VALUES (1, 1, 1, 1, 130.00); 
INSERT INTO Manutencoes VALUES (2, 1, 2, 2, 85.00); 
INSERT INTO Manutencoes VALUES (3, 2, 1, 3, 510.00);
select * from Manutencoes;

/***************************************************************************************************************/

CREATE TABLE Status (
	id_status INTEGER NOT NULL PRIMARY KEY,
	id_manutencao INTEGER,
	status_servico VARCHAR2(255),
	data_atualizacao DATE,
    
    CONSTRAINT fk_manutencao FOREIGN KEY (id_manutencao) REFERENCES Manutencoes(id_manutencao)
);

INSERT INTO Status VALUES (1, 1, 'Concluído', TO_DATE('2025-04-01','YYYY-MM-DD'));
INSERT INTO Status VALUES (2, 2, 'Em andamento', TO_DATE('2025-04-02','YYYY-MM-DD'));
select * from Status;

/***************************************************************************************************************/

CREATE TABLE Servicos (
	id_servico INTEGER NOT NULL PRIMARY KEY,
	nome_servico VARCHAR2(255),
    preco_servico FLOAT
);

INSERT INTO Servicos VALUES (1, 'Troca de óleo', 120.00);
INSERT INTO Servicos VALUES (2, 'Alinhamento', 80.00);
INSERT INTO Servicos VALUES (3, 'Revisão completa', 500.00);
select * from Servicos;

/***************************************************************************************************************/

CREATE TABLE Funcionarios (
	id_funcionario INTEGER NOT NULL PRIMARY KEY,
    nome VARCHAR2(255),
	cargo VARCHAR2(255),
	telefone NUMBER
);

INSERT INTO Funcionarios VALUES (1, 'Pedro Oliveira', 'Mecânico', 11999990004);
INSERT INTO Funcionarios VALUES (2, 'Ana Costa', 'Supervisor', 11999990005);
INSERT INTO Funcionarios VALUES (3, 'Luiz Ferreira', 'Mecânico', 11999990006);
select * from Funcionarios;

/***************************************************************************************************************/

/*1 - Liste todos os clientes com seus respectivos veículos, mesmo que não possuam 
nenhum veículo cadastrado.*/
select c.nome, v.modelo from clientes c
left join veiculos v 
on c.id_cliente = v.id_cliente;

/*2 - Liste todos os veículos com as manutenções realizadas, mesmo que o veículo nunca 
tenha passado por manutenção.*/
select v.modelo, m.custo from veiculos v
left join manutencoes m 
on m.id_veiculo = v.id_veiculo;

/*3 - Exiba os dados completos das manutenções realizadas, incluindo o nome do cliente, 
modelo do veículo, nome do funcionário responsável e o custo*/
select c.nome as cliente, v.modelo, f.nome as funcionário, s.nome_servico as serviço, m.custo from Manutencoes m
join Veiculos v on m.id_veiculo = v.id_veiculo
join Clientes c on v.id_cliente = c.id_cliente
join Funcionarios f on m.id_funcionario = f.id_funcionario
join Servicos s on s.id_servico = m.id_servico;

/*4 - Liste os nomes dos funcionários que nunca participaram de nenhuma manutenção*/
select f.nome from Funcionarios f
left join Manutencoes m on m.id_funcionario = f.id_funcionario
where m.id_manutencao IS NULL;

/*5 - Exiba todas as manutenções, mostrando também o status atual (se existir) e a data
da última atualização do status*/
select m.*, s.status_servico, s.data_atualizacao from Manutencoes m
left join Status s on s.id_manutencao = m.id_manutencao;

/*6 - Liste todos os clientes que não possuem nenhum veículo vinculado ao seu cadastro*/
select c.* from Clientes c
left join Veiculos v on v.id_cliente = c.id_cliente
where v.id_veiculo IS NULL;

/*7 - Liste os serviços realizados em veículos pertencentes ao cliente "João Silva"*/
select s.* from Manutencoes m
join Servicos s on m.id_servico = s.id_servico
join Veiculos v on m.id_veiculo = v.id_veiculo
join Clientes c on v.id_cliente = c.id_cliente
where c.nome = 'João Silva'; /*Veiculo de João Silva não teve manutenções*/

/*8 - Exiba o total de manutenções realizadas por cada funcionário, incluindo aqueles 
que nunca realizaram nenhuma*/
select f.* from Funcionarios f
left join Manutencoes m on m.id_funcionario = f.id_funcionario;

/*9 - Liste os veículos que já passaram por manutenção, mas que ainda não possuem 
nenhum status registrado*/
select v.* from Veiculos v
left join Manutencoes m on m.id_veiculo = v.id_veiculo
left join Status s on m.id_manutencao = s.id_manutencao;

/*10 - Exiba os nomes dos clientes, seus veículos e os serviços realizados, apenas 
para os casos em que houve manutenção*/
select c.nome, v.modelo, s.nome_servico from Manutencoes m
join Veiculos v on v.id_veiculo = m.id_veiculo
join Clientes c on v.id_cliente = c.id_cliente
join Servicos s on s.id_servico = m.id_servico;

















CREATE TABLE Locacao (
    id_locacao INTEGER NOT NULL PRIMARY KEY,
    id_cliente INTEGER NOT NULL,
	data_inicio NUMBER NOT NULL,
    data_termino NUMBER NOT NULL,
    valor_total FLOAT NOT NULL,
    status VARCHAR2(255)NOT NULL,
    CONSTRAINT fk_cliente FOREIGN KEY (id_cliente) REFERENCES Clientes(id_cliente)
);
