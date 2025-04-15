/*Exercício: Projeto de Banco de Dados para Transportadora
Lista de Tabelas e Campos:
1. Utilizar os campos listados acima para criar os scripts SQL das tabelas.  
2. Estabelecer os relacionamentos entre as tabelas (por exemplo: *Clientes* ↔ *Endereços*, *Pedidos* ↔ *Itens_Pedido*).  
3. definir as chaves primárias e estrangeiras   
4. Validar o modelo criado com testes de inserção de dados
*/

create table clientes (
   id_cliente  integer not null primary key,
   Nome  varchar2(255) not null,
   CPF_CNPJ  varchar2(14) not null,
   Telefone  varchar2(30),
   Email  varchar2(255),
   Data_Cadastro  date
);

/*************************************************************************************************************/

create table Enderecos (
   id_endereco  integer not null primary key,
   id_cliente  integer not null,
   Logradouro  varchar2(255),
   Numero  number,
   Complemento  varchar2(255),
   Bairro  varchar2(255),
   Cidade  varchar2(255),
   Estado  varchar2(255),
   CEP  varchar2(10),
   
   CONSTRAINT fk_cliente_enderecos FOREIGN KEY (id_cliente) REFERENCES Clientes(id_cliente)
);

/*************************************************************************************************************/

create table Motoristas(
   id_motorista  integer not null primary key,
   Nome  varchar2(255),
   CNH  varchar2(12),
   Categoria_CNH  varchar2(255),
   Telefone  varchar2(30),
   Data_Admissao  date
);

/*************************************************************************************************************/

create table Veiculos (  
   id_veiculo  integer not null primary key,
   Placa  varchar2(10),
   Modelo  varchar2(255),
   Fabricante  varchar2(255),
   Ano  number,
   CapacidadeCarga  float
);

/*************************************************************************************************************/

create table Rotas (  
   id_rota  integer not null primary key,
   Origem  varchar2(255),
   Destino  varchar2(255),
   Distancia_KM  float,
   Tempo_Estimado  varchar2(255)
);

/*************************************************************************************************************/

create table Pedidos (  
   id_pedido  integer not null primary key,
   id_cliente  integer not null,
   Data_Pedido  date,
   Data_Entrega  date,
   Status  varchar2(255),
   
   CONSTRAINT fk_cliente_pedidos FOREIGN KEY (id_cliente) REFERENCES Clientes(id_cliente)
);

/*************************************************************************************************************/

create table Itens_Pedido (  
   id_item_pedido  integer not null primary key,
   id_pedido  integer not null,
   Descricao  varchar2(255),
   Quantidade  number,
   Peso  float,
   Valor float,
   
   CONSTRAINT fk_itens_pedido_pedido FOREIGN KEY (id_pedido) REFERENCES Pedidos(id_pedido)
);

/*************************************************************************************************************/

create table Despachos (  
   id_despacho  integer not null primary key,
   id_pedido  integer not null,
   id_motorista  integer not null,
   id_veiculo  integer not null,
   DataDespacho  date,
   DataPrevistaEntrega  date,
   
   CONSTRAINT fk_despachos_pedido FOREIGN KEY (id_pedido) REFERENCES Pedidos(id_pedido),
   CONSTRAINT fk_despachos_motorista FOREIGN KEY (id_motorista) REFERENCES Motoristas(id_motorista),
   CONSTRAINT fk_despachos_veiculos FOREIGN KEY (id_veiculo) REFERENCES Veiculos(id_veiculo)
);

/*************************************************************************************************************/

create table Status_Entrega (  
   id_status_entrega  integer not null primary key,
   id_pedido  integer not null,
   DataAtualizacao  date,
   Descricao  varchar2(255),
   
   CONSTRAINT fk_Status_Entrega_pedidos FOREIGN KEY (id_pedido) REFERENCES Pedidos(id_pedido)
);

/*************************************************************************************************************/

create table Manutencoes (  
   id_manutencao  integer not null primary key,
   id_veiculo  integer not null,
   Data_Manutencao  date,
   Descricao  varchar2(255),
   Custo  float,
   
   CONSTRAINT fk_Manutencoes_veiculos FOREIGN KEY (id_veiculo) REFERENCES Veiculos(id_veiculo)
);

/*************************************************************************************************************/

create table Combustível (  
   id_abastecimento  integer not null primary key,
   id_veiculo  integer not null,
   Data  date,
   QuantidadeLitros  float,
   CustoTotal  float,
   
   CONSTRAINT fk_combustivel_veiculos FOREIGN KEY (id_veiculo) REFERENCES Veiculos(id_veiculo)
);

/*************************************************************************************************************/

create table Seguros (  
   id_seguro  integer not null primary key,
   id_pedido integer not null,  
   ValorCobertura  float,
   DataInicio  date,
   DataFim  date,
   
   CONSTRAINT fk_seguros_pedidos FOREIGN KEY (id_pedido) REFERENCES pedidos(id_pedido)
);

/*************************************************************************************************************/

create table Custos_Operacionais (  
   id_custo_operacional  integer not null primary key,
   Descricao  varchar2(255),
   Valor  float,
   DataRegistro  date
);

/*************************************************************************************************************/

create table Armazens (  
   id_armazem  integer not null primary key,
   Nome  varchar2(255),
   Cidade  varchar2(255),
   Estado  varchar2(255),
   Capacidade  number
);

/*************************************************************************************************************/
   
create table Inventarios (  
   id_inventario  integer not null primary key,
   id_armazem integer not null,  
   Descricao  varchar2(255),
   Quantidade  number,
   
   CONSTRAINT fk_Inventarios_armazens FOREIGN KEY (id_armazem) REFERENCES armazens(id_armazem)
);

/*************************************************************************************************************/

create table Funcionarios (  
   id_funcionario  integer not null primary key,
   Nome  varchar2(255),
   Cargo  varchar2(255),
   Telefone  varchar2(30),
   DataAdmissao  date,
   Salario  float
);

/*************************************************************************************************************/

create table Jornadas_Trabalho (  
   id_jornada_trabalho  integer not null primary key,
   id_motorista integer not null,  
   id_funcionario integer not null,  
   DataInicio  date,
   DataFim  date,
   HorasTrabalhadas  varchar2(255),
   
   CONSTRAINT fk_Jornadas_Trabalho_motoristas FOREIGN KEY (id_motorista) REFERENCES motoristas(id_motorista),
   CONSTRAINT fk_Jornadas_Trabalho_funcionarios FOREIGN KEY (id_funcionario) REFERENCES funcionarios(id_funcionario)
);

/*************************************************************************************************************/

create table Pagamentos (  
   id_pagamento  integer not null primary key,
   id_cliente  integer not null,
   Valor  float,
   DataPagamento  date,
   FormaPagamento  varchar2(255),
   
   CONSTRAINT fk_Pagamentos_Clientes FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente)
);

/*************************************************************************************************************/

create table Multas (  
   id_multa  integer not null primary key,
   id_veiculo integer not null,  
   DataMulta  date,
   Descricao  varchar2(255),
   Valor  float,
   
   CONSTRAINT fk_multas_veiculos FOREIGN KEY (id_veiculo) REFERENCES veiculos(id_veiculo)
);

/*************************************************************************************************************/

create table Relatorios_Operacionais (  
   id_relatorio  integer not null primary key,
   Data_Relatorio  date,
   Descricao  varchar2(255),
   Responsavel  varchar2(255)
);

/*************************************************************************************************************/

INSERT INTO clientes VALUES (1, 'Rodrigo', '123.456.789-10', '(16)324435345', 'r1@email.com', '14/04/2025');
INSERT INTO clientes VALUES (2, 'Camila Rocha', '845.127.963-22', '(21)99876-4321', 'camila.rocha@email.com', TO_DATE('12/03/2025', 'DD/MM/YYYY'));
INSERT INTO clientes VALUES (3, 'Lucas Pereira', '753.951.456-33', '(31)98745-1230', 'lucas.pereira@email.com', TO_DATE('27/02/2025', 'DD/MM/YYYY'));
INSERT INTO clientes VALUES (4, 'Juliana Mota', '984.123.789-99', '(41)99567-7890', 'juliana.mota@email.com', TO_DATE('15/01/2025', 'DD/MM/YYYY'));
INSERT INTO clientes VALUES (5, 'Thiago Martins', '456.987.321-00', '(61)91234-9988', 'thiago.martins@email.com', TO_DATE('30/03/2025', 'DD/MM/YYYY'));
INSERT INTO clientes VALUES (6, 'Aline Costa', '123.789.654-77', '(71)98765-1234', 'aline.costa@email.com', TO_DATE('02/04/2025', 'DD/MM/YYYY'));
INSERT INTO clientes VALUES (7, 'Felipe Souza', '369.258.147-44', '(51)99654-7890', 'felipe.souza@email.com', TO_DATE('25/03/2025', 'DD/MM/YYYY'));
INSERT INTO clientes VALUES (8, 'Mariana Silva', '741.852.963-11', '(47)99876-4455', 'mariana.silva@email.com', TO_DATE('08/04/2025', 'DD/MM/YYYY'));
INSERT INTO clientes VALUES (9, 'Rafael Nunes', '258.147.369-55', '(85)99777-8888', 'rafael.nunes@email.com', TO_DATE('19/03/2025', 'DD/MM/YYYY'));
INSERT INTO clientes VALUES (10, 'Larissa Lima', '654.321.987-66', '(31)98888-9999', 'larissa.lima@email.com', TO_DATE('10/04/2025', 'DD/MM/YYYY'));
INSERT INTO clientes VALUES (11, 'Bruno Almeida', '231.654.789-01', '(11)91234-5678', 'bruno.almeida@email.com', TO_DATE('05/04/2025', 'DD/MM/YYYY'));

INSERT INTO Enderecos VALUES (1, 1, 'Rua das Palmeiras', 150, 'Apto 202', 'Jardim América', 'São Paulo', 'SP', '01311-300');
INSERT INTO Enderecos VALUES (2, 2, 'Av. Brasil', 2500, NULL, 'Centro', 'Rio de Janeiro', 'RJ', '20040-002');
INSERT INTO Enderecos VALUES (3, 3, 'Rua Santa Clara', 45, 'Casa', 'Santa Cecília', 'Belo Horizonte', 'MG', '30140-150');
INSERT INTO Enderecos VALUES (4, 4, 'Rua do Sol', 890, NULL, 'Boa Vista', 'Recife', 'PE', '50070-240');
INSERT INTO Enderecos VALUES (5, 5, 'Av. Independência', 320, 'Bloco B', 'Jardim Botânico', 'Porto Alegre', 'RS', '90690-000');
INSERT INTO Enderecos VALUES (6, 6, 'Rua das Acácias', 101, NULL, 'Vila Mariana', 'São Paulo', 'SP', '04110-060');
INSERT INTO Enderecos VALUES (7, 7, 'Rua Sete de Setembro', 75, 'Loja 3', 'Centro', 'Curitiba', 'PR', '80020-240');
INSERT INTO Enderecos VALUES (8, 8, 'Av. das Nações', 500, NULL, 'Lago Sul', 'Brasília', 'DF', '71680-001');
INSERT INTO Enderecos VALUES (9, 8, 'Av. do Mundo', 100, NULL, 'Lago Norte', 'Brasília', 'DF', '71680-001');

INSERT INTO Motoristas VALUES (1, 'Carlos Silva', '12345678900', 'C', '(11)98765-4321', TO_DATE('12/03/2022','DD/MM/YYYY'));
INSERT INTO Motoristas VALUES (2, 'Fernanda Oliveira', '23456789011', 'D', '(21)99876-5432', TO_DATE('07/07/2021','DD/MM/YYYY'));
INSERT INTO Motoristas VALUES (3, 'João Mendes', '34567890122', 'E', '(31)91234-5678', TO_DATE('25/11/2020','DD/MM/YYYY'));
INSERT INTO Motoristas VALUES (4, 'Luciana Costa', '45678901233', 'B', '(41)93456-7890', TO_DATE('14/05/2023','DD/MM/YYYY'));
INSERT INTO Motoristas VALUES (5, 'Rafael Lima', '56789012344', 'C', '(51)95678-1234', TO_DATE('30/01/2024','DD/MM/YYYY'));

INSERT INTO Veiculos VALUES (1, 'ABC1D23', 'Strada', 'Fiat', 2022, 720.5);
INSERT INTO Veiculos VALUES (2, 'XYZ4E56', 'S10', 'Chevrolet', 2023, 1200.0);
INSERT INTO Veiculos VALUES (3, 'LMN7F89', 'Ducato', 'Fiat', 2021, 1500.0);
INSERT INTO Veiculos VALUES (4, 'QWE2R45', 'Sprinter', 'Mercedes-Benz', 2020, 1800.0);
INSERT INTO Veiculos VALUES (5, 'TYU8I12', 'Fiorino', 'Fiat', 2024, 650.0);

INSERT INTO Rotas VALUES (1, 'São Paulo', 'Campinas', 100.5, '1h30min');
INSERT INTO Rotas VALUES (2, 'Campinas', 'Ribeirão Preto', 230.7, '3h10min');
INSERT INTO Rotas VALUES (3, 'Ribeirão Preto', 'Uberlândia', 330.8, '4h20min');
INSERT INTO Rotas VALUES (4, 'Uberlândia', 'Belo Horizonte', 540.0, '7h45min');
INSERT INTO Rotas VALUES (5, 'Belo Horizonte', 'Rio de Janeiro', 435.0, '6h10min');

INSERT INTO Pedidos VALUES (1, 1, TO_DATE('01/04/2025','DD/MM/YYYY'), TO_DATE('05/04/2025','DD/MM/YYYY'), 'Aguardando envio');
INSERT INTO Pedidos VALUES (2, 2, TO_DATE('02/04/2025','DD/MM/YYYY'), TO_DATE('06/04/2025','DD/MM/YYYY'), 'Enviado');
INSERT INTO Pedidos VALUES (3, 3, TO_DATE('03/04/2025','DD/MM/YYYY'), TO_DATE('07/04/2025','DD/MM/YYYY'), 'Entregue');
INSERT INTO Pedidos VALUES (4, 4, TO_DATE('04/04/2025','DD/MM/YYYY'), TO_DATE('08/04/2025','DD/MM/YYYY'), 'Cancelado');
INSERT INTO Pedidos VALUES (5, 5, TO_DATE('05/04/2025','DD/MM/YYYY'), TO_DATE('09/04/2025','DD/MM/YYYY'), 'Aguardando envio');

INSERT INTO Itens_Pedido VALUES (1, 1, 'Pastilha de freio', 10, 2.5, 250.00);
INSERT INTO Itens_Pedido VALUES (2, 2, 'Filtro de óleo', 5, 1.2, 120.00);
INSERT INTO Itens_Pedido VALUES (3, 3, 'Correia dentada', 3, 3.1, 350.00);
INSERT INTO Itens_Pedido VALUES (4, 4, 'Sensor de oxigênio', 2, 0.5, 600.00);
INSERT INTO Itens_Pedido VALUES (5, 5, 'Radiador', 1, 5.0, 950.00);

INSERT INTO Despachos VALUES (16, 1, 1, 1, TO_DATE('02/04/2025','DD/MM/YYYY'), TO_DATE('05/04/2025','DD/MM/YYYY'), 4);
INSERT INTO Despachos VALUES (17, 2, 2, 2, TO_DATE('03/04/2025','DD/MM/YYYY'), TO_DATE('06/04/2025','DD/MM/YYYY'), 1);
INSERT INTO Despachos VALUES (18, 3, 3, 3, TO_DATE('04/04/2025','DD/MM/YYYY'), TO_DATE('07/04/2025','DD/MM/YYYY'), 2);
INSERT INTO Despachos VALUES (28, 4, 4, 4, TO_DATE('05/04/2025','DD/MM/YYYY'), TO_DATE('08/04/2025','DD/MM/YYYY'), 4);
INSERT INTO Despachos VALUES (21, 5, 5, 5, TO_DATE('06/04/2025','DD/MM/YYYY'), TO_DATE('09/04/2025','DD/MM/YYYY'), 4);

INSERT INTO Status_Entrega VALUES (1, 1, TO_DATE('03/04/2025','DD/MM/YYYY'), 'Em trânsito');
INSERT INTO Status_Entrega VALUES (2, 2, TO_DATE('04/04/2025','DD/MM/YYYY'), 'Entregue');
INSERT INTO Status_Entrega VALUES (3, 3, TO_DATE('05/04/2025','DD/MM/YYYY'), 'Aguardando retirada');
INSERT INTO Status_Entrega VALUES (4, 4, TO_DATE('06/04/2025','DD/MM/YYYY'), 'Devolvido');
INSERT INTO Status_Entrega VALUES (5, 5, TO_DATE('07/04/2025','DD/MM/YYYY'), 'Entregue');

INSERT INTO Manutencoes VALUES (1, 1, TO_DATE('10/02/2025','DD/MM/YYYY'), 'Troca de óleo e filtro', 300.00);
INSERT INTO Manutencoes VALUES (2, 2, TO_DATE('11/02/2025','DD/MM/YYYY'), 'Revisão dos freios', 450.00);
INSERT INTO Manutencoes VALUES (3, 3, TO_DATE('15/03/2025','DD/MM/YYYY'), 'Troca de amortecedor', 800.00);
INSERT INTO Manutencoes VALUES (4, 4, TO_DATE('20/03/2025','DD/MM/YYYY'), 'Correia dentada', 600.00);
INSERT INTO Manutencoes VALUES (5, 5, TO_DATE('22/03/2025','DD/MM/YYYY'), 'Alinhamento e balanceamento', 150.00);

INSERT INTO Combustível VALUES (1, 1, TO_DATE('01/04/2025','DD/MM/YYYY'), 50.0, 325.00);
INSERT INTO Combustível VALUES (2, 2, TO_DATE('02/04/2025','DD/MM/YYYY'), 60.0, 390.00);
INSERT INTO Combustível VALUES (3, 3, TO_DATE('03/04/2025','DD/MM/YYYY'), 55.0, 357.50);
INSERT INTO Combustível VALUES (4, 4, TO_DATE('04/04/2025','DD/MM/YYYY'), 70.0, 455.00);
INSERT INTO Combustível VALUES (5, 5, TO_DATE('05/04/2025','DD/MM/YYYY'), 45.0, 292.50);

INSERT INTO Seguros VALUES (1, 1, 50000.00, TO_DATE('01/04/2025','DD/MM/YYYY'), TO_DATE('01/04/2026','DD/MM/YYYY'));
INSERT INTO Seguros VALUES (2, 2, 60000.00, TO_DATE('02/04/2025','DD/MM/YYYY'), TO_DATE('02/04/2026','DD/MM/YYYY'));
INSERT INTO Seguros VALUES (3, 3, 70000.00, TO_DATE('03/04/2025','DD/MM/YYYY'), TO_DATE('03/04/2026','DD/MM/YYYY'));
INSERT INTO Seguros VALUES (4, 4, 80000.00, TO_DATE('04/04/2025','DD/MM/YYYY'), TO_DATE('04/04/2026','DD/MM/YYYY'));
INSERT INTO Seguros VALUES (5, 5, 90000.00, TO_DATE('05/04/2025','DD/MM/YYYY'), TO_DATE('05/04/2026','DD/MM/YYYY'));

INSERT INTO Custos_Operacionais VALUES (1, 'Troca de pneus', 1200.00, TO_DATE('10/03/2025','DD/MM/YYYY'));
INSERT INTO Custos_Operacionais VALUES (2, 'Manutenção preventiva', 850.00, TO_DATE('12/03/2025','DD/MM/YYYY'));
INSERT INTO Custos_Operacionais VALUES (3, 'IPVA', 1800.00, TO_DATE('15/01/2025','DD/MM/YYYY'));
INSERT INTO Custos_Operacionais VALUES (4, 'Seguro', 2500.00, TO_DATE('20/01/2025','DD/MM/YYYY'));
INSERT INTO Custos_Operacionais VALUES (5, 'Documentação', 600.00, TO_DATE('05/02/2025','DD/MM/YYYY'));

INSERT INTO Armazens VALUES (1, 'Central SP', 'São Paulo', 'SP', 150);
INSERT INTO Armazens VALUES (2, 'Estoque Campinas', 'Campinas', 'SP', 120);
INSERT INTO Armazens VALUES (3, 'Hub RJ', 'Rio de Janeiro', 'RJ', 200);
INSERT INTO Armazens VALUES (4, 'Centro BH', 'Belo Horizonte', 'MG', 170);
INSERT INTO Armazens VALUES (5, 'Unidade Sul', 'Porto Alegre', 'RS', 130);

INSERT INTO Inventarios VALUES (1, 1, 'Filtros de óleo', 50);
INSERT INTO Inventarios VALUES (2, 2, 'Correias dentadas', 30);
INSERT INTO Inventarios VALUES (3, 3, 'Pastilhas de freio', 70);
INSERT INTO Inventarios VALUES (4, 4, 'Radiadores', 10);
INSERT INTO Inventarios VALUES (5, 5, 'Sensores de oxigênio', 15);

INSERT INTO Funcionarios VALUES (1, 'Bruno Costa', 'Atendente', '(11)98888-1111', TO_DATE('05/01/2024','DD/MM/YYYY'), 2100.00);
INSERT INTO Funcionarios VALUES (2, 'Patrícia Silva', 'Supervisor', '(21)97777-2222', TO_DATE('20/02/2023','DD/MM/YYYY'), 4100.00);
INSERT INTO Funcionarios VALUES (3, 'Leandro Souza', 'Mecânico', '(31)96666-3333', TO_DATE('15/03/2022','DD/MM/YYYY'), 3500.00);
INSERT INTO Funcionarios VALUES (4, 'Mariana Lima', 'Auxiliar de Logística', '(41)95555-4444', TO_DATE('30/06/2021','DD/MM/YYYY'), 2800.00);
INSERT INTO Funcionarios VALUES (5, 'Rafael Duarte', 'Gerente Operacional', '(51)94444-5555', TO_DATE('10/12/2020','DD/MM/YYYY'), 6200.00);

INSERT INTO Jornadas_Trabalho VALUES (1, 1, 3, TO_DATE('01/04/2025','DD/MM/YYYY'), TO_DATE('01/04/2025','DD/MM/YYYY'), '8h');
INSERT INTO Jornadas_Trabalho VALUES (2, 2, 3, TO_DATE('02/04/2025','DD/MM/YYYY'), TO_DATE('02/04/2025','DD/MM/YYYY'), '8h');
INSERT INTO Jornadas_Trabalho VALUES (3, 3, 3, TO_DATE('03/04/2025','DD/MM/YYYY'), TO_DATE('03/04/2025','DD/MM/YYYY'), '8h');
INSERT INTO Jornadas_Trabalho VALUES (4, 4, 4, TO_DATE('04/04/2025','DD/MM/YYYY'), TO_DATE('04/04/2025','DD/MM/YYYY'), '8h');
INSERT INTO Jornadas_Trabalho VALUES (5, 5, 4, TO_DATE('05/04/2025','DD/MM/YYYY'), TO_DATE('05/04/2025','DD/MM/YYYY'), '8h');

INSERT INTO Pagamentos VALUES (1, 1, 500.00, TO_DATE('06/04/2025','DD/MM/YYYY'), 'Pix');
INSERT INTO Pagamentos VALUES (2, 2, 750.00, TO_DATE('07/04/2025','DD/MM/YYYY'), 'Cartão de Crédito');
INSERT INTO Pagamentos VALUES (3, 3, 600.00, TO_DATE('08/04/2025','DD/MM/YYYY'), 'Boleto');
INSERT INTO Pagamentos VALUES (4, 4, 550.00, TO_DATE('09/04/2025','DD/MM/YYYY'), 'Dinheiro');
INSERT INTO Pagamentos VALUES (5, 5, 800.00, TO_DATE('10/04/2025','DD/MM/YYYY'), 'Pix');

INSERT INTO Multas VALUES (1, 1, TO_DATE('05/04/2025','DD/MM/YYYY'), 'Excesso de velocidade', 130.00);
INSERT INTO Multas VALUES (2, 2, TO_DATE('06/04/2025','DD/MM/YYYY'), 'Estacionamento irregular', 195.00);
INSERT INTO Multas VALUES (3, 3, TO_DATE('07/04/2025','DD/MM/YYYY'), 'Avanço de sinal', 293.47);
INSERT INTO Multas VALUES (4, 4, TO_DATE('08/04/2025','DD/MM/YYYY'), 'Documento vencido', 293.47);
INSERT INTO Multas VALUES (5, 5, TO_DATE('09/04/2025','DD/MM/YYYY'), 'Falta de cinto de segurança', 195.23);

INSERT INTO Relatorios_Operacionais VALUES (1, TO_DATE('05/04/2025','DD/MM/YYYY'), 'Movimentação de cargas - Semana 14', 'Rafael Duarte');
INSERT INTO Relatorios_Operacionais VALUES (2, TO_DATE('06/04/2025','DD/MM/YYYY'), 'Manutenção de veículos abril', 'Leandro Souza');
INSERT INTO Relatorios_Operacionais VALUES (3, TO_DATE('07/04/2025','DD/MM/YYYY'), 'Pedidos concluídos semana 14', 'Patrícia Silva');
INSERT INTO Relatorios_Operacionais VALUES (4, TO_DATE('08/04/2025','DD/MM/YYYY'), 'Inventário armazéns SP', 'Bruno Costa');
INSERT INTO Relatorios_Operacionais VALUES (5, TO_DATE('09/04/2025','DD/MM/YYYY'), 'Análise de custos trimestral', 'Rafael Duarte');



