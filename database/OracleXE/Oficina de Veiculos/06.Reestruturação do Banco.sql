CREATE TABLE Ordem_Servico (
	id_ordem_servico INTEGER NOT NULL PRIMARY KEY,
    id_veiculo INTEGER,
    id_funcionario INTEGER,
    id_cliente INTEGER,
    id_status INTEGER,
	custo FLOAT,
    CONSTRAINT fk_veiculo_ordem_servico FOREIGN KEY (id_veiculo) REFERENCES Veiculos(id_veiculo),
    CONSTRAINT fk_funcionario_ordem_servico FOREIGN KEY (id_funcionario) REFERENCES Funcionarios(id_funcionario),
    
    CONSTRAINT fk_cliente_ordem_servico FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente),
    CONSTRAINT fk_status_ordem_servico FOREIGN KEY (id_status) REFERENCES status(id_status)
);

INSERT INTO Ordem_Servico VALUES (1, 1, 1, 1, 1, 130.00); 
INSERT INTO Ordem_Servico VALUES (2, 2, 2, 2, 2, 85.00); 
INSERT INTO Ordem_Servico VALUES (3, 3, 1, 3, 3, 510.00);

/***************************************************************************************************************/

CREATE TABLE Servicos (
	id_servico INTEGER NOT NULL PRIMARY KEY,
    id_ordem_servico INTEGER,
    id_veiculo INTEGER,
    id_funcionario INTEGER,
    id_cliente INTEGER,
    id_status INTEGER,
    id_tipo_servico INTEGER,
    preco FLOAT,
    
    CONSTRAINT fk_ordem_servico_servicos FOREIGN KEY (id_ordem_servico) REFERENCES Ordem_Servico(id_ordem_servico),
    
    CONSTRAINT fk_veiculo_servicos FOREIGN KEY (id_veiculo) REFERENCES Veiculos(id_veiculo),
    CONSTRAINT fk_funcionario_servicos FOREIGN KEY (id_funcionario) REFERENCES Funcionarios(id_funcionario),
    
    CONSTRAINT fk_cliente_servicos FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente),
    CONSTRAINT fk_status_servicos FOREIGN KEY (id_status) REFERENCES status(id_status),
    
    CONSTRAINT fk_tipo_servicos FOREIGN KEY (id_tipo_servico) REFERENCES Tipo(id_tipo_servico)
);

/***************************************************************************************************************/

INSERT INTO Servicos VALUES (1, 1, 1, 1, 1, 1, 1, 130.00);
INSERT INTO Servicos VALUES (2, 2, 2, 2, 2, 2, 2, 85.00);
INSERT INTO Servicos VALUES (3, 2, 2, 2, 2, 1, 3, 40.00);
INSERT INTO Servicos VALUES (4, 3, 3, 1, 3, 3, 4, 510.00);

/***************************************************************************************************************/

CREATE TABLE Tipo (
	id_tipo_servico INTEGER NOT NULL PRIMARY KEY,
    descricao VARCHAR2(255)
)

INSERT INTO Tipo VALUES (1, 'Troca de óleo');
INSERT INTO Tipo VALUES (2, 'Alinhamento');
INSERT INTO Tipo VALUES (3, 'Cabo de vela');
INSERT INTO Tipo VALUES (4, 'Revisão completa');

/***************************************************************************************************************/
/*Função*/
INSERT INTO Funcao VALUES (1, 'Diagnósticar falhas mecânicas');
INSERT INTO Funcao VALUES (2, 'Reparar falhas mecânicas');
INSERT INTO Funcao VALUES (3, 'Gestão dos serviços em andamento');
INSERT INTO Funcao VALUES (4, 'Receber clientes e registrar ordens de serviço');

/***************************************************************************************************************/

CREATE TABLE Funcionarios (
	id_funcionario INTEGER NOT NULL PRIMARY KEY,
    id_funcao INTEGER,
    nome VARCHAR2(255),
	cargo VARCHAR2(255),
	telefone NUMBER,
    
    CONSTRAINT fk_funcao_funcionarios FOREIGN KEY (id_funcao) REFERENCES funcao(id_funcao)
);

INSERT INTO Funcionarios VALUES (1, 1, 'Pedro Oliveira', 'Mecânico', 11999990004);
INSERT INTO Funcionarios VALUES (2, 3, 'Ana Costa', 'Supervisor', 11999990005);
INSERT INTO Funcionarios VALUES (3, 2, 'Luiz Ferreira', 'Mecânico', 11999990006);
INSERT INTO Funcionarios VALUES (4, 4, 'Aldair Machado', 'Atendente', 11999990007);

/***************************************************************************************************************/

CREATE TABLE Pecas_Servico (
    id_servico INTEGER NOT NULL,
	id_peca INTEGER NOT NULL,
	
    CONSTRAINT fk_sevicos_pecas_servico FOREIGN KEY (id_servico) REFERENCES Servicos(id_servico),
    CONSTRAINT fk_pecas_pecas_servico FOREIGN KEY (id_peca) REFERENCES Pecas(id_peca)
);

BEGIN
    INSERT INTO Pecas_Servico VALUES (1, 2);
    INSERT INTO Pecas_Servico VALUES (1, 10);
    INSERT INTO Pecas_Servico VALUES (2, 7);
    INSERT INTO Pecas_Servico VALUES (2, 4);
    INSERT INTO Pecas_Servico VALUES (2, 2);
    INSERT INTO Pecas_Servico VALUES (3, 1);
    INSERT INTO Pecas_Servico VALUES (3, 5);
    INSERT INTO Pecas_Servico VALUES (3, 6);
    INSERT INTO Pecas_Servico VALUES (3, 9);
COMMIT;
END;

/***************************************************************************************************************/

/*Status*/
INSERT INTO Status VALUES (1, 'Pendente');
INSERT INTO Status VALUES (2, 'Em andamento');
INSERT INTO Status VALUES (3, 'Executado');
INSERT INTO Status VALUES (4, 'Finalizado');
INSERT INTO Status VALUES (5, 'Cancelado');


